// ─────────────────────────────────────────
//  models/Application.js
//  This defines the "shape" of an application
//  stored in MongoDB — like a blueprint/form template
// ─────────────────────────────────────────

const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema(
  {
    // Required fields (marked * in the form)
    firstName:  { type: String, required: true, trim: true },
    lastName:   { type: String, required: true, trim: true },
    email:      { type: String, required: true, trim: true, lowercase: true },
    phone:      { type: String, required: true, trim: true },
    course:     { type: String, required: true },

    // Optional fields
    college:    { type: String, trim: true, default: '' },
    currentGpa: { type: String, trim: true, default: '' },
    whyJoin:    { type: String, trim: true, default: '' },
    referral:   { type: String, default: '' },

    // Status — for admin tracking
    // You can change this from 'new' to 'contacted', 'enrolled', etc.
    status: {
      type: String,
      enum: ['new', 'contacted', 'enrolled', 'rejected'],
      default: 'new',
    },
  },
  {
    // Automatically adds createdAt and updatedAt timestamps
    timestamps: true,
  }
);

module.exports = mongoose.model('Application', applicationSchema);
