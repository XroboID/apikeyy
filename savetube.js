const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/yt2mp3', async (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).json({ error: 'URL YouTube dibutuhkan.' });

  return res.json({
    title: "Contoh Lagu",
    url: "https://example.com/music.mp3"
  });
});

app.listen(PORT, () => console.log(`YT2MP3 API jalan di port ${PORT}`));
