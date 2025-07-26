import { useState } from 'react';

function Subscription() {
  const [selected, setSelected] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async () => {
    if (!selected) return alert('Please select a plan.');
    const token = localStorage.getItem('token');
    const res = await fetch('http://localhost:5000/api/users/subscribe', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    if (res.ok) {
      setSubscribed(true);
      localStorage.setItem('subscribed', selected);
      alert('Subscription successful!');
    } else {
      alert(data.error || 'Subscription failed');
    }
  };

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
        <h1 style={{ color: '#3aafa9', marginBottom: 12, textAlign: 'center' }}>Choose Your Subscription</h1>
        <p style={{ color: '#555', fontSize: '1rem', marginBottom: 18, textAlign: 'center' }}>
          Unlock premium activities, stories, and progress tracking. Choose a plan that fits your family!
        </p>
        {subscribed ? (
          <p style={{ color: 'green', fontWeight: 'bold', textAlign: 'center' }}>
            Thank you for subscribing to the <span style={{ textTransform: 'capitalize' }}>{selected}</span> plan!
          </p>
        ) : (
          <>
            <div style={{ marginBottom: 18 }}>
              <label style={{ display: 'block', marginBottom: 10 }}>
                <input
                  type="radio"
                  name="plan"
                  value="Monthly"
                  checked={selected === 'Monthly'}
                  onChange={() => setSelected('Monthly')}
                  style={{ marginRight: 8 }}
                />
                <span style={{ fontWeight: 'bold', color: '#3aafa9' }}>Monthly</span> - $10/month
              </label>
              <label style={{ display: 'block', marginBottom: 10 }}>
                <input
                  type="radio"
                  name="plan"
                  value="Yearly"
                  checked={selected === 'Yearly'}
                  onChange={() => setSelected('Yearly')}
                  style={{ marginRight: 8 }}
                />
                <span style={{ fontWeight: 'bold', color: '#3aafa9' }}>Yearly</span> - $100/year
              </label>
            </div>
            <button
              onClick={handleSubscribe}
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
              Subscribe
            </button>
          </>
        )}
      </section>
    </main>
  );
}

export default Subscription;
