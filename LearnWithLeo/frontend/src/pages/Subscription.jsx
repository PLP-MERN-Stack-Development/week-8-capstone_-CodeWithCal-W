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
    <main>
      <h1>Subscription Plans</h1>
      {subscribed ? (
        <p>Thank you for subscribing to the {selected} plan!</p>
      ) : (
        <>
          <label>
            <input
              type="radio"
              name="plan"
              value="Monthly"
              checked={selected === 'Monthly'}
              onChange={() => setSelected('Monthly')}
            />
            Monthly - $10/month
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="plan"
              value="Yearly"
              checked={selected === 'Yearly'}
              onChange={() => setSelected('Yearly')}
            />
            Yearly - $100/year
          </label>
          <br />
          <button onClick={handleSubscribe}>Subscribe</button>
        </>
      )}
    </main>
  );
}

export default Subscription;
