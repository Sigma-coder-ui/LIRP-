// ─────────────────────────────────────────
//  routes/contact.js
//  Handles POST /api/contact
//  Saves message and notifies admin
// ─────────────────────────────────────────

const express    = require('express');
const router     = express.Router();
const nodemailer = require('nodemailer');
const Contact    = require('../models/Contact');

function createTransporter() {
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
}

// ── POST /api/contact ─────────────────────
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // 1. Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required.',
      });
    }

    // 2. Save to MongoDB
    const newContact = new Contact({ name, email, phone, subject, message });
    await newContact.save();

    // 3. Send email to admin
    try {
      const transporter = createTransporter();

      await transporter.sendMail({
        from:    process.env.EMAIL_USER,
        to:      process.env.ADMIN_EMAIL,
        subject: `📩 New Contact Message — ${subject || 'General'} from ${name}`,
        html: `
          <h2>New Contact Message</h2>
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || '—'}</p>
          <p><strong>Subject:</strong> ${subject || '—'}</p>
          <hr/>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      // Auto-reply to the person
      await transporter.sendMail({
        from:    process.env.EMAIL_USER,
        to:      email,
        subject: `Thanks for reaching out to LIRP, ${name}!`,
        html: `
          <h2>Hi ${name}! 👋</h2>
          <p>We received your message and will get back to you within <strong>24 hours</strong>.</p>
          <p>For urgent queries, WhatsApp us at <strong>+91 XXXXXXXXXX</strong></p>
          <br/>
          <p>— The LIRP Team</p>
        `,
      });
    } catch (emailErr) {
      console.error('Email error (message saved anyway):', emailErr.message);
    }

    res.status(201).json({
      success: true,
      message: 'Message sent successfully!',
    });

  } catch (err) {
    console.error('Contact route error:', err);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again.',
    });
  }
});

module.exports = router;
