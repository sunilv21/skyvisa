import { connectToDatabase } from "@/lib/mongodb"
import bcrypt from "bcryptjs"

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end()

  const { token, password } = req.body
  if (!token || !password) return res.status(400).json({ error: "Missing fields" })

  const db = await connectToDatabase()
  const tokenRecord = await db.collection("reset_tokens").findOne({ token })

  if (!tokenRecord || new Date(tokenRecord.expires) < new Date()) {
    return res.status(400).json({ error: "Invalid or expired token" })
  }

  const hashedPassword = await bcrypt.hash(password, 10)
  await db.collection("admins").updateOne(
    { email: tokenRecord.email },
    { $set: { password: hashedPassword } }
  )
  await db.collection("reset_tokens").deleteOne({ token })

  res.status(200).json({ message: "Password reset successfully." })
}
