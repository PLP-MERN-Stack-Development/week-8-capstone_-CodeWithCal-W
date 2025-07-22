import { useEffect, useState } from 'react';

function AdminLessons() {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ title: '', summary: '', content: '', image: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/lessons')
      .then(res => res.json())
      .then(setLessons)
      .catch(() => setError('Failed to load lessons'))
      .finally(() => setLoading(false));
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(
        editingId
          ? `http://localhost:5000/api/lessons/${editingId}`
          : 'http://localhost:5000/api/lessons',
        {
          method: editingId ? 'PUT' : 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(form),
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Error');
      if (editingId) {
        setLessons(lessons.map(l => (l._id === editingId ? data : l)));
      } else {
        setLessons([...lessons, data]);
      }
      setForm({ title: '', summary: '', content: '', image: '' });
      setEditingId(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEdit = lesson => {
    setForm({
      title: lesson.title,
      summary: lesson.summary,
      content: lesson.content,
      image: lesson.image,
    });
    setEditingId(lesson._id);
  };

  const handleDelete = async id => {
    const token = localStorage.getItem('token');
    if (!window.confirm('Delete this lesson?')) return;
    try {
      const res = await fetch(`http://localhost:5000/api/lessons/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Error');
      setLessons(lessons.filter(l => l._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <section>
      <h2>{editingId ? 'Edit Lesson' : 'Add Lesson'}</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
        <input name="summary" placeholder="Summary" value={form.summary} onChange={handleChange} required />
        <textarea name="content" placeholder="Content" value={form.content} onChange={handleChange} required />
        <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} required />
        <button type="submit">{editingId ? 'Update' : 'Add'}</button>
        {editingId && <button type="button" onClick={() => { setEditingId(null); setForm({ title: '', summary: '', content: '', image: '' }); }}>Cancel</button>}
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h2>All Lessons</h2>
      <ul>
        {lessons.map(lesson => (
          <li key={lesson._id}>
            <strong>{lesson.title}</strong>
            <button onClick={() => handleEdit(lesson)}>Edit</button>
            <button onClick={() => handleDelete(lesson._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AdminLessons;