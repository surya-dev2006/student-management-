import { useEffect, useState } from 'react';
import axios from '../api/axios';
import StudentCard from '../components/StudentCard';

const empty = { name: '', rollNumber: '', department: '', year: '', email: '', phone: '' };

export default function ManageStudents() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState(empty);
  const [editId, setEditId] = useState(null);

  const load = () => axios.get('/students').then(r => setStudents(r.data));
  useEffect(() => { load(); }, []);

  const save = async () => {
    if (editId) await axios.put(`/students/${editId}`, form);
    else        await axios.post('/students', form);
    setForm(empty); setEditId(null); load();
  };

  const remove = async (id) => { await axios.delete(`/students/${id}`); load(); };
  const edit = (s) => { setForm(s); setEditId(s._id); };

  const fields = ['name', 'rollNumber', 'department', 'year', 'email', 'phone'];

  return (
    <div style={{ maxWidth: 900, margin: '2rem auto', padding: '0 1rem' }}>
      <h2>Manage Students</h2>

      {/* Form */}
      <div style={{ background: '#fff', padding: '1.5rem', borderRadius: 8, marginBottom: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
        {fields.map(f => (
          <input key={f} placeholder={f.charAt(0).toUpperCase() + f.slice(1)} value={form[f]}
            onChange={e => setForm({...form, [f]: e.target.value})}
            style={{ padding: '0.5rem', border: '1px solid #cbd5e0', borderRadius: 4 }} />
        ))}
        <button onClick={save} style={{ gridColumn: 'span 2', padding: '0.6rem', background: '#2b6cb0', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer' }}>
          {editId ? 'Update' : 'Add'} Student
        </button>
      </div>

      {/* Student Cards */}
      {students.map(s => (
        <StudentCard key={s._id} student={s} onEdit={edit} onDelete={remove} />
      ))}
    </div>
  );
}