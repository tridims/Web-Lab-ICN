// import { PrismaClient } from ".prisma/client";

import prisma from "../lib/prisma"
import { faker } from "@faker-js/faker"
import { TIMEOUT } from "dns"
import { isIP } from "net"
import ShortUniqueId from "short-unique-id"

// async function main(){
//     for(let i=0;i<10;i++)
//         await prisma.anggota.create({
//             data:{
//                 email: faker.internet.email(),
//                 nama: faker.name.fullName(),
//                 nim_nip: faker.phone.number("2#5############"),
//                 prodi: faker.datatype.number({min: 1, max:5}),
//                 tipe: faker.datatype.number({min: 0, max:2})
//             }
//         })
//     for(let i=0;i<5;i++)
//         await prisma.tags.create({
//             data:{
//                 nama: faker.name.jobTitle(),
//             }
//         })
//     for(let i=0;i<12;i++)
//         await prisma.kegiatan.create({
//             data:{
//                 tipe: faker.datatype.number({min:1,max:4}),
//                 judul: faker.lorem.sentence(5),
//                 gambar: faker.image.imageUrl(480,480),
//                 deskripsi: faker.lorem.sentence(15),
//                 artikel: faker.lorem.sentences(200)
//             }
//         })
//     for(let i=1;i<4;i++)
//         for(let j=1;j<5;j++)
//             await prisma.tags_on_kegiatan.create({
//                 data:{
//                     kegiatan_id: i,
//                     tags_id: faker.datatype.number({min:1,max:5})
//                 }
//             })
//     for(let i=1;i<4;i++)
//         for(let j=1;j<5;j++)
//             await prisma.anggota_on_kegiatan.create({
//                 data:{
//                     kegiatan_id: i,
//                     anggota_id: faker.datatype.number({min:1,max:10})
//                 }
//             })
//     for(let i=0;i<20;i++)
//         await prisma.barang.create({
//             data:{
//                 nama: faker.lorem.word({length:20}),
//                 deskripsi: faker.lorem.sentence(15),
//                 jumlah: faker.datatype.number({min:4,max:10}),
//             }
//         })
//     for(let i=0;i<15;i++)
//         await prisma.pesan.create({
//             data:{
//                 email: faker.internet.email(),
//                 pesan: faker.lorem.sentences(5)
//             }
//         })
//     for(let i=0;i<10;i++)
//         await prisma.peminjaman.create({
//             data:{
//                 nama: faker.name.fullName(),
//                 alamat: faker.address.buildingNumber(),
//                 nim: faker.phone.number("2#5############"),
//                 no_telp: faker.phone.number("+62 ### #### ####"),
//                 pinjam: faker.date.recent(3),
//                 kembali: faker.date.soon(4),
//                 email: faker.internet.email(),
//                 keperluan: faker.lorem.sentence(10),
//                 kode_peminjaman: new ShortUniqueId().randomUUID(6)
//             }
//         })
//     for(let i=0;i<10;i++)
//     await prisma.peminjaman.create({
//         data:{
//             nama: faker.name.fullName(),
//             alamat: faker.address.buildingNumber(),
//             nim: faker.phone.number("2#5############"),
//             no_telp: faker.phone.number("+62 ### #### ####"),
//             pinjam: faker.date.recent(3),
//             kembali: faker.date.soon(4),
//             email: faker.internet.email(),
//             keperluan: faker.lorem.sentence(10),
//             kode_peminjaman: new ShortUniqueId().randomUUID(6),
//             penerima: faker.name.fullName(),
//             status: true,
//             aktual_kembali: faker.date.soon(1)
//             }
//         })
//     for(let i=1;i<11;i++)
//         for(let j=1;j<3;j++)
//             await prisma.barang_on_peminjaman.create({
//                 data:{
//                     peminjaman_id: i,
//                     barang_id: faker.datatype.number({min:1,max:20}),
//                     jumlah: faker.datatype.number({min:1,max:5})
//                 }
//             })
//     for(let i=0;i<100;i++)
//         await prisma.presensi.create({
//             data:{
//                 email: faker.internet.email(),
//                 nim: faker.phone.number("2#5############"),
//                 nama: faker.name.fullName(),
//                 keperluan: faker.lorem.sentence(10),
//                 no_telp: faker.phone.number("+62 ### #### ####")
//             }
//         })
//     for(let i=0;i<10;i++){
//         await prisma.pengumuman.create({
//             data:{
//                 judul:faker.lorem.sentence(10),
//                 isi: faker.lorem.lines(7)
//             }
//         })
//     }
// }


// prodi: 
//      1 = S1 TIF
//      2 = S1 TEKKOM
//      3 = S1 TI
//      4 = S1 SI
//      5 = S1 PTI
//      6 = S2 Magister IlKom
// tipe:
//      0 = Kepala Lab
//      1 = Anggota Dosen
//      2 = Anggota Mahasiswa
async function anggota(){
    let input=[
        {
            email: "kasyful@ub.ac.id",
            nama: "Kasyful Amron, S.T., M.Sc.",
            nim_nip: "19750803 200312 1003",
            prodi: 1,
            tipe: 0
        },
        {
            email:"abazh@ub.ac.id",
            nama:"Achmad Basuki, S.T., M.MG., Ph.D.",
            nim_nip:"197411182003121002",
            prodi:2,
            tipe:1
        },
        {
            email:"ari.kusyanti@ub.ac.id",
            nama:"Ari Kusyanti, S.T., M.Sc.",
            nim_nip:"198312282018032002",
            prodi:1,
            tipe:1
        },
        {
            email:"dany.jalin@ub.ac.id",
            nama:"Dany Primanita Kartikasari, S.T., M.Kom.",
            nim_nip:"19771116 200501 2 003",
            prodi:1,
            tipe:1
        },
        {
            email:"ekosakti@ub.ac.id",
            nama:"Eko Sakti Pramukantoro, S.Kom., M.Kom., Ph.D",
            nim_nip:"",
            prodi:1,
            tipe:1
        },
        {
            email:"fariz@ub.ac.id",
            nama:"Fariz Andri Bakhtiar, S.T., M.Kom.",
            nim_nip:"2017098463141001",
            prodi:1,
            tipe:1
        },
        {
            email:"mahendra.data@ub.ac.id",
            nama:"Mahendra Data, S.Kom., M.Kom., Ph.D",
            nim_nip:"2015038611171001",
            prodi:1,
            tipe:1
        },
        {
            email:"nur.hazbiy@ub.ac.id",
            nama:"Nur Hazbiy Shaffan, S.T., M.T.",
            nim_nip:"",
            prodi:1,
            tipe:1
        },
        {
            email:"prima@ub.ac.id",
            nama:"Ir. Primantara Hari Trisnawan, M.Sc.",
            nim_nip:"196809121994031002",
            prodi:1,
            tipe:1
        },
        {
            email:"reza.jalin@ub.ac.id",
            nama:"Reza Andria Siregar, S.T., M.Kom.",
            nim_nip:"19790621 200604 1 003",
            prodi:1,
            tipe:1
        },
        {
            email:"widhi.yahya@ub.ac.id",
            nama:"Widhi Yahya, S.Kom., M.Sc.",
            nim_nip:"",
            prodi:1,
            tipe:1
        },
        {
            email:"gebel909@student.ub.ac.id",
            nama:"GABRIELLE EVAN FARREL",
            nim_nip:"205150201111033",
            prodi:1,
            tipe:2
        },
        {
            email:"noverdiramadhan@student.ub.ac.id",
            nama:"Noverdi Anugrah Ramadhan",
            nim_nip:"205150200111059",
            prodi:1,
            tipe:2
        },
        {
            email:"anabalqis@student.ub.ac.id",
            nama:"Ana Balqis Sholehah",
            nim_nip:"205150200111063",
            prodi:1,
            tipe:2
        },
        {
            email:"ifadatulkhoiroh@student.ub.ac.id",
            nama:"Ifadatul Khoiroh",
            nim_nip:"205150207111044",
            prodi:1,
            tipe:2
        }
    ]
    for(let i=0;i<input.length;i++)
        await prisma.anggota.create({
            data:{
                email:input[i].email,
                nama:input[i].nama,
                nim_nip:input[i].nim_nip,
                prodi:input[i].prodi,
                tipe:input[i].tipe
            }
        })
}

async function tags(){
    let input = [
        {
            nama: "tri dharma"
        },
        {
            nama: "MoodleBox"
        },
        {
            nama: "Raspberry pi"
        },
        {
            nama: "Covid 19"
        },
        {
            nama: "edukasi"
        },
        {
            nama: "mangrove"
        },
        {
            nama: "Online course"
        },
        {
            nama: "platform"
        },
        {
            nama: "redhat"
        },
        {
            nama: "industry visit"
        },
        {
            nama: "pandemi"
        },
        {
            nama: "FILKOM UB"
        },
        {
            nama: "laboratorium"
        },
        {
            nama: "kemampuan"
        },
        {
            nama: "IIT Hyderbad"
        },
        {
            nama: "research"
        },
        {
            nama: "mahasiswa india"
        },
        {
            nama: "IOT"
        },
        {
            nama: "SDN"
        },
        {
            nama: "WSN"
        }
    ]
    for(let i=0;i<input.length;i++)
        await prisma.tags.create({
            data:{
                nama:input[i].nama,
            }
        })
}

// async function kegiatan(){
//     let input = [
//         {
//             tipe: faker.datatype.number({min:1,max:4}),
//             judul: faker.lorem.sentence(5),
//             gambar: faker.image.imageUrl(480,480),
//             deskripsi: faker.lorem.sentence(15),
//             artikel: faker.lorem.sentences(200)
//         }
//     ]
// }

async function main(){
    anggota()
    tags()
}

main()