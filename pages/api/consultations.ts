import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '../../lib/mongodb'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await clientPromise
  const db = client.db()

  if (req.method === "GET") {
    const consultations = await db.collection("consultations").find({}).toArray()
    res.status(200).json(consultations)
  } else if (req.method === "POST") {
    const doc = req.body
    const result = await db.collection("consultations").insertOne(doc)
    res.status(201).json(result.ops ? result.ops[0] : doc)
  } else {
    res.status(405).end()
  }
}