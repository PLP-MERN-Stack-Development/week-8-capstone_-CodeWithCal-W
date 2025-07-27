import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/profile');
    }
  }, [navigate]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || (data.errors && data.errors[0]?.msg) || 'Login failed');
      } else {
        localStorage.setItem('token', data.token);
        navigate('/profile');
      }
    } catch {
      setError('Server error');
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
        maxWidth: 350,
        width: '100%'
      }}>
        <h1 style={{ color: '#3aafa9', marginBottom: 12, textAlign: 'center' }}>Welcome Back!</h1>
        <p style={{ color: '#555', fontSize: '1rem', marginBottom: 18, textAlign: 'center' }}>
          Log in to access your account, download activities, and track your kid's learning journey.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.7rem',
              marginBottom: 12,
              borderRadius: 6,
              border: '1px solid #ccc',
              fontSize: '1rem'
            }}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.7rem',
              marginBottom: 12,
              borderRadius: 6,
              border: '1px solid #ccc',
              fontSize: '1rem'
            }}
          />
          <button
            type="submit"
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
            Login
          </button>
          {error && <p style={{ color: 'red', marginTop: 8, textAlign: 'center' }}>{error}</p>}
        </form>
        <p style={{ textAlign: 'center', marginTop: 16, fontSize: '0.95rem' }}>
          New here? <a href="/register" style={{ color: '#3aafa9', textDecoration: 'underline' }}>Create an account</a>
        </p>
      </section>
    </main>
  );
}

export default Login;