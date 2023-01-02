import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { pesan } from "@prisma/client";
import jsontrue from "../../../lib/jsontrue";
import jsonfalse from "../../../lib/jsonfalse";
import email from "../../../lib/email";

async function getHelp(res:any){
    let pesan:pesan[]
    try {
        pesan=await prisma.pesan.findMany()
        res.status(200).json(jsontrue("Data query successful",pesan))
    } catch (error) {
        res.status(500).json(jsonfalse("server is unable to process request",error))
    }
}

async function postHelp(req:any,res:any){
    const body=req.body
    if(body.email!=null && body.pesan!=null){
        try {
            let result = await prisma.pesan.create({
                data:{
                    email:body.email,
                    pesan:body.pesan
                }
            })
            email(body.email,"Pertanyaan kepada Lab Jaringan Berbasis Informasi","Pertanyaan yang anda ajukan: "+`${body.pesan}`).catch(console.error);
            res.status(200).json(jsontrue("Data added succesfully",result))
        } catch (error) {
            res.status(500).json(jsonfalse("Server is unable to process request",error))
        }
    }else res.status(400).json(jsonfalse("Data is not complete","Object is possibly has 'null' values"))
}

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.method==='GET'){
        getHelp(res)
    }else if(req.method==='POST'){
        postHelp(req,res)
    }else{
        res.status(200).json(jsontrue("Welcome to Infomation Based Networking Lab's Help API!",null))
    }
}