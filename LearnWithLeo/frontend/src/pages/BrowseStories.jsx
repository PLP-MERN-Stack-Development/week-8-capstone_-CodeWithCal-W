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
      <ul>
        {stories.map(story => (
          <li key={story._id}>
            <img src={story.image} alt={story.title} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
            <br />
            <strong>
              <Link to={`/story/${story._id}`}>{story.title}</Link>
            </strong>
            <br />
            <span>{story.summary}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default BrowseStories;