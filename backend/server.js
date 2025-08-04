// server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config(); // Load .env

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Twilio setup
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromWhatsAppNumber = process.env.TWILIO_WHATSAPP_NUMBER;

if (!accountSid || !authToken || !fromWhatsAppNumber) {
  console.error('❌ Twilio environment variables are missing.');
  process.exit(1);
}

const client = require('twilio')(accountSid, authToken);

// Root route for testing
app.get('/', (req, res) => {
  res.send('✅ Server is running.');
});

// POST /send-message
app.post('/send-message', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Missing fields' });
  }

  const toNumber = 'whatsapp:+919011995742'; // Change to your verified WhatsApp number

  try {
    const result = await client.messages.create({
      body: `New Inquiry from Gehana Gully:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
      from: fromWhatsAppNumber,
      to: toNumber,
    });

    console.log('✅ Message sent:', result.sid);
    res.json({ success: true, sid: result.sid });
  } catch (error) {
    console.error('❌ Error sending WhatsApp message:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
