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
      <ul>
        {lessons.map(lesson => (
          <li key={lesson._id}>
            <img src={lesson.image} alt={lesson.title} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
            <br />
            <strong>
              <Link to={`/lesson/${lesson._id}`}>{lesson.title}</Link>
            </strong>
            <br />
            <span>{lesson.summary}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default MoneyLessons;