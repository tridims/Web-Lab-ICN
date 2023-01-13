import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { peminjaman } from "@prisma/client";
import jsontrue from "../../../lib/jsontrue";
import jsonfalse from "../../../lib/jsonfalse";
import email from "../../../lib/email";
import ShortUniqueId from "short-unique-id";
import Peminjaman from "../../../lib/mail/Peminjaman";
import Pengembalian from "../../../lib/mail/Pengembalian";
import ReactDOMServer from "react-dom/server";

async function getPinjam(res: any) {
    let pinjam: peminjaman[]
    try {
        pinjam = await prisma.peminjaman.findMany({
            include: {
                barang: {
                    include: {
                        barang: true
                    }
                }
            }
        })
        res.status(200).json(jsontrue("Data query successful", pinjam))
    } catch (error) {
        res.status(500).json(jsonfalse("server is unable to process request", error))
    }
}

async function postPinjam(req: any, res: any) {
    const body = req.body
    if (body.nama != null && body.nim != null && body.no_telp != null && body.alamat != null && body.pinjam != null && body.kembali != null && body.barang != null) {
        if (Math.ceil((new Date(body.kembali).getTime() - new Date(body.pinjam).getTime()) / (1000 * 3600 * 24)) < 0)
            res.status(400).json(jsonfalse("Borrow duration is too short", "Duration is < 1 Days"))
        if (Math.ceil((new Date(body.kembali).getTime() - new Date(body.pinjam).getTime()) / (1000 * 3600 * 24)) >= 1)
            if (Math.ceil((new Date(body.kembali).getTime() - new Date(body.pinjam).getTime()) / (1000 * 3600 * 24)) <= 7) {
                let idx = 0
                try {
                    let result = await prisma.peminjaman.create({
                        data: {
                            nama: body.nama,
                            nim: body.nim,
                            no_telp: body.no_telp,
                            email: body.email,
                            keperluan: body.keperluan,
                            alamat: body.alamat,
                            pinjam: new Date(body.pinjam),
                            kembali: new Date(body.kembali),
                            kode_peminjaman: new ShortUniqueId().randomUUID(6)
                        }
                    })
                    try {
                        for (let i = 0; i < body.barang.length; i++) {
                            let check = await prisma.barang.findFirst({
                                where: {
                                    id: body.barang[i].barang_id
                                }
                            })
                            if (check != null && check.jumlah >= body.barang[i].jumlah && check.jumlah > 0) {
                                await prisma.barang_on_peminjaman.create({
                                    data: {
                                        peminjaman_id: result.id,
                                        barang_id: body.barang[i].barang_id,
                                        jumlah: body.barang[i].jumlah
                                    }
                                })
                                await prisma.barang.update({
                                    where: { id: body.barang[i].barang_id },
                                    data: {
                                        jumlah: check.jumlah - body.barang[i].jumlah
                                    }
                                })
                                idx++
                            } else {
                                throw new Error()
                            }
                        }
                    } catch (error) {
                        for (let i = 0; i <= idx; i++) {
                            let check = await prisma.barang.findFirst({
                                where: {
                                    id: body.barang[i].barang_id
                                }
                            })
                            if (check != null) {
                                await prisma.barang_on_peminjaman.create({
                                    data: {
                                        peminjaman_id: result.id,
                                        barang_id: body.barang[i].barang_id,
                                        jumlah: body.barang[i].jumlah
                                    }
                                })
                                await prisma.barang.update({
                                    where: { id: body.barang[i].barang_id },
                                    data: {
                                        jumlah: check.jumlah + body.barang[i].jumlah
                                    }
                                })
                            }
                        }
                        await prisma.peminjaman.delete({
                            where: {
                                id: result.id
                            }
                        })
                        await prisma.barang_on_peminjaman.deleteMany({
                            where: {
                                peminjaman_id: result.id
                            }
                        })
                        res.status(400).json(jsonfalse("No stock available", "Amount of goods is greater than what's available"))
                    }
                    let barangs = await prisma.peminjaman.findFirst({
                        where: { id: result.id },
                        include: {
                            barang: {
                                include: {
                                    barang: true
                                }
                            }
                        }
                    })
                    email(body.email, "Invoice Peminjaman Barang Lab", "", ReactDOMServer.renderToStaticMarkup(Peminjaman(barangs))).catch(console.error);
                    res.status(200).json(jsontrue("Data added succesfully", result))
                } catch (error) {
                    res.status(500).json(jsonfalse("Server is unable to process request", error))
                }
            } else res.status(400).json(jsonfalse("Borrow duration is too long", "Duration is > 7 Days"))

    } else res.status(400).json(jsonfalse("Data is not complete", "Object is possibly has 'null' values"))
}

async function patchPinjam(req: any, res: any) {
    let body = req.body
    let data = await prisma.peminjaman.findFirst({
        where: { kode_peminjaman: body.kode_peminjaman }
    })
    try {
        if (data != null && data.status != true) {
            let result = await prisma.$transaction([
                prisma.peminjaman.update({
                    data: {
                        status: true,
                        penerima: body.penerima,
                        aktual_kembali: new Date()
                    },
                    where: { kode_peminjaman: body.kode_peminjaman },
                    include: {
                        barang: true
                    }
                }),
            ])
            let tmp = await prisma.barang_on_peminjaman.findMany({
                where: {
                    peminjaman_id: result[0].id
                }
            })
            tmp.forEach(async (i) => {
                let barang = await prisma.barang.findFirst({
                    where: { id: i.barang_id }
                })
                if (barang != null)
                    await prisma.barang.update({
                        where: { id: i.barang_id },
                        data: {
                            jumlah: barang.jumlah + i.jumlah
                        }
                    })
            })
            let tanggal = datecalc(result[0].kembali, result[0].aktual_kembali)
            let keterlambatan = {}
            if (tanggal >= 1) {
                keterlambatan = {
                    "keterlambatan": `${tanggal} hari`,
                    "denda": `Rp.${tanggal * 20000}`
                }
            }
            email(result[0].email, "Pengembalian Peminjaman Barang Lab", "", ReactDOMServer.renderToStaticMarkup(Pengembalian(result[0], keterlambatan))).catch(console.error);
            res.status(200).json(jsontrue("Data updated succesfully", { peminjaman: result[0], pengembalian: keterlambatan }))
        } else if (data != null && data.status == true) {
            res.status(400).json(jsonfalse("It's already returned", "null"))
        } else
            res.status(400).json(jsonfalse("Data does not exist", "Null data error: Data is null or undefined"))
    } catch (error) {
        res.status(500).json(jsonfalse("server is unable to process request", error))
    }
}

function datecalc(Expected: Date, Actual: Date) {
    return Math.round((Actual.valueOf() - Expected.valueOf()) / 86400)
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        getPinjam(res)
    } else if (req.method === 'POST') {
        postPinjam(req, res)
    } else if (req.method === 'PATCH') {
        patchPinjam(req, res)
    } else {
        res.status(200).json(jsontrue("Welcome to Infomation Based Networking Lab's Pinjam API!", null))
    }
}