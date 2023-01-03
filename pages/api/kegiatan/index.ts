import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { kegiatan } from "@prisma/client";
import jsontrue from "../../../lib/jsontrue";
import jsonfalse from "../../../lib/jsonfalse";
import { writeFileSync } from "fs";
import base64Decode from "../../../lib/base64d";
import { uuid } from 'uuidv4';

async function getKegiatan(res:any){
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

async function postKegiatan(req:any,res:any){
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
                res.status(200).json(jsontrue("Welcome to Infomation Based Networking Lab's Kegiatan API!",result))    
            } catch (error) {
                res.status(500).json(jsonfalse("Server is unable to process request",error))
            }
        } catch (error) {
            res.status(400).json(jsonfalse("Picture is not Decodeable",error||"Check your base64 encoded image"))
        }
    }else res.status(400).json(jsonfalse("Data is not complete","Object is possibly has 'null' values"))
}

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.method==='GET'){
        getKegiatan(res)
    }else if(req.method==='POST'){
        postKegiatan(req,res)
    }else{
        res.status(200).json(jsontrue("Welcome to Infomation Based Networking Lab's Kegiatan API!",null))
    }
}