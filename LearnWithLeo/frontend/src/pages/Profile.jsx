import { useEffect, useState } from 'react';

function Profile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('http://localhost:5000/api/auth/me', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch user');
        return res.json();
      })
      .then(setUser)
      .catch(() => setError('Could not load profile. Please log in again.'));
  }, []);

  const handleCancel = async () => {
    const token = localStorage.getItem('token');
    const res = await fetch('http://localhost:5000/api/users/cancel-subscription', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    if (res.ok) {
      alert('Subscription cancelled!');
      window.location.reload();
    } else {
      alert(data.error || 'Failed to cancel subscription');
    }
  };

  const handleRenew = async () => {
    const token = localStorage.getItem('token');
    const res = await fetch('http://localhost:5000/api/users/subscribe', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    if (res.ok) {
      alert('Subscription renewed!');
      window.location.reload();
    } else {
      alert(data.error || 'Failed to renew subscription');
    }
  };

  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!user) return <p>Loading...</p>;

  return (
    <main>
      <h1>Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>
        Subscription Status:{' '}
        {user.isSubscribed ? (
          <span style={{ color: 'green' }}>Active</span>
        ) : (
          <span style={{ color: 'red' }}>Not Subscribed</span>
        )}
      </p>
      {user.isSubscribed && (
        <button onClick={handleCancel}>Cancel Subscription</button>
      )}
      {!user.isSubscribed && (
        <button onClick={handleRenew}>Renew Subscription</button>
      )}
    </main>
  );
}

export default Profile;