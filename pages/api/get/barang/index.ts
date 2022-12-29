import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";
import { barang } from "@prisma/client";
import jsontrue from "../../../../lib/jsontrue";
import jsonfalse from "../../../../lib/jsonfalse";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    let barang:barang[]
    try {
        barang=await prisma.barang.findMany()
        res.status(200).json(jsontrue("Data query successful",barang))
    } catch (error) {
        res.status(500).json(jsonfalse("server is unable to process request",error))
    }
}