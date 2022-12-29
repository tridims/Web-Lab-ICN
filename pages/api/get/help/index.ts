import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";
import { pesan } from "@prisma/client";
import jsontrue from "../../../../lib/jsontrue";
import jsonfalse from "../../../../lib/jsonfalse";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    let pesan:pesan[]
    try {
        pesan=await prisma.pesan.findMany()
        res.status(200).json(jsontrue("Data query successful",pesan))
    } catch (error) {
        res.status(500).json(jsonfalse("server is unable to process request",error))
    }
}