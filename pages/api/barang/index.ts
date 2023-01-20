import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { barang } from "@prisma/client";
import jsontrue from "../../../lib/jsontrue";
import jsonfalse from "../../../lib/jsonfalse";

async function getBarang(res: NextApiResponse){
    let barang:barang[]
    try {
        barang=await prisma.barang.findMany()
        res.status(200).json(jsontrue("Data query successful",barang))
    } catch (error) {
        res.status(500).json(jsonfalse("server is unable to process request",error))
    }
}

async function postBarang(req: NextApiRequest, res: NextApiResponse){
    const body=req.body
    if(body.jumlah!=null,body.nama!=null,body.deskripsi!=null){
        try {
            let result = await prisma.barang.create({
                data:{
                    jumlah:body.jumlah,
                    nama:body.nama,
                    deskripsi:body.deskripsi
                }
            })
            res.status(200).json(jsontrue("Data added succesfully",result))
        } catch (error) {
            res.status(500).json(jsonfalse("Server is unable to process request",error))
        }
    }else res.status(400).json(jsonfalse("Data is not complete","Object is possibly has 'null' values"))
}

async function patchBarang(req: NextApiRequest, res: NextApiResponse){
    const body=req.body
    if(body.jumlah!=null,body.nama!=null,body.deskripsi!=null){
        try {
            let result = await prisma.barang.update({
                where:{id:body.id},
                data:{
                    jumlah:body.jumlah,
                    nama:body.nama,
                    deskripsi:body.deskripsi,
                    updated: new Date()
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
            getBarang(res)
            break
        case 'POST':
            postBarang(req,res)
            break
        case 'PATCH':
            patchBarang(req,res)
            break
        default:
            res.status(200).json(jsontrue("Welcome to Infomation Based Networking Lab's Barang API!",null))
            break
    }
}