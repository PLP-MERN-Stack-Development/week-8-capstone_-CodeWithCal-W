import { useEffect, useState } from 'react';

function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(res => res.text())
      .then(data => setMessage(data));
  }, []);

  return (
    <main>
      <h1>Welcome to Learn With Leo!</h1>
      <p>Fun and learning resources for kids ages 1-6.</p>
      <p style={{ color: 'green' }}>{message}</p>
    </main>
  );
}

export default Home;