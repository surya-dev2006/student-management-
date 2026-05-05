export default function StudentCard({ student, onEdit, onDelete }) {
  return (
    <div style={{
      background: '#fff',
      borderRadius: 8,
      padding: '1.25rem 1.5rem',
      marginBottom: '1rem',
      boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
      borderLeft: '4px solid #2b6cb0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '1rem'
    }}>
      {/* Info */}
      <div>
        <h3 style={{ margin: 0, color: '#1a365d' }}>{student.name}</h3>
        <p style={{ margin: '4px 0', fontSize: '0.85rem', color: '#4a5568' }}>
          🎓 {student.department} — Year {student.year}
        </p>
        <p style={{ margin: '2px 0', fontSize: '0.85rem', color: '#718096' }}>
          🪪 {student.rollNumber}
        </p>
        <p style={{ margin: '2px 0', fontSize: '0.85rem', color: '#718096' }}>
          ✉️ {student.email}
        </p>
        {student.phone && (
          <p style={{ margin: '2px 0', fontSize: '0.85rem', color: '#718096' }}>
            📞 {student.phone}
          </p>
        )}
      </div>

      {/* Actions */}
      {(onEdit || onDelete) && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {onEdit && (
            <button onClick={() => onEdit(student)} style={{
              background: '#ed8936', color: '#fff', border: 'none',
              padding: '5px 14px', borderRadius: 4, cursor: 'pointer'
            }}>Edit</button>
          )}
          {onDelete && (
            <button onClick={() => onDelete(student._id)} style={{
              background: '#e53e3e', color: '#fff', border: 'none',
              padding: '5px 14px', borderRadius: 4, cursor: 'pointer'
            }}>Delete</button>
          )}
        </div>
      )}
    </div>
  );
}