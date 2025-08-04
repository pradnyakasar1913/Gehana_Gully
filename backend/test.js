const https = require('https');

https.get('https://api.twilio.com', (res) => {
  console.log('✅ Able to reach Twilio:', res.statusCode);
}).on('error', (e) => {
  console.error('❌ Cannot reach Twilio:', e.message);
});
