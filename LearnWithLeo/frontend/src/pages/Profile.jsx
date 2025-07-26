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
    <main style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #e0f7fa 0%, #fff 100%)'
    }}>
      <section style={{
        background: '#fff',
        padding: '2rem 2.5rem',
        borderRadius: 12,
        boxShadow: '0 2px 16px rgba(60, 170, 169, 0.08)',
        maxWidth: 400,
        width: '100%'
      }}>
        <h1 style={{ color: '#3aafa9', marginBottom: 12, textAlign: 'center' }}>Your Profile</h1>
        <p style={{ color: '#555', fontSize: '1rem', marginBottom: 18, textAlign: 'center' }}>
          Welcome, <strong>{user.name}</strong>! Here you can view your account details and manage your subscription.
        </p>
        <div style={{ marginBottom: 18 }}>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p>
            <strong>Subscription Status:</strong>{' '}
            {user.isSubscribed ? (
              <span style={{ color: 'green', fontWeight: 'bold' }}>Active</span>
            ) : (
              <span style={{ color: 'red', fontWeight: 'bold' }}>Not Subscribed</span>
            )}
          </p>
        </div>
        {user.isSubscribed ? (
          <button
            onClick={handleCancel}
            style={{
              width: '100%',
              background: '#e57373',
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              padding: '0.7rem',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginBottom: 8
            }}
          >
            Cancel Subscription
          </button>
        ) : (
          <button
            onClick={handleRenew}
            style={{
              width: '100%',
              background: '#3aafa9',
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              padding: '0.7rem',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginBottom: 8
            }}
          >
            Renew Subscription
          </button>
        )}
      </section>
    </main>
  );
}

export default Profile; 