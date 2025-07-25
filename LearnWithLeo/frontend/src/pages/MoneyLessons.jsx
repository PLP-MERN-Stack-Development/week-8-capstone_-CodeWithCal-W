import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function MoneyLessons() {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/lessons')
      .then(res => res.json())
      .then(data => {
        setLessons(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <main>
      <h1>Money Management Lessons</h1>
      <div style={{ marginBottom: '2rem', color: '#444', fontSize: '1.1rem', maxWidth: 600 }}>
        <p>
          Welcome to our Money Management section! Here you'll find simple, fun lessons and activities that help children learn about saving, spending, sharing, and making smart choices with money.
        </p>
        <p>
          Explore each lesson to discover stories, games, and tips for building good money habits from an early age.
        </p>
      </div>
      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', listStyle: 'none', padding: 0 }}>
        {lessons.map(lesson => (
          <li key={lesson._id} style={{ border: '1px solid #eee', borderRadius: 8, padding: '1rem', width: 220, textAlign: 'center', background: '#fafafa', minHeight: '340px' }}>
            <img
              src={lesson.image ? `http://localhost:5000${lesson.image}` : '/placeholder.png'}
              alt={lesson.title}
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
              <Link to={`/lesson/${lesson._id}`}>{lesson.title}</Link>
            </strong>
            <br />
            <span style={{ color: '#555' }}>{lesson.summary?.slice(0, 60)}{lesson.summary && lesson.summary.length > 60 ? '...' : ''}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default MoneyLessons;