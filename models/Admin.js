const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// ✅ Safe export to prevent OverwriteModelError
module.exports = mongoose.models.Admin || mongoose.model('Admin', adminSchema);
