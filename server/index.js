const express = require('express');

const app = express();

app.get('/ping', (req, res) => {
  res.json({ ok: true, time: Date.now() });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`API listening on http://0.0.0.0:${PORT}`);
});