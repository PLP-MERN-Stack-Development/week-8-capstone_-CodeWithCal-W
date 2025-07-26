import { useState } from 'react';
import AdminProducts from '../components/AdminProducts';
import AdminStories from '../components/AdminStories';
import AdminLessons from '../components/AdminLessons';

function Admin() {
  const [tab, setTab] = useState('products');

  return (
    <main style={{
      minHeight: '80vh',
      background: 'linear-gradient(135deg, #e0f7fa 0%, #fff 100%)',
      padding: '2rem 0'
    }}>
      <section style={{
        background: '#fff',
        maxWidth: 900,
        margin: '0 auto',
        borderRadius: 14,
        boxShadow: '0 2px 16px rgba(60, 170, 169, 0.10)',
        padding: '2.5rem 2rem'
      }}>
        <h1 style={{ color: '#3aafa9', marginBottom: 18, textAlign: 'center', fontSize: '2rem' }}>
          Admin Dashboard
        </h1>
        <p style={{ color: '#555', fontSize: '1.1rem', marginBottom: 28, textAlign: 'center' }}>
          Manage products, stories, and money lessons. Use the tabs below to switch between sections.
        </p>
        <nav style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          marginBottom: 32
        }}>
          <button
            onClick={() => setTab('products')}
            style={{
              padding: '0.7rem 2rem',
              borderRadius: 8,
              border: tab === 'products' ? '2px solid #3aafa9' : '1px solid #ccc',
              background: tab === 'products' ? '#e0f7fa' : '#fff',
              color: tab === 'products' ? '#3aafa9' : '#333',
              fontWeight: tab === 'products' ? 'bold' : 'normal',
              cursor: 'pointer',
              fontSize: '1rem',
              boxShadow: tab === 'products' ? '0 2px 8px rgba(60, 170, 169, 0.08)' : 'none'
            }}
          >
            Products
          </button>
          <button
            onClick={() => setTab('stories')}
            style={{
              padding: '0.7rem 2rem',
              borderRadius: 8,
              border: tab === 'stories' ? '2px solid #3aafa9' : '1px solid #ccc',
              background: tab === 'stories' ? '#e0f7fa' : '#fff',
              color: tab === 'stories' ? '#3aafa9' : '#333',
              fontWeight: tab === 'stories' ? 'bold' : 'normal',
              cursor: 'pointer',
              fontSize: '1rem',
              boxShadow: tab === 'stories' ? '0 2px 8px rgba(60, 170, 169, 0.08)' : 'none'
            }}
          >
            Stories
          </button>
          <button
            onClick={() => setTab('lessons')}
            style={{
              padding: '0.7rem 2rem',
              borderRadius: 8,
              border: tab === 'lessons' ? '2px solid #3aafa9' : '1px solid #ccc',
              background: tab === 'lessons' ? '#e0f7fa' : '#fff',
              color: tab === 'lessons' ? '#3aafa9' : '#333',
              fontWeight: tab === 'lessons' ? 'bold' : 'normal',
              cursor: 'pointer',
              fontSize: '1rem',
              boxShadow: tab === 'lessons' ? '0 2px 8px rgba(60, 170, 169, 0.08)' : 'none'
            }}
          >
            Lessons
          </button>
        </nav>
        <section>
          {tab === 'products' && <AdminProducts />}
          {tab === 'stories' && <AdminStories />}
          {tab === 'lessons' && <AdminLessons />}
        </section>
      </section>
    </main>
  );
}

export default Admin;