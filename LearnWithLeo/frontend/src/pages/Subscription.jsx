import { useState } from 'react';

function Subscription() {
  const [selected, setSelected] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (!selected) return alert('Please select a plan.');
    setSubscribed(true);
    localStorage.setItem('subscribed', selected); // Save plan to localStorage
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