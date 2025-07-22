import { useState } from 'react';
import AdminProducts from '../components/AdminProducts';
import AdminStories from '../components/AdminStories';
import AdminLessons from '../components/AdminLessons';

function Admin() {
  const [tab, setTab] = useState('products');

  return (
    <main>
      <h1>Admin Dashboard</h1>
      <nav>
        <button onClick={() => setTab('products')}>Products</button>
        <button onClick={() => setTab('stories')}>Stories</button>
        <button onClick={() => setTab('lessons')}>Lessons</button>
      </nav>
      <section>
        {tab === 'products' && <AdminProducts />}
        {tab === 'stories' && <AdminStories />}
        {tab === 'lessons' && <AdminLessons />}
      </section>
    </main>
  );
}

export default Admin;