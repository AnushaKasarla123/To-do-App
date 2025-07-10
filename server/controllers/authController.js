import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

let users = [];
const JWT_SECRET = 'secret123'; // use env in real apps

export const register = async (req, res) => {
  const { username, password } = req.body;
  const exists = users.find(u => u.username === username);
  if (exists) return res.status(400).json({ message: 'User already exists' });

  const hashed = await bcrypt.hash(password, 10);
  const newUser = { id: users.length + 1, username, password: hashed };
  users.push(newUser);
  res.status(201).json({ message: 'Registered successfully' });
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.status(400).json({ message: 'User not found' });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ message: 'Invalid password' });

  const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET);
  res.json({ token });
};
