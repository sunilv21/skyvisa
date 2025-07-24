import dbConnect from "../../lib/dbConnect"
import Notification from "../../models/Notification"

export default async function handler(req, res) {
  await dbConnect()
  if (req.method === "GET") {
    const notifications = await Notification.find({}).sort({ createdAt: -1 })
    res.status(200).json(notifications)
  }
  // You can add POST, PATCH for creating/updating notifications
}