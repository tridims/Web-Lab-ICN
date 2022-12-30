// import { PrismaClient } from ".prisma/client";

import prisma from "../lib/prisma"
import { faker } from "@faker-js/faker"

async function main(){
    for(let i=0;i<10;i++)
        await prisma.anggota.create({
            data:{
                email: faker.internet.email(),
                nama: faker.name.fullName(),
                nim_nip: faker.phone.number("2#5############"),
                prodi: faker.datatype.number({min: 1, max:5}),
            }
        })
    for(let i=0;i<5;i++)
        await prisma.tags.create({
            data:{
                nama: faker.name.jobTitle(),
            }
        })
    for(let i=0;i<3;i++)
        await prisma.kegiatan.create({
            data:{
                tipe: faker.datatype.number({min:1,max:4}),
                judul: faker.lorem.sentence(5),
                gambar: faker.image.imageUrl(480,480),
                deskripsi: faker.lorem.sentence(15),
                artikel: faker.lorem.sentences(20)
            }
        })
    for(let i=1;i<4;i++)
        for(let j=1;j<5;j++)
            await prisma.tags_on_kegiatan.create({
                data:{
                    kegiatan_id: i,
                    tags_id: faker.datatype.number({min:1,max:5})
                }
            })
    for(let i=1;i<4;i++)
        for(let j=1;j<5;j++)
            await prisma.anggota_on_kegiatan.create({
                data:{
                    kegiatan_id: i,
                    anggota_id: faker.datatype.number({min:1,max:10})
                }
            })
    for(let i=0;i<20;i++)
        await prisma.barang.create({
            data:{
                nama: faker.lorem.word({length:20}),
                deskripsi: faker.lorem.sentence(15),
                jumlah: faker.datatype.number({min:4,max:10}),
            }
        })
    for(let i=0;i<15;i++)
        await prisma.pesan.create({
            data:{
                email: faker.internet.email(),
                pesan: faker.lorem.sentences(5)
            }
        })
    for(let i=0;i<10;i++)
        await prisma.peminjaman.create({
            data:{
                nama: faker.name.fullName(),
                alamat: faker.address.buildingNumber(),
                nim: faker.phone.number("2#5############"),
                no_telp: faker.phone.number("+62 ### #### ####"),
                pinjam: faker.date.recent(3),
                kembali: faker.date.soon(4),
            }
        })
    for(let i=1;i<11;i++)
        for(let j=1;j<3;j++)
            await prisma.barang_on_peminjaman.create({
                data:{
                    peminjaman_id: i,
                    barang_id: faker.datatype.number({min:1,max:20}),
                    jumlah: faker.datatype.number({min:1,max:5})
                }
            })
    for(let i=0;i<100;i++)
        await prisma.presensi.create({
            data:{
                email: faker.internet.email(),
                nim: faker.phone.number("2#5############"),
                nama: faker.name.fullName(),
                keperluan: faker.lorem.sentence(10),
                no_telp: faker.phone.number("+62 ### #### ####")
            }
        })
}

main()