// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import jsonfalse from '../../../lib/jsonfalse'
import jsontrue from '../../../lib/jsontrue'


export default async function handler(req: NextApiRequest,res: NextApiResponse) {
    let body=req.body
    try{
        let data=await prisma.peminjaman.findFirst({
            where:{id:body.peminjaman_id}
        })
        try {
            if(data != null && data.status!=true){
                let result=await prisma.$transaction([
                    prisma.peminjaman.update({
                        data:{
                            status:true,
                            penerima:body.penerima
                        },
                        where:{id:data.id}
                    }),
                    prisma.peminjaman.findFirst({
                        where:{id:data.id}
                    })
                ])
                res.status(200).json(jsontrue("Data updated succesfully",result[1]))
            } else
                res.status(400).json(jsonfalse("It's already returned","null"))
        } catch (error) {
            res.status(500).json(jsonfalse("server is unable to process request",error))
        }
    }catch(error){
        res.status(400).json(jsonfalse("Data does not exist",error))
    }
}