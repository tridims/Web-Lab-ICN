import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { anggota } from "@prisma/client";
import jsontrue from "../../../lib/jsontrue";
import jsonfalse from "../../../lib/jsonfalse";

async function getAnggota(res: NextApiResponse){
    let anggota:anggota[]
    try {
        anggota=await prisma.anggota.findMany({
            include:{
                kegiatan:{
                    include:{
                        kegiatan:true
                    }
                }
            }
        })
        res.status(200).json(jsontrue("Data query successful",anggota))
    } catch (error) {
        res.status(500).json(jsonfalse("server is unable to process request",error))
    }
}

async function postAnggota(req:NextApiRequest,res:NextApiResponse){
    const body=req.body
    if(body.nama!=null && body.email!=null && body.nim_nip!=null && body.prodi!=null && body.tipe!=null){
        try {
            let result = await prisma.anggota.create({
                data:{
                    email: body.email,
                    nama: body.nama,
                    nim_nip: body.nim_nip,
                    prodi: body.prodi,
                    tipe: body.tipe    
                }
            })
            res.status(200).json(jsontrue("Data added succesfully",result))
        } catch (error) {
            res.status(500).json(jsonfalse("Server is unable to process request",error))
        }
    }else res.status(400).json(jsonfalse("Data is not complete","Object is possibly has 'null' values"))
}

async function patchAnggota(req:NextApiRequest,res:NextApiResponse){
    const body=req.body
    if(body.nama!=null && body.email!=null && body.nim_nip!=null && body.prodi!=null && body.tipe!=null){
        try{
            let result = await prisma.anggota.update({
                where:{id:body.id},
                data:{
                    email: body.email,
                    nama: body.nama,
                    nim_nip: body.nim_nip,
                    prodi: body.prodi,
                    tipe: body.tipe,
                    updated: new Date()
                }
            })
            res.status(200).json(jsontrue("Data update successful",result))
        }catch (error){
            res.status(500).json(jsonfalse("server is unable to process request",error))
        }
    }else res.status(400).json(jsonfalse("Data is not complete","Object is possibly has 'null' values"))
}

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    switch (req.method) {
        case 'GET':
            getAnggota(res)
            break
        case 'POST':
            postAnggota(req,res)
            break
        case 'PATCH':
            patchAnggota(req,res)
            break
        default:
            res.status(200).json(jsontrue("Welcome to Infomation Based Networking Lab's Anggota API!",null))
            break
    }
}