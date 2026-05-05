import { useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const [creds, setCreds] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const nav = useNavigate();

  const login = async () => {
    try {
      const res = await axios.post('/login', creds);
      localStorage.setItem('token', res.data.token);
      nav('/admin/students');
    } catch {
      setError('Invalid credentials');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '4rem auto', background: '#fff', padding: '2rem', borderRadius: 8, boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
      <h2>Admin Login</h2>
      <input placeholder="Username" value={creds.username} onChange={e => setCreds({...creds, username: e.target.value})}
        style={{ width: '100%', padding: '0.5rem', margin: '0.5rem 0', border: '1px solid #cbd5e0', borderRadius: 4 }} />
      <input type="password" placeholder="Password" value={creds.password} onChange={e => setCreds({...creds, password: e.target.value})}
        style={{ width: '100%', padding: '0.5rem', margin: '0.5rem 0', border: '1px solid #cbd5e0', borderRadius: 4 }} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={login} style={{ width: '100%', padding: '0.6rem', background: '#1a365d', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer', marginTop: '0.5rem' }}>Login</button>
    </div>
  );
}