export default function NewsCard({ news }) {
  return (
    <div style={{ background: '#fff', borderRadius: 8, padding: '1rem 1.5rem', marginBottom: '1rem', borderLeft: news.pinned ? '4px solid #3182ce' : '4px solid #e2e8f0', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
      {news.pinned && <span style={{ fontSize: '0.75rem', background: '#bee3f8', color: '#2b6cb0', padding: '2px 8px', borderRadius: 99, marginBottom: 6, display: 'inline-block' }}>📌 Pinned</span>}
      <h3 style={{ margin: '4px 0' }}>{news.title}</h3>
      <p style={{ color: '#4a5568', fontSize: '0.9rem' }}>{news.content}</p>
      <small style={{ color: '#a0aec0' }}>{new Date(news.createdAt).toLocaleDateString()} · {news.category}</small>
    </div>
  );
}