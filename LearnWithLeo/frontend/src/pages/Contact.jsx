import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong.');
      }
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setError(err.message || 'Could not send message. Please try again.');
    }
  };

  return (
    <main style={{ padding: '2rem', maxWidth: 600, margin: '0 auto' }}>
      <h1 style={{ color: '#2b7a78' }}>Contact Us</h1>
      <p style={{ fontSize: '1.1rem', color: '#333', marginBottom: '2rem' }}>
        Have a question, suggestion, or just want to say hello? We’d love to hear from you!
      </p>
      {submitted ? (
        <div style={{ color: '#3aafa9', fontWeight: 'bold', fontSize: '1.2rem' }}>
          Thank you for reaching out! We’ll get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            style={{ padding: '0.7rem', fontSize: '1rem', borderRadius: 6, border: '1px solid #ccc' }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            style={{ padding: '0.7rem', fontSize: '1rem', borderRadius: 6, border: '1px solid #ccc' }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            style={{ padding: '0.7rem', fontSize: '1rem', borderRadius: 6, border: '1px solid #ccc' }}
          />
          <button
            type="submit"
            style={{
              background: '#3aafa9',
              color: '#fff',
              padding: '0.9rem 2rem',
              border: 'none',
              borderRadius: 8,
              fontSize: '1.1rem',
              cursor: 'pointer'
            }}
          >
            Send Message
          </button>
        </form>
      )}
      <div style={{ marginTop: '2.5rem', color: '#555', fontSize: '1rem' }}>
        <p>
          Or email us directly at:{' '}
          <a href="mailto:hello@learnwithleo.com" style={{ color: '#3aafa9' }}>
            hello@learnwithleo.com
          </a>
        </p>
      </div>
    </main>
  );
}

export default Contact;