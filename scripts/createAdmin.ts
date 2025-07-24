require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("../models/Admin");

const MONGODB_URI = process.env.MONGODB_URI;

async function createAdmin() {
  await mongoose.connect(MONGODB_URI);

  const email = "vaibhavshivhare@skyvisa.com";  // ✅ Set an email
  const password = "Vaibhav@skyvisa2025"; // ✅ Set a password
  const username = "vaibhav@skyvisa"; // ✅ Set a username

  const existing = await Admin.findOne({ email });
  if (existing) {
    console.log("Admin user already exists.");
    await mongoose.disconnect();
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await Admin.create({
    username,
    email,
    password: hashedPassword,
  });

  console.log("✅ Admin user created successfully.");
  await mongoose.disconnect();
}

createAdmin().catch((err) => {
  console.error("❌ Error:", err);
  mongoose.disconnect();
});
