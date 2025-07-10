import express from 'express';

const router = express.Router();
let users = []; // In-memory store

// Register
router.post('/register', (req, res) => {
  const { username, password } = req.body;
  const exists = users.find(u => u.username === username);
  if (exists) return res.status(400).json({ error: 'User already exists' });

  users.push({ username, password });
  res.status(201).json({ message: 'Registered successfully' });
});

// Login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });

  res.json({ token: `${username}-token` });
});

export default router;
