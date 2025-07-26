import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressDashboard from '../components/ProgressDashboard';

function Progress() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
    if (!token) {
      // Redirect guests to login page or show a message
      navigate('/login');
    }
  }, [navigate]);

  if (!isLoggedIn) {
    // Optionally, you can show a loading spinner or message here
    return null;
  }

  return (
    <main style={{
      minHeight: '80vh',
      background: 'linear-gradient(135deg, #e0f7fa 0%, #fff 100%)',
      padding: '2rem 0'
    }}>
      <section style={{
        background: '#fff',
        maxWidth: 700,
        margin: '0 auto',
        borderRadius: 14,
        boxShadow: '0 2px 16px rgba(60, 170, 169, 0.10)',
        padding: '2rem'
      }}>
        <h1 style={{
          color: '#3aafa9',
          textAlign: 'center',
          fontSize: '2rem',
          marginBottom: '1.2rem'
        }}>
          Your Child's Progress
        </h1>
        <ProgressDashboard />
      </section>
    </main>
  );
}

export default Progress;