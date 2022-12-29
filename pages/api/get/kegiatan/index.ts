import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";
import { kegiatan } from "@prisma/client";
import jsontrue from "../../../../lib/jsontrue";
import jsonfalse from "../../../../lib/jsonfalse";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    let kegiatan:kegiatan[]
    try {
        kegiatan=await prisma.kegiatan.findMany({
            include:{
                anggota: {
                    include:{
                        anggota: true
                    }
                },
                tags: {
                    include:{
                        tags: true
                    }
                }
            }
        })
        res.status(200).json(jsontrue("Data query successful",kegiatan))
    } catch (error) {
        res.status(500).json(jsonfalse("server is unable to process request",error))
    }
}