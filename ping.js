const axios = require('axios');

const urlsToPing = [
  'https://your-app.vercel.app/',
  'https://your-app.vercel.app/dashboard',
  'https://your-app.vercel.app/api/health',
];

const ping = async () => {
  console.log(`[${new Date().toISOString()}] 🔁 Pinging ${urlsToPing.length} URLs...`);
  for (const url of urlsToPing) {
    try {
      const res = await axios.get(url);
      console.log(`✅ ${url} - ${res.status}`);
    } catch (err) {
      console.error(`❌ ${url} - ${err.message}`);
    }
  }
};

ping();
