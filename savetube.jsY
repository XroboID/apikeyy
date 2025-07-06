import express from 'express' import axios from 
'axios' const app = express() const PORT = 
process.env.PORT || 3000 app.get('/yt2mp3', async 
(req, res) => {
  const url = req.query.url if (!url) return 
  res.status(400).json({ error: 'Missing url 
  param' }) try {
    const { data } = await 
    axios.get(`https://www.y2mate.com/mates/analyzeV2/ajax`, 
    {
      params: { k_query: url, k_page: 'home', hl: 
      'id', q_auto: 1 }, headers: {
        'Content-Type': 
        'application/x-www-form-urlencoded; 
        charset=UTF-8'
      }
    })
    return res.json(data)
  } catch (err) {
    return res.status(500).json({ error: 'Gagal 
    ambil data' })
  }
})
app.listen(PORT, () => console.log(`YT2MP3 API jalan di port ${PORT}`))
