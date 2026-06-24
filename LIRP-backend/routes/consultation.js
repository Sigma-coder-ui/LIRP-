const express = require('express');
const router = express.Router();

const Consultation = require('../models/Consultation');

router.post('/', async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      course,
      college,
      concern,
    } = req.body;

    if (!name || !phone || !course) {
      return res.status(400).json({
        success: false,
        message: 'Required fields missing',
      });
    }

    const consultation = new Consultation({
      name,
      phone,
      email,
      course,
      college,
      concern,
    });

    await consultation.save();

    res.status(201).json({
      success: true,
      message: 'Consultation booked successfully',
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: 'Server Error',
    });
  }
});

module.exports = router;