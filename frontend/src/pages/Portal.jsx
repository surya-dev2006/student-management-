import { useEffect, useState } from 'react';
import axios from '../api/axios';
import NewsCard from '../components/NewsCard';

export default function Portal() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('/news').then(r => setNews(r.data));
  }, []);

  return (
    <div style={{ maxWidth: 700, margin: '2rem auto', padding: '0 1rem' }}>
      <h1 style={{ marginBottom: '1.5rem', color: '#1a365d' }}>📢 Student News Portal</h1>
      {news.length === 0 && <p>No announcements yet.</p>}
      {news.map(n => <NewsCard key={n._id} news={n} />)}
    </div>
  );
}