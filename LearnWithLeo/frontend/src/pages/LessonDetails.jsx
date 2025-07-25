import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function LessonDetails() {
  const { id } = useParams();
  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/lessons/${id}`)
      .then(res => res.json())
      .then(data => {
        setLesson(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!lesson) return <p>Lesson not found.</p>;

  return (
    <main>
      <h1>{lesson.title}</h1>
      <img
        src={lesson.image ? `http://localhost:5000${lesson.image}` : '/placeholder.png'}
        alt={lesson.title}
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
      <p style={{ fontWeight: 'bold', color: '#555' }}>{lesson.summary}</p>
      <div style={{ marginTop: '1rem', color: '#333', fontSize: '1.1rem', lineHeight: 1.6 }}>
        {lesson.content}
      </div>
    </main>
  );
}

export default LessonDetails;