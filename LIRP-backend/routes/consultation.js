const express    = require('express');
const router     = express.Router();
const { Resend } = require('resend');
const Consultation = require('../models/Consultation');

const resend = new Resend(process.env.RESEND_API_KEY);

router.post('/', async (req, res) => {
  try {
    const {
      name, phone, email, course, college, concern,
    } = req.body;

    if (!name || !phone || !course) {
      return res.status(400).json({
        success: false,
        message: 'Required fields missing',
      });
    }

    const consultation = new Consultation({
      name, phone, email, course, college, concern,
    });

    await consultation.save();

    // Pehle response do
    res.status(201).json({
      success: true,
      message: 'Consultation booked successfully',
    });

    // Background mein email bhejo
    resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.ADMIN_EMAIL,
      subject: `📅 New Consultation Request — ${name}`,
      html: `
        <h2>New Consultation Booked</h2>
        <table style="border-collapse:collapse; width:100%">
          <tr><td style="padding:8px; border:1px solid #ddd"><strong>Name</strong></td>
              <td style="padding:8px; border:1px solid #ddd">${name}</td></tr>
          <tr><td style="padding:8px; border:1px solid #ddd"><strong>Phone</strong></td>
              <td style="padding:8px; border:1px solid #ddd">${phone}</td></tr>
          <tr><td style="padding:8px; border:1px solid #ddd"><strong>Email</strong></td>
              <td style="padding:8px; border:1px solid #ddd">${email || '—'}</td></tr>
          <tr><td style="padding:8px; border:1px solid #ddd"><strong>Course</strong></td>
              <td style="padding:8px; border:1px solid #ddd">${course}</td></tr>
          <tr><td style="padding:8px; border:1px solid #ddd"><strong>College</strong></td>
              <td style="padding:8px; border:1px solid #ddd">${college || '—'}</td></tr>
          <tr><td style="padding:8px; border:1px solid #ddd"><strong>Concern</strong></td>
              <td style="padding:8px; border:1px solid #ddd">${concern || '—'}</td></tr>
        </table>
      `,
    }).catch(err => console.error('Admin email error:', err.message));

    if (email) {
      resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: `✅ Consultation Booked, ${name}!`,
        html: `
          <h2>Hi ${name}! 👋</h2>
          <p>We've received your consultation request!</p>
          <p>Our team will reach out on <strong>WhatsApp within 30 minutes</strong>.</p>
          <br/>
          <p>— The LIRP Team 🚀</p>
        `,
      }).catch(err => console.error('Student email error:', err.message));
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server Error',
    });
  }
});

module.exports = router;