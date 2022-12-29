import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import jsontrue from "../../../lib/jsontrue";
import jsonfalse from "../../../lib/jsonfalse";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const body=req.body
    if(body.email!=null && body.pesan!=null){
        try {
            let result = await prisma.pesan.create({
                data:{
                    email:body.email,
                    pesan:body.pesan
                }
            })
            res.status(200).json(jsontrue("Data added succesfully",result))
        } catch (error) {
            res.status(500).json(jsonfalse("Server is unable to process request",error))
        }
    }
    res.status(400).json(jsonfalse("Data is not complete","Object is possibly has 'null' values"))
}