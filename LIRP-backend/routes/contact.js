// ─────────────────────────────────────────
//  routes/contact.js
//  Handles POST /api/contact
// ─────────────────────────────────────────

const express    = require('express');
const router     = express.Router();
const { Resend } = require('resend');
const Contact    = require('../models/Contact');

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // 3. Pehle response do
    res.status(201).json({
      success: true,
      message: 'Message sent successfully!',
    });

    // 4. Background mein email bhejo
    resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.ADMIN_EMAIL,
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
    }).catch(err => console.error('Admin email error:', err.message));

    resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: `Thanks for reaching out to LIRP, ${name}!`,
      html: `
        <h2>Hi ${name}! 👋</h2>
        <p>We received your message and will get back to you within <strong>24 hours</strong>.</p>
        <p>For urgent queries, WhatsApp us at <strong>+91 XXXXXXXXXX</strong></p>
        <br/>
        <p>— The LIRP Team</p>
      `,
    }).catch(err => console.error('Student email error:', err.message));

  } catch (err) {
    console.error('Contact route error:', err);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again.',
    });
  }
});

module.exports = router;