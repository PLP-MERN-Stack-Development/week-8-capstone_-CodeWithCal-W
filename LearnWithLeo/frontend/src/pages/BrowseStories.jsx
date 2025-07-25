import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function BrowseStories() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/stories')
      .then(res => res.json())
      .then(data => {
        setStories(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <main>
      <h1>Browse Short Stories</h1>
      <div style={{ marginBottom: '2rem', color: '#444', fontSize: '1.1rem', maxWidth: 600 }}>
        <p>
          Welcome to our story library! Here you'll find a collection of short stories for children, each designed to inspire imagination, teach important lessons, and make reading fun.
        </p>
        <p>
          Click on a story to read, listen, or download. New stories are added regularly—check back often for fresh adventures!
        </p>
      </div>
      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', listStyle: 'none', padding: 0 }}>
        {stories.map(story => (
          <li key={story._id} style={{ border: '1px solid #eee', borderRadius: 8, padding: '1rem', width: 220, textAlign: 'center', background: '#fafafa', minHeight: '340px' }}>
            <img
              src={story.image ? `http://localhost:5000${story.image}` : '/placeholder.png'}
              alt={story.title}
              style={{
                width: '180px',
                height: '220px',
                objectFit: 'contain',
                borderRadius: 8,
                marginBottom: 8,
                background: '#fff',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
              onError={e => { e.target.src = '/placeholder.png'; }}
            />
            <br />
            <strong>
              <Link to={`/story/${story._id}`}>{story.title}</Link>
            </strong>
            <br />
            <span style={{ color: '#555' }}>{story.summary?.slice(0, 60)}{story.summary && story.summary.length > 60 ? '...' : ''}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default BrowseStories;