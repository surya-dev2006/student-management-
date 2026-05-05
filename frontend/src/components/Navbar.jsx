import { Link } from 'react-router-dom';

export default function Navbar() {
  const token = localStorage.getItem('token');
  const logout = () => { localStorage.removeItem('token'); window.location.href = '/'; };

  return (
    <nav style={{ background: '#1a365d', padding: '1rem 2rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
      <span style={{ color: '#fff', fontWeight: 700, fontSize: '1.2rem' }}>🎓 SMS</span>
      <Link to="/" style={{ color: '#ffed89',textDecoration: "none"  }}>Portal</Link>
      {token && <>
        <Link to="/admin/students" style={{ color: '#90cdf4',textDecoration: "none" }}>Students</Link>
        <Link to="/admin/news"     style={{ color: '#90cdf4',textDecoration: "none" }}>News</Link>
        <button onClick={logout} style={{ marginLeft: 'auto', background: '#e53e3e', color: '#fff', border: 'none', padding: '0.4rem 1rem', borderRadius: 4, cursor: 'pointer' }}>Logout</button>
      </>}
      {!token && <Link to="/admin" style={{ textDecoration: "none",marginLeft: 'auto', color: '#fbd38d' }}>Admin Login</Link>}
    </nav>
  );
}