import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { peminjaman } from "@prisma/client";
import jsontrue from "../../../lib/jsontrue";
import jsonfalse from "../../../lib/jsonfalse";
import email from "../../../lib/email";

async function getPinjam(res:any) {
    let pinjam:peminjaman[]
    try {
        pinjam=await prisma.peminjaman.findMany({
            include:{
                barang:{
                    include:{
                        barang:true
                    }
                }
            }
        })
        res.status(200).json(jsontrue("Data query successful",pinjam))
    } catch (error) {
        res.status(500).json(jsonfalse("server is unable to process request",error))
    } 
}

async function postPinjam(req:any,res:any) {
    const body=req.body
    if(body.nama!=null && body.nim!=null && body.no_telp!=null && body.alamat!=null && body.pinjam!=null && body.kembali!=null && body.barang!=null){
        if (Math.ceil(Math.abs(new Date(body.pinjam).getTime()-new Date(body.kembali).getTime()) / (1000 * 3600 * 24))<=7){
            try {
                let result = await prisma.peminjaman.create({
                    data:{
                        nama:body.nama,
                        nim:body.nim,
                        no_telp:body.no_telp,
                        email:body.email,
                        keperluan:body.keperluan,
                        alamat:body.alamat,
                        pinjam:new Date(body.pinjam),
                        kembali:new Date(body.kembali)
                    }
                })
                for(let i=0;i<body.barang.length;i++){
                    let check=await prisma.barang.findFirst({
                        where:{
                            id:body.barang[i].barang_id
                        }
                    })
                    if(check != null && check.jumlah>body.barang[i].jumlah && check.jumlah > 0){
                        await prisma.barang_on_peminjaman.create({
                            data:{
                                peminjaman_id: result.id,
                                barang_id: body.barang[i].barang_id,
                                jumlah: body.barang[i].jumlah
                            }
                        })
                        await prisma.barang.update({
                            where: { id: body.barang[i].barang_id },
                            data:{
                                jumlah: check.jumlah-body.barang[i].jumlah
                            }
                        })
                    } else {
                        await prisma.peminjaman.delete({
                            where:{
                                id:result.id
                            }
                        })
                        await prisma.barang_on_peminjaman.deleteMany({
                            where:{
                                peminjaman_id: result.id
                            }
                        })
                        res.status(400).json(jsonfalse("No stock available","Amount of goods is greater than what's available"))
                    }
                }
                for(let i=0;i<body.barang.length;i++){
                    let check=await prisma.barang.findFirst({
                        where:{
                            id:body.barang[i].barang_id
                        }
                    })
                    if(check!=null)
                        try {
                            await prisma.barang.update({
                                where: { id: body.barang[i].barang_id },
                                data:{
                                    jumlah: check.jumlah-body.barang[i].jumlah
                                }
                            })
                        } catch (error) {
                            res.status(500).json(jsonfalse("Server is unable to process request",error))
                            
                        }
                }
                let barangs=await prisma.peminjaman.findFirst({
                    where:{id:result.id},
                    include:{
                        barang:true
                    }
                })
                email(body.email,"Invoice Peminjaman Barang Lab",JSON.stringify(barangs))
                res.status(200).json(jsontrue("Data added succesfully",result))
            } catch (error) {
                res.status(500).json(jsonfalse("Server is unable to process request",error))
            }
        } else res.status(400).json(jsonfalse("Borrow duration is too long","Duration is > 7 Days"))

    }else res.status(400).json(jsonfalse("Data is not complete","Object is possibly has 'null' values"))
}

async function patchPinjam(req:any,res:any){
    let body=req.body
    try{
        let data=await prisma.peminjaman.findFirst({
            where:{id:body.peminjaman_id}
        })
        try {
            if(data != null && data.status!=true){
                let result=await prisma.$transaction([
                    prisma.peminjaman.update({
                        data:{
                            status:true,
                            penerima:body.penerima
                        },
                        where:{id:data.id}
                    }),
                    prisma.peminjaman.findFirst({
                        where:{id:data.id}
                    })
                ])
                res.status(200).json(jsontrue("Data updated succesfully",result[1]))
            } else
                res.status(400).json(jsonfalse("It's already returned","null"))
        } catch (error) {
            res.status(500).json(jsonfalse("server is unable to process request",error))
        }
    }catch(error){
        res.status(400).json(jsonfalse("Data does not exist",error))
    }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.method==='GET'){
        getPinjam(res)
    }else if(req.method==='POST'){
        postPinjam(req,res)
    }else if(req.method==='PATCH'){
        patchPinjam(req,res)
    }else{
        res.status(200).json(jsontrue("Welcome to Infomation Based Networking Lab's Pinjam API!",null))
    }
}