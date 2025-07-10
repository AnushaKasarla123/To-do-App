import React, { useState, useEffect } from 'react';
import Login from './Login';
import Register from './Register';
import TodoApp from './TodoApp';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [view, setView] = useState('welcome');

  useEffect(() => {
    localStorage.setItem('token', token || '');
    if (token) setView('todo');
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setView('login');
  };

  const renderPage = () => {
    switch (view) {
      case 'welcome':
        return (
          <div className="container">
            <h1 style={{ textAlign: 'center' }}>🎉 Welcome to Event Manager</h1>
            <p style={{ textAlign: 'center' }}>
              Plan, track and manage your daily events efficiently!
            </p>
            <button onClick={() => setView('login')}>Continue</button>
          </div>
        );

      case 'login':
        return (
          <div className="auth-box">
            <Login setToken={setToken} />
            <p>
              Don't have an account?{' '}
              <button className="link-button" onClick={() => setView('register')}>Register</button>
            </p>
          </div>
        );

      case 'register':
        return (
          <div className="auth-box">
            <Register onRegisterSuccess={() => setView('login')} />
            <p>
              Already have an account?{' '}
              <button className="link-button" onClick={() => setView('login')}>Login</button>
            </p>
          </div>
        );

      case 'todo':
        return (
          <div>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
            <TodoApp />
          </div>
        );

      default:
        return null;
    }
  };

  return <div className="container">{renderPage()}</div>;
}

export default App;
