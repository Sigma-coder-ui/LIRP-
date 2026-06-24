// ─────────────────────────────────────────
//  routes/apply.js
//  Handles POST /api/apply
//  When user submits the application form,
//  this saves it to MongoDB and sends an email
// ─────────────────────────────────────────

const express    = require('express');
const router     = express.Router();
const nodemailer = require('nodemailer');
const Application = require('../models/Application');

// ── Email helper ─────────────────────────
// Creates a "transporter" — basically the email sender
function createTransporter() {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
}

// ── POST /api/apply ───────────────────────
router.post('/', async (req, res) => {
  try {
    const {
      firstName, lastName, email, phone, course,
      college, currentGpa, whyJoin, referral,
    } = req.body;

    // 1. Basic server-side validation
    if (!firstName || !lastName || !email || !phone || !course) {
      return res.status(400).json({
        success: false,
        message: 'Please fill all required fields.',
      });
    }

    // 2. Save to MongoDB
    const newApplication = new Application({
      firstName, lastName, email, phone, course,
      college, currentGpa, whyJoin, referral,
    });
    await newApplication.save();

    // 3. Send email notification to admin
    try {
      const transporter = createTransporter();

      // Email that admin receives
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to:   process.env.ADMIN_EMAIL,
        subject: `🎓 New LIRP Application — ${firstName} ${lastName}`,
        html: `
          <h2>New Application Received</h2>
          <table style="border-collapse:collapse; width:100%">
            <tr><td style="padding:8px; border:1px solid #ddd"><strong>Name</strong></td>
                <td style="padding:8px; border:1px solid #ddd">${firstName} ${lastName}</td></tr>
            <tr><td style="padding:8px; border:1px solid #ddd"><strong>Email</strong></td>
                <td style="padding:8px; border:1px solid #ddd">${email}</td></tr>
            <tr><td style="padding:8px; border:1px solid #ddd"><strong>Phone</strong></td>
                <td style="padding:8px; border:1px solid #ddd">${phone}</td></tr>
            <tr><td style="padding:8px; border:1px solid #ddd"><strong>Program</strong></td>
                <td style="padding:8px; border:1px solid #ddd">${course}</td></tr>
            <tr><td style="padding:8px; border:1px solid #ddd"><strong>College</strong></td>
                <td style="padding:8px; border:1px solid #ddd">${college || '—'}</td></tr>
            <tr><td style="padding:8px; border:1px solid #ddd"><strong>GPA</strong></td>
                <td style="padding:8px; border:1px solid #ddd">${currentGpa || '—'}</td></tr>
            <tr><td style="padding:8px; border:1px solid #ddd"><strong>Why Join</strong></td>
                <td style="padding:8px; border:1px solid #ddd">${whyJoin || '—'}</td></tr>
            <tr><td style="padding:8px; border:1px solid #ddd"><strong>Referral</strong></td>
                <td style="padding:8px; border:1px solid #ddd">${referral || '—'}</td></tr>
          </table>
        `,
      });

      // Confirmation email to the student
      await transporter.sendMail({
        from:    process.env.EMAIL_USER,
        to:      email,
        subject: `✅ We received your LIRP application, ${firstName}!`,
        html: `
          <h2>Hi ${firstName}! 👋</h2>
          <p>We've received your application for <strong>${course}</strong>.</p>
          <p>Our team will review it and reach out on <strong>WhatsApp within 24 hours</strong>.</p>
          <br/>
          <p>In the meantime, feel free to WhatsApp us at <strong>+91 XXXXXXXXXX</strong></p>
          <br/>
          <p>— The LIRP Team 🚀</p>
        `,
      });
    } catch (emailErr) {
      // Email failed but application was saved — don't block the user
      console.error('Email error (application saved anyway):', emailErr.message);
    }

    // 4. Send success response to frontend
    res.status(201).json({
      success: true,
      message: 'Application submitted successfully!',
    });

  } catch (err) {
    console.error('Apply route error:', err);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again.',
    });
  }
});

module.exports = router;
