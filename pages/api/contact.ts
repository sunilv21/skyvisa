// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next"
import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI as string

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const { firstName, lastName, email, phone, subject, message } = req.body

  if (!firstName || !lastName || !email || !phone || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" })
  }

  const client = new MongoClient(uri)
  try {
    await client.connect()
    const db = client.db()
    const collection = db.collection("contactMessages")
    await collection.insertOne({
      firstName,
      lastName,
      email,
      phone,
      subject,
      message,
      createdAt: new Date(),
    })
    res.status(200).json({ success: true })
  } catch (error) {
    res.status(500).json({ error: "Database error" })
  } finally {
    await client.close()
  }
}
