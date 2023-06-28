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

// tipe:
//      1 = Penelitian
//      2 = Pengabdian
//      3 = Pendidikan
//      4 = Kegiatan Lain
async function kegiatan(){
    await prisma.kegiatan.create({
        data:{
            tipe:2,
            judul:"Pemanfaatan Moodlebox Berbasis Raspberry Pi sebagai Media Pembelajaran Daring bagi Komunitas Konservasi Mangrove di Malang Selatan",
            gambar: "uploads/Rectangle 21.png",
            deskripsi: "Foto bersama setelah serah terima perangkat MoodleBox berbasis Raspberry Pi dari tim dosen FILKOM kepada komunitas konservasi mangrove",
            artikel: "Dalam rangka menunaikan salah satu unsur Tri-Dharma Perguruan Tinggi, tim dosen dari Fakultas Ilmu Komputer Universitas Brawijaya (FILKOM UB) kembali melaksanakan program pengabdian kepada masyarakat. Kelompok dosen yang beranggotakan Ari Kusyanti, S.T., M.Sc., Ir. Primantara hari Trisnawan, M.Sc., dan Kasyful Amron, S.T., M.Sc., serta diketuai oleh Fariz Andri Bakhtiar, S.T., M.Kom. ini berupaya memberikan pelatihan mengenai pemanfaatan MoodleBox berbasis Raspberry Pi kepada masyarakat komunitas konservasi mangrove di daerah Malang Selatan. Program pengabdian ini juga melibatkan mahasiswa aktif Fakultas Ilmu Komputer, antara lain Gabrielle Evan Farrel dan Ifadatul Khoiroh \
            \
            Semenjak pandemi COVID-19 melanda, edukasi kepada masyarakat awam yang kerap dilakukan oleh komunitas konservasi mangrove pun turut menyesuaikan diri dengan diselenggarakan secara blended (tatap muka dan jarak jauh), dengan memanfaatkan konsep Massive Open Online Course (MOOC). Hanya saja, lokasi edukasi yang jauh dari perkotaan mengakibatkan sering munculnya kendala untuk terkoneksi dengan jaringan internet. Maka, diharapkan platform khusus yang menggunakan server portabel tanpa ketersambungan secara kontinu dengan jaringan internet dapat membantu agar proses edukasi daring di area terpencil tetap dapat terlaksana dalam lingkup jaringan lokal.",
            tags:{
                createMany:{
                    data: [
                        {
                            "tags_id": 1
                        },
                        {
                            "tags_id": 2
                        },
                        {
                            "tags_id": 3
                        },
                        {
                            "tags_id": 4
                        },
                        {
                            "tags_id": 5
                        },
                        {
                            "tags_id": 6
                        },
                        {
                            "tags_id": 7
                        },
                        {
                            "tags_id": 8
                        },
                    ]
                }
            }
        }
    })
    await prisma.kegiatan.create({
        data:{
            tipe: 4,
            judul: "Program Industry Visit Ke Perusahaan Redhat",
            gambar: "uploads/1-7.jpg",
            deskripsi: "",
            artikel: "Setelah masa pandemic, seluruh kegiatan mulai kembali berjalan. Kegiatan yang mengharuskan dilakukan secara tatap muka telah digelar kembali. Pada Kesempatan ini, Fakultas Ilmu Komputer Universitas Brawijaya (FILKOM UB) yang di sponsori oleh laboratorium jaringan berbasis informasi mengadakan program Industry visit ke salah satu perusahaan yang telah bekerja sama dengan FILKOM yaitu REDHAT.\
            \
            Fakultas Ilmu Komputer mengirimkan 8 mahasiswa delegasi dalam program industry visit REDHAT pada tanggal 27 juni 2022 lalu. Program ini bertujuan untuk mengenalkan dunia industry langsung kepada mahasiswa agar lebih memahami bagaimana kinerja sebuah perusahaan. Selain itu, mahasiswa akan dikenalkan bagaimana lingkungan pekerjaan di bidang teknologi. Pada Kesempatan kali ini laboratorium jaringan berbasis informasi mengirimkan 4 anggota mahasiswanya sebagai delegasi pada program tersebut. Laboratorium jaringan berbasis informasi mengaharapkan apa yang telah di dapat pada program visit industry ini dapat diterapkan dan dikembangkan di lingkungan laboratorium dan mempererat jalinan kerjasama antara perusahaan dengan  Fakultas Ilmu Komputer khususnya Laboratorium jaringan.",
            tags:{
                createMany:{
                    data: [
                        {
                            "tags_id": 9
                        },
                        {
                            "tags_id": 10
                        },
                        {
                            "tags_id": 11
                        },
                        {
                            "tags_id": 12
                        },
                        {
                            "tags_id": 13
                        },
                        {
                            "tags_id": 14
                        },
                    ]
                }
            }
        }
    })
}

async function main(){
    anggota()
    tags()
    kegiatan()
}

main()