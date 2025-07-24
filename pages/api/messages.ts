import type { NextApiRequest, NextApiResponse } from "next"
import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI as string

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = new MongoClient(uri)
  try {
    await client.connect()
    const db = client.db()
    const collection = db.collection("messages")

    if (req.method === "GET") {
      const messages = await collection.find({}).sort({ createdAt: -1 }).toArray()
      return res.status(200).json(messages)
    }

    if (req.method === "POST") {
      const { firstName, lastName, email, phone, country, destination, purpose, message } = req.body
      if (!firstName || !lastName || !email || !message) {
        return res.status(400).json({ error: "Missing required fields" })
      }
      await collection.insertOne({
        firstName,
        lastName,
        email,
        phone,
        country,
        destination,
        purpose,
        message,
        createdAt: new Date(),
      })
      return res.status(200).json({ success: true })
    }

    res.status(405).end()
  } catch (error) {
    res.status(500).json({ error: "Database error" })
  } finally {
    await client.close()
  }
}