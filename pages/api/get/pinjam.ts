import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { peminjaman } from "@prisma/client";
import jsontrue from "../../../lib/jsontrue";
import jsonfalse from "../../../lib/jsonfalse";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    let pinjam:peminjaman[]
    try {
        pinjam=await prisma.peminjaman.findMany({
            include:{
                barang:{
                    include:{
                        barang:true
                    }
                }
            }
        })
        res.status(200).json(jsontrue("Data query successful",pinjam))
    } catch (error) {
        res.status(500).json(jsonfalse("server is unable to process request",error))
    }
}