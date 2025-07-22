import { useEffect, useState } from 'react';

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ title: '', description: '', age: '', type: '', image: '' });
  const [editingId, setEditingId] = useState(null);

  // Fetch products
  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(setProducts)
      .catch(() => setError('Failed to load products'))
      .finally(() => setLoading(false));
  }, []);

  // Handle form input
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  // Add or update product
  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(
        editingId
          ? `http://localhost:5000/api/products/${editingId}`
          : 'http://localhost:5000/api/products',
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
        setProducts(products.map(p => (p._id === editingId ? data : p)));
      } else {
        setProducts([...products, data]);
      }
      setForm({ title: '', description: '', age: '', type: '', image: '' });
      setEditingId(null);
    } catch (err) {
      setError(err.message);
    }
  };

  // Edit product
  const handleEdit = product => {
    setForm({
      title: product.title,
      description: product.description,
      age: product.age,
      type: product.type,
      image: product.image,
    });
    setEditingId(product._id);
  };

  // Delete product
  const handleDelete = async id => {
    const token = localStorage.getItem('token');
    if (!window.confirm('Delete this product?')) return;
    try {
      const res = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Error');
      setProducts(products.filter(p => p._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <section>
      <h2>{editingId ? 'Edit Product' : 'Add Product'}</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
        <input name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
        <input name="age" placeholder="Age" value={form.age} onChange={handleChange} required />
        <input name="type" placeholder="Type" value={form.type} onChange={handleChange} required />
        <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} required />
        <button type="submit">{editingId ? 'Update' : 'Add'}</button>
        {editingId && <button type="button" onClick={() => { setEditingId(null); setForm({ title: '', description: '', age: '', type: '', image: '' }); }}>Cancel</button>}
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h2>All Products</h2>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            <strong>{product.title}</strong> ({product.age}, {product.type})
            <button onClick={() => handleEdit(product)}>Edit</button>
            <button onClick={() => handleDelete(product._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AdminProducts;