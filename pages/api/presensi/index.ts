import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { presensi } from "@prisma/client";
import jsontrue from "../../../lib/jsontrue";
import jsonfalse from "../../../lib/jsonfalse";
import email from "../../../lib/email";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.method==='GET'){
        let presensi:presensi[]
        try {
            presensi=await prisma.presensi.findMany()
            res.status(200).json(jsontrue("Data query successful",presensi))
        } catch (error) {
            res.status(500).json(jsonfalse("server is unable to process request",error))
        }
    }else if(req.method==='POST'){
        const body=req.body
        if(body.nama!=null && body.email!=null && body.keperluan!=null && body.nim!=null && body.no_telp!=null){
            try {
                let result = await prisma.presensi.create({
                    data:{
                        nama: body.nama,
                        email: body.email,
                        keperluan: body.keperluan,
                        nim: body.nim,
                        no_telp: body.no_telp
                    }
                })
                email(body.email,"Presensi Lab Jaringan Berbasis Informasi",JSON.stringify(result))
                res.status(200).json(jsontrue("Data added succesfully",result))
            } catch (error) {
                res.status(500).json(jsonfalse("Server is unable to process request",error))
            }
        }else res.status(400).json(jsonfalse("Data is not complete","Object is possibly has 'null' values"))
    }else{
        res.status(200).json(jsontrue("Welcome to Infomation Based Networking Lab's Presensi API!",null))
    }
}