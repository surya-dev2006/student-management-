import { useEffect, useState } from 'react';
import axios from '../api/axios';

const empty = { title: '', content: '', category: 'General', pinned: false };

export default function ManageNews() {
  const [newsList, setNewsList] = useState([]);
  const [form, setForm] = useState(empty);
  const [editId, setEditId] = useState(null);

  const load = () => axios.get('/news').then(r => setNewsList(r.data));
  useEffect(() => { load(); }, []);

  const save = async () => {
    if (editId) await axios.put(`/news/${editId}`, form);
    else        await axios.post('/news', form);
    setForm(empty); setEditId(null); load();
  };

  const remove = async (id) => { await axios.delete(`/news/${id}`); load(); };
  const edit = (n) => { setForm(n); setEditId(n._id); };

  return (
    <div style={{ maxWidth: 800, margin: '2rem auto', padding: '0 1rem' }}>
      <h2>Manage News</h2>
      <div style={{ background: '#fff', padding: '1.5rem', borderRadius: 8, marginBottom: '1.5rem' }}>
        <input placeholder="Title" value={form.title} onChange={e => setForm({...form, title: e.target.value})}
          style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem', border: '1px solid #cbd5e0', borderRadius: 4 }} />
        <textarea placeholder="Content" value={form.content} rows={3} onChange={e => setForm({...form, content: e.target.value})}
          style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem', border: '1px solid #cbd5e0', borderRadius: 4 }} />
        <input placeholder="Category" value={form.category} onChange={e => setForm({...form, category: e.target.value})}
          style={{ width: '60%', padding: '0.5rem', marginRight: '1rem', border: '1px solid #cbd5e0', borderRadius: 4 }} />
        <label><input type="checkbox" checked={form.pinned} onChange={e => setForm({...form, pinned: e.target.checked})} /> Pinned</label>
        <button onClick={save} style={{ display: 'block', marginTop: '0.75rem', padding: '0.6rem 1.5rem', background: '#2b6cb0', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer' }}>
          {editId ? 'Update' : 'Post'} News
        </button>
      </div>
      {newsList.map(n => (
        <div key={n._id} style={{ background: '#fff', padding: '1rem', borderRadius: 8, marginBottom: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <strong>{n.title}</strong> {n.pinned && '📌'}
            <p style={{ color: '#4a5568', fontSize: '0.9rem' }}>{n.content}</p>
            <small style={{ color: '#a0aec0' }}>{n.category}</small>
          </div>
          <div>
            <button onClick={() => edit(n)} style={{ marginRight: 8, background: '#ed8936', color: '#fff', border: 'none', padding: '3px 10px', borderRadius: 4, cursor: 'pointer' }}>Edit</button>
            <button onClick={() => remove(n._id)} style={{ background: '#e53e3e', color: '#fff', border: 'none', padding: '3px 10px', borderRadius: 4, cursor: 'pointer' }}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}