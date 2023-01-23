import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { kegiatan } from "@prisma/client";
import jsontrue from "../../../lib/jsontrue";
import jsonfalse from "../../../lib/jsonfalse";
import { writeFileSync } from "fs";
import fs from 'fs';
import base64Decode from "../../../lib/base64d";
import { uuid } from 'uuidv4';
import { match } from "assert";

async function getKegiatan(res: NextApiResponse){
    let kegiatan:kegiatan[]
    try {
        kegiatan=await prisma.kegiatan.findMany({
            include:{
                anggota: {
                    include:{
                        anggota: true
                    }
                },
                tags: {
                    include:{
                        tags: true
                    }
                }
            }
        })
        res.status(200).json(jsontrue("Data query successful",kegiatan))
    } catch (error) {
        res.status(500).json(jsonfalse("server is unable to process request",error))
    }
}

async function postKegiatan(req: NextApiRequest,res: NextApiResponse){
    const body=req.body
    if(body.tipe!=null && body.judul!=null && body.gambar!=null && body.deskripsi!=null && body.artikel!=null && body.tags!=null && body.anggota!=null){
        try {
            let gambar=base64Decode(body.gambar)
            const uuidr=uuid()
            let filePath=`public/uploads/${uuidr}.jpg`
            let url=`uploads/${uuidr}.jpg`
            writeFileSync(filePath,gambar)
            try {
                let result=await prisma.$transaction([
                    prisma.kegiatan.create({
                        data:{
                            artikel: body.artikel,
                            deskripsi: body.deskripsi,
                            gambar:url,
                            judul: body.judul,
                            tipe: body.tipe,
                            anggota:{
                                createMany:{
                                    data: body.anggota
                                }
                            },
                            tags:{
                                createMany:{
                                    data: body.tags
                                }
                            }
                        },
                        include:{
                            anggota:true,
                            tags:true
                        }
                    })
                ])
                res.status(200).json(jsontrue("Data added succesfully",result))    
            } catch (error) {
                res.status(500).json(jsonfalse("Server is unable to process request",error))
            }
        } catch (error) {
            res.status(400).json(jsonfalse("Picture is not Decodeable",error||"Check your base64 encoded image"))
        }
    }else res.status(400).json(jsonfalse("Data is not complete","Object is possibly has 'null' values"))
}

async function patchKegiatan(req: NextApiRequest, res: NextApiResponse){
    const body = req.body
    if(body.tipe!=null && body.judul!=null && body.gambar!=null && body.deskripsi!=null && body.artikel!=null && body.tags!=null && body.anggota!=null){
        try {
            let tmp=await prisma.kegiatan.findFirst({
                where:{id:body.id}
            })
            if (tmp!=null)
                fs.unlink(`public/${tmp.gambar}`,(err)=>{
                    if(err){
                        if (err.code === 'ENOENT'){
                            console.log("file not found, skipping deletion")
                        }else{
                            res.status(500).json(jsonfalse("Server is unable to process request",err))
                        }
                    }
                })
            let gambar=base64Decode(body.gambar)
            const uuidr=uuid()
            let filePath=`public/uploads/${uuidr}.jpg`
            let url=`uploads/${uuidr}.jpg`
            writeFileSync(filePath,gambar)
            try {
                let result=await prisma.$transaction([
                    prisma.anggota_on_kegiatan.deleteMany({
                        where:{kegiatan_id:body.id}
                    }),
                    prisma.tags_on_kegiatan.deleteMany({
                        where:{kegiatan:body.id}
                    }),
                    prisma.kegiatan.update({
                        where:{id:body.id},
                        data:{
                            artikel: body.artikel,
                            deskripsi: body.deskripsi,
                            gambar:url,
                            judul: body.judul,
                            tipe: body.tipe,
                            updated:new Date(),
                            anggota:{
                                createMany:{
                                    data: body.anggota
                                }
                            },
                            tags:{
                                createMany:{
                                    data: body.tags
                                }
                            }
                        },
                        include:{
                            anggota:true,
                            tags:true
                        }
                    })
                ])
                res.status(200).json(jsontrue("Data updated succesfully",result))    
            } catch (error) {
                res.status(500).json(jsonfalse("Server is unable to process request",error))
            }
        } catch (error) {
            res.status(400).json(jsonfalse("Picture is not Decodeable",error||"Check your base64 encoded image"))
        }
    }else res.status(400).json(jsonfalse("Data is not complete","Object is possibly has 'null' values"))
}

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    switch (req.method) {
        case 'GET':
            getKegiatan(res)            
            break
        case 'POST':
            postKegiatan(req,res)
            break
        case 'PATCH':
            patchKegiatan(req,res)
            break
        default:
            res.status(200).json(jsontrue("Welcome to Infomation Based Networking Lab's Kegiatan API!",null))
            break
    }
}