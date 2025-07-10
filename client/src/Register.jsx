import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/register', form);
      setMessage(res.data.message);
      setForm({ username: '', password: '' });
    } catch (err) {
      setMessage(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <div style={{ padding: '30px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Register</h2>
      <input
        type="text"
        name="username"
        value={form.username}
        placeholder="Username"
        onChange={handleChange}
        style={{ display: 'block', width: '100%', marginBottom: '10px' }}
      />
      <input
        type="password"
        name="password"
        value={form.password}
        placeholder="Password"
        onChange={handleChange}
        style={{ display: 'block', width: '100%', marginBottom: '10px' }}
      />
      <button onClick={handleRegister} style={{ width: '100%' }}>Register</button>
      {message && <p style={{ marginTop: '10px', color: 'blue' }}>{message}</p>}
    </div>
  );
}

export default Register;
