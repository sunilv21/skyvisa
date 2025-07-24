import mongoose from "mongoose"

const NotificationSchema = new mongoose.Schema({
  type: { type: String, required: true }, // e.g. "message", "appointment", "application"
  message: { type: String, required: true },
  isRead: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
})

export default mongoose.models.Notification || mongoose.model("Notification", NotificationSchema)