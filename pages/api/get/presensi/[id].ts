import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../../lib/prisma'
import jsontrue from '../../../../lib/jsontrue'
import jsonfalse from '../../../../lib/jsonfalse'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    
    try{
        const postId = Number(req.query.id)
        try {
            let result=await prisma.presensi.findFirst({
                where:{ id:postId }
            })    
            res.status(200).json(jsontrue("Data query successful",result))
        } catch (error) {
            res.status(400).json(jsonfalse("Wrong index, use numerical values",error))
        }
    }catch (error){
        res.status(500).json(jsonfalse("server is unable to process request",error))
    }
}