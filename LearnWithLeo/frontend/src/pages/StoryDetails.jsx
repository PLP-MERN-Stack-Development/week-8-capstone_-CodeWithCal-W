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
      <img src={story.image} alt={story.title} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
      <p>{story.summary}</p>
      <p>{story.content}</p>
    </main>
  );
}

export default StoryDetails;