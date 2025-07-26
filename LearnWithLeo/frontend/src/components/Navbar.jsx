import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo-white.png';

function Navbar() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
    if (token) {
      fetch('http://localhost:5000/api/auth/me', {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(res => res.json())
        .then(user => {
          setIsSubscribed(user.isSubscribed);
          setIsAdmin(user.role === 'admin');
        });
    } else {
      setIsAdmin(false);
      setIsSubscribed(false);
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setIsSubscribed(false);
    setIsAdmin(false);
    navigate('/');
  };

  // Highlight active link
  function navLinkStyle(active) {
    return {
      color: active ? '#ffd700' : '#fff',
      textDecoration: active ? 'underline' : 'none',
      fontWeight: active ? 'bold' : 'normal',
      fontSize: '1rem',
      padding: '0.5rem 0',
      transition: 'color 0.2s',
      border: 'none',
      background: 'none',
      cursor: 'pointer'
    };
  }

  return (
    <nav style={{
      background: 'linear-gradient(90deg, #3aafa9 0%, #2b7a78 100%)',
      padding: '0.5rem 0',
      boxShadow: '0 2px 8px rgba(60, 170, 169, 0.10)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        <div
          style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          onClick={() => navigate('/')}
        >
          <img src={logo} alt="LearnWithLeo Logo" style={{ height: '60px', verticalAlign: 'middle' }} />
          <span style={{
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            marginLeft: '1rem',
            letterSpacing: '1px'
          }}>
            LearnWithLeo
          </span>
        </div>
        <div style={{
          marginLeft: 'auto',
          display: 'flex',
          alignItems: 'center',
          gap: '1.2rem'
        }}>
          <Link to="/" style={navLinkStyle(location.pathname === '/')}>Home</Link>
          <Link to="/browse-activities" style={navLinkStyle(location.pathname === '/browse-activities')}>Activities</Link>
          <Link to="/browse-stories" style={navLinkStyle(location.pathname === '/browse-stories')}>Stories</Link>
          <Link to="/money-lessons" style={navLinkStyle(location.pathname === '/money-lessons')}>Money Lessons</Link>
          <Link to="/progress" style={navLinkStyle(location.pathname === '/progress')}>Progress</Link>
          <Link to="/about" style={navLinkStyle(location.pathname === '/about')}>About</Link>
          <Link to="/contact" style={navLinkStyle(location.pathname === '/contact')}>Contact</Link>
          <Link to="/cart" style={navLinkStyle(location.pathname === '/cart')}>Cart</Link>
          {isLoggedIn ? (
            <>
              <Link to="/profile" style={navLinkStyle(location.pathname === '/profile')}>Profile</Link>
              <Link to="/subscription" style={navLinkStyle(location.pathname === '/subscription')}>Subscription</Link>
              <button
                onClick={handleLogout}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  marginLeft: '0.5rem'
                }}
              >
                Logout
              </button>
              {isAdmin && <Link to="/admin" style={navLinkStyle(location.pathname === '/admin')}>Admin</Link>}
              {isSubscribed && <span style={{ color: '#ffd700', marginLeft: 10, fontWeight: 'bold' }}>Premium</span>}
            </>
          ) : (
            <>
              <Link to="/login" style={navLinkStyle(location.pathname === '/login')}>Login</Link>
              <Link to="/register" style={navLinkStyle(location.pathname === '/register')}>Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;