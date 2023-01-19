import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { pengumuman, pesan } from "@prisma/client";
import jsontrue from "../../../lib/jsontrue";
import jsonfalse from "../../../lib/jsonfalse";

async function getPengumuman(res:any){
    let news:pengumuman[]
    try {
        news=await prisma.pengumuman.findMany()
        res.status(200).json(jsontrue("Data query successful",news))
    } catch (error) {
        res.status(500).json(jsonfalse("server is unable to process request",error))
    }
}

async function postPengumuman(req:any,res:any){
    const body=req.body
    if(body.email!=null && body.pesan!=null){
        try {
            let result = await prisma.pengumuman.create({
                data:{
                    judul: body.judul,
                    isi: body.isi
                }
            })
            res.status(200).json(jsontrue("Data added succesfully",result))
        } catch (error) {
            res.status(500).json(jsonfalse("Server is unable to process request",error))
        }
    }else res.status(400).json(jsonfalse("Data is not complete","Object is possibly has 'null' values"))
}

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    switch (req.method) {
        case 'GET':
            getPengumuman(res)
            break
        case 'POST':
            postPengumuman(req,res)
            break
        default:
            res.status(200).json(jsontrue("Welcome to Infomation Based Networking Lab's Pengumuman API!",null))
            break
    }
}