import { connectToDatabase } from "@/lib/mongodb"
import crypto from "crypto"

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end()

  const { email } = req.body
  if (!email) return res.status(400).json({ error: "Email is required" })

  const db = await connectToDatabase()
  const admin = await db.collection("admins").findOne({ email })
  if (!admin) return res.status(404).json({ error: "Admin not found" })

  const token = crypto.randomBytes(32).toString("hex")
  const expires = new Date(Date.now() + 15 * 60 * 1000) // 15 min

  await db.collection("reset_tokens").insertOne({ email, token, expires })

  const resetLink = `${process.env.NEXTAUTH_URL}/reset-password?token=${token}`

  await sendEmail(email, {
    subject: "Reset Your Admin Password",
    html: `<p>Click below to reset your password (valid 15 min):</p>
           <a href="${resetLink}">${resetLink}</a>`,
  })

  res.status(200).json({ message: "Reset link sent to your email." })
}
