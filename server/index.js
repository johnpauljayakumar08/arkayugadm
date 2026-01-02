require('dotenv').config();
const express = require('express');
const db = require('./db'); // mysql2 pool

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

// Basic CORS - allow frontend dev server or override with env
const frontendOrigin = process.env.FRONTEND_ORIGIN || 'http://localhost:3000';
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', frontendOrigin);
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  next();
});

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, company, service, brief } = req.body || {};
  if (!name || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const createdAt = new Date();
    const sql = 'INSERT INTO contacts (name,email,phone,company,service,brief,created_at) VALUES (?,?,?,?,?,?,?)';
    const [result] = await db.query(sql, [name, email, phone || '', company || '', service || '', brief || '', createdAt]);
    return res.json({ ok: true, id: result.insertId });
  } catch (err) {
    console.error('DB insert error', err);
    return res.status(500).json({ error: 'Database error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
