import React, { useState } from 'react';
import axios from 'axios';

function Login({ setToken }) {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/login', form);
      setToken(res.data.token);
      setError('');
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div>
      <h2>Login</h2>
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
      <button onClick={handleLogin} style={{ width: '100%' }}>Login</button>
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
    </div>
  );
}

export default Login;
