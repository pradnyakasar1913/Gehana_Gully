// // server.js

// // const express = require('express');
// // const cors = require('cors');
// // const bodyParser = require('body-parser');
// // require('dotenv').config(); // Load .env

// // const app = express();
// // const port = 5000;

// // // Middleware
// // app.use(cors());
// // app.use(bodyParser.json());

// // // Twilio setup
// // const accountSid = process.env.TWILIO_ACCOUNT_SID;
// // const authToken = process.env.TWILIO_AUTH_TOKEN;
// // const fromWhatsAppNumber = process.env.TWILIO_WHATSAPP_NUMBER;

// // if (!accountSid || !authToken || !fromWhatsAppNumber) {
// //   console.error('❌ Twilio environment variables are missing.');
// //   process.exit(1);
// // }

// // const client = require('twilio')(accountSid, authToken);

// // // Root route for testing
// // app.get('/', (req, res) => {
// //   res.send('✅ Server is running.');
// // });

// // // POST /send-message
// // app.post('/send-message', async (req, res) => {
// //   const { name, email, message } = req.body;

// //   if (!name || !email || !message) {
// //     return res.status(400).json({ success: false, error: 'Missing fields' });
// //   }

// //   const toNumber = 'whatsapp:+919011995742'; // Change to your verified WhatsApp number

// //   try {
// //     const result = await client.messages.create({
// //       body: `New Inquiry from Gehana Gully:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
// //       from: fromWhatsAppNumber,
// //       to: toNumber,
// //     });

// //     console.log('✅ Message sent:', result.sid);
// //     res.json({ success: true, sid: result.sid });
// //   } catch (error) {
// //     console.error('❌ Error sending WhatsApp message:', error.message);
// //     res.status(500).json({ success: false, error: error.message });
// //   }
// // });

// // // Start server
// // app.listen(port, () => {
// //   console.log(`🚀 Server running on http://localhost:${port}`);
// // });
// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // ✅ CORS: Allow React frontend domain
// app.use(cors({
//   origin: 'https://gehana-gully-1-70y1.onrender.com'
// }));

// app.use(bodyParser.json());

// // ✅ Send message endpoint
// app.post('/send-message', (req, res) => {
//   const { name, email, message } = req.body;

//   console.log('Message received from contact form:');
//   console.log('Name:', name);
//   console.log('Email:', email);
//   console.log('Message:', message);

//   // Simulate sending WhatsApp message logic here...
//   // For now, we assume it works:
//   return res.json({ success: true });
// });

// app.get('/', (req, res) => {
//   res.send('Backend is running');
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config(); // Load .env

const app = express();
const port = process.env.PORT || 5000; // Use Render's dynamic port in production

// ✅ CORS configuration
const allowedOrigin = 'https://gehana-gully-1-70y1.onrender.com';
app.use(cors({
  origin: allowedOrigin,
  methods: ['GET', 'POST'],
  credentials: true,
}));

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
