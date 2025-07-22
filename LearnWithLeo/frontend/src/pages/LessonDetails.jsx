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
      <img src={lesson.image} alt={lesson.title} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
      <p>{lesson.summary}</p>
      <p>{lesson.content}</p>
    </main>
  );
}

export default LessonDetails;