import type { NextApiRequest, NextApiResponse } from "next"
import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI as string

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = new MongoClient(uri)
  try {
    await client.connect()
    const db = client.db()
    const collection = db.collection("getStartedApplications")

    if (req.method === "POST") {
      const {
        country,
        destination,
        purpose,
        travelDate,
        duration,
        fullName,
        email,
        phone,
        additional,
        agree,
        adults,
        minors,
        infants,
      } = req.body

      if (
        !country || !destination || !purpose || !travelDate ||
        !fullName || !email || !phone || !agree
      ) {
        return res.status(400).json({ error: "Missing required fields" })
      }

      await collection.insertOne({
        country,
        destination,
        purpose,
        travelDate,
        duration,
        fullName,
        email,
        phone,
        additional,
        agree,
        adults,
        minors,
        infants,
        createdAt: new Date(),
      })
      return res.status(200).json({ success: true })
    }

    if (req.method === "GET") {
      const applications = await collection.find({}).sort({ createdAt: -1 }).toArray()
      return res.status(200).json(applications)
    }

    res.status(405).end()
  } catch (error) {
    console.error("API Error:", error)
    res.status(500).json({ error: "Database error" })
  } finally {
    await client.close()
  }
}
