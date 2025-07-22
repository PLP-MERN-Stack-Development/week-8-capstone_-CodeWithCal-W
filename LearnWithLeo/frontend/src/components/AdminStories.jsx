import { useEffect, useState } from 'react';

function AdminStories() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ title: '', summary: '', content: '', image: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/stories')
      .then(res => res.json())
      .then(setStories)
      .catch(() => setError('Failed to load stories'))
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
          ? `http://localhost:5000/api/stories/${editingId}`
          : 'http://localhost:5000/api/stories',
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
        setStories(stories.map(s => (s._id === editingId ? data : s)));
      } else {
        setStories([...stories, data]);
      }
      setForm({ title: '', summary: '', content: '', image: '' });
      setEditingId(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEdit = story => {
    setForm({
      title: story.title,
      summary: story.summary,
      content: story.content,
      image: story.image,
    });
    setEditingId(story._id);
  };

  const handleDelete = async id => {
    const token = localStorage.getItem('token');
    if (!window.confirm('Delete this story?')) return;
    try {
      const res = await fetch(`http://localhost:5000/api/stories/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Error');
      setStories(stories.filter(s => s._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <section>
      <h2>{editingId ? 'Edit Story' : 'Add Story'}</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
        <input name="summary" placeholder="Summary" value={form.summary} onChange={handleChange} required />
        <textarea name="content" placeholder="Content" value={form.content} onChange={handleChange} required />
        <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} required />
        <button type="submit">{editingId ? 'Update' : 'Add'}</button>
        {editingId && <button type="button" onClick={() => { setEditingId(null); setForm({ title: '', summary: '', content: '', image: '' }); }}>Cancel</button>}
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h2>All Stories</h2>
      <ul>
        {stories.map(story => (
          <li key={story._id}>
            <strong>{story.title}</strong>
            <button onClick={() => handleEdit(story)}>Edit</button>
            <button onClick={() => handleDelete(story._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AdminStories;