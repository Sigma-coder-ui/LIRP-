// ─────────────────────────────────────────
//  server.js  — MAIN ENTRY POINT
//  This is the "main gate" of the backend.
//  It starts the server, connects to MongoDB,
//  and registers all routes.
// ─────────────────────────────────────────

// Load environment variables from .env file
require('dotenv').config();

const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');

// ── Import Routes ─────────────────────────
const applyRoute   = require('./routes/apply');
const contactRoute = require('./routes/contact');
const consultationRoute=require("./routes/consultation");

// ── Create Express App ────────────────────
const app = express();

// ── Middleware ────────────────────────────
// Middleware = code that runs on EVERY request before reaching a route

// 1. CORS — allows your React frontend to call this backend
//    Without this, the browser would block the request
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'POST'],
}));

// 2. JSON parser — lets us read req.body as JavaScript object
app.use(express.json());

// 3. URL encoder — handles form data sent as URL-encoded strings
app.use(express.urlencoded({ extended: true }));

// ── Routes ────────────────────────────────
// When frontend calls /api/apply  → use applyRoute
// When frontend calls /api/contact → use contactRoute

app.use('/api/apply',   applyRoute);
app.use('/api/contact', contactRoute);
app.use("/api/consultation",consultationRoute);

// ── Health Check Route ────────────────────
// Visit http://localhost:5000/api/health to see if server is running
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'LIRP backend is running!',
    time: new Date().toISOString(),
  });
});

// ── 404 Handler ───────────────────────────
// If someone calls a route that doesn't exist
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// ── Connect to MongoDB & Start Server ────
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
      console.log(`📋 Health check: http://localhost:${PORT}/api/health`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1); // Stop the server if DB fails
  });
