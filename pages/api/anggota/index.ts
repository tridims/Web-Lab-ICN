import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { anggota } from "@prisma/client";
import jsontrue from "../../../lib/jsontrue";
import jsonfalse from "../../../lib/jsonfalse";

async function getAnggota(res:any){
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

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.method==='GET'){
        getAnggota(res)
    }else{
        res.status(200).json(jsontrue("Welcome to Infomation Based Networking Lab's Anggota API!",null))
    }
}