// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import jsontrue from '../../lib/jsontrue'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(jsontrue("Welcome to Infomation Based Networking Lab's API!",null))
}