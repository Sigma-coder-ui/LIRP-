// ─────────────────────────────────────────
//  models/Contact.js
//  Blueprint for contact form messages
// ─────────────────────────────────────────

const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    // Required fields
    name:    { type: String, required: true, trim: true },
    email:   { type: String, required: true, trim: true, lowercase: true },
    message: { type: String, required: true, trim: true },

    // Optional fields
    phone:   { type: String, trim: true, default: '' },
    subject: { type: String, default: '' },

    // Track if admin has replied
    replied: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Contact', contactSchema);
