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

  return (
    <nav>
      <img src={logo} alt="Learn With Leo Logo" style={{ height: '60px', verticalAlign: 'middle' }} />
      <h2 style={{ display: 'inline-block', marginLeft: '1rem', verticalAlign: 'middle' }}>Learn With Leo</h2>
      <div style={{ marginLeft: '2rem', display: 'inline-block' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/browse-activities" style={{ marginRight: '1rem' }}>Activities</Link>
        <Link to="/browse-stories" style={{ marginRight: '1rem' }}>Stories</Link>
        <Link to="/money-lessons" style={{ marginRight: '1rem' }}>Money Lessons</Link>
        <Link to="/progress" style={{ marginRight: '1rem' }}>Progress</Link>
        <Link to="/about" style={{ marginRight: '1rem' }}>About</Link>
        <Link to="/contact" style={{ marginRight: '1rem' }}>Contact</Link>
        <Link to="/cart" style={{ marginRight: '1rem' }}>Cart</Link>
        {isLoggedIn ? (
          <>
            <Link to="/profile" style={{ marginRight: '1rem' }}>Profile</Link>
            <Link to="/subscription" style={{ marginRight: '1rem' }}>Subscription</Link>
            <button onClick={handleLogout} style={{ marginRight: '1rem', background: 'none', border: 'none', color: '#3aafa9', cursor: 'pointer', fontWeight: 'bold' }}>Logout</button>
            {isAdmin && <Link to="/admin" style={{ marginRight: '1rem' }}>Admin</Link>}
            {isSubscribed && <span style={{ color: 'green', marginLeft: 10 }}>Premium</span>}
          </>
        ) : (
          <>
            <Link to="/login" style={{ marginRight: '1rem' }}>Login</Link>
            <Link to="/register" style={{ marginRight: '1rem' }}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;