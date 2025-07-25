import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function StoryDetails() {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/stories/${id}`)
      .then(res => res.json())
      .then(data => {
        setStory(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!story) return <p>Story not found.</p>;

  return (
    <main>
      <h1>{story.title}</h1>
      <img
        src={story.image ? `http://localhost:5000${story.image}` : '/placeholder.png'}
        alt={story.title}
        style={{
          width: '260px',
          height: '320px',
          objectFit: 'contain',
          borderRadius: 10,
          background: '#fff',
          marginBottom: 16,
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
        onError={e => { e.target.src = '/placeholder.png'; }}
      />
      <p style={{ fontWeight: 'bold', color: '#555' }}>{story.summary}</p>
      <div style={{ marginTop: '1rem', color: '#333', fontSize: '1.1rem', lineHeight: 1.6 }}>
        {story.content}
      </div>
    </main>
  );
}

export default StoryDetails;