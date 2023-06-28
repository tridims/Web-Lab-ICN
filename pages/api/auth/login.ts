import { NextApiRequest, NextApiResponse } from "next"
import jsontrue from "../../../lib/jsontrue"

export default async function main(req: NextApiRequest, res: NextApiResponse){
    if(req.method === 'POST'){
        
    }else{
        res.status(200).json(jsontrue("Welcome to Infomation Based Networking Lab's Login API!",null))
    }
}