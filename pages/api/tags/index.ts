import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { tags } from "@prisma/client";
import jsontrue from "../../../lib/jsontrue";
import jsonfalse from "../../../lib/jsonfalse";

async function getTags(res:any){
    let tags:tags[]
    try {
        tags=await prisma.tags.findMany()
        res.status(200).json(jsontrue("Data query successful",tags))
    } catch (error) {
        res.status(500).json(jsonfalse("server is unable to process request",error))
    }
}

async function postTags(req:any,res:any){
    const body=req.body
    if(body.nama!=null){
        try {
            let result = await prisma.tags.create({
                data:{
                    nama: body.nama
                }
            })
            res.status(200).json(jsontrue("Data added succesfully",result))
        } catch (error) {
            res.status(500).json(jsonfalse("Server is unable to process request or data is duplicate",error))
        }
    }else res.status(400).json(jsonfalse("Data is not complete","Object is possibly has 'null' values"))
}

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    switch (req.method) {
        case 'GET':
            getTags(res)
            break
        case 'POST':
            postTags(req,res)
            break
        default:
            res.status(200).json(jsontrue("Welcome to Infomation Based Networking Lab's Tags API!",null))
            break
    }
}