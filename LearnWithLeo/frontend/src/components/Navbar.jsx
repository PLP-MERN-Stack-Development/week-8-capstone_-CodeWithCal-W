import { Link } from 'react-router-dom';
import logo from '../assets/logo-white.png';

function Navbar() {
  return (
    <nav>
      <img src={logo} alt="Learn With Leo Logo" style={{ height: '60px', verticalAlign: 'middle' }} />
      <h2 style={{ display: 'inline-block', marginLeft: '1rem', verticalAlign: 'middle' }}>Learn With Leo</h2>
      <div style={{ marginLeft: '2rem', display: 'inline-block' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/browse-activities" style={{ marginRight: '1rem' }}>Activities</Link>
        <Link to="/browse-stories" style={{ marginRight: '1rem' }}>Stories</Link>
        <Link to="/money-lessons" style={{ marginRight: '1rem' }}>Money Lessons</Link>
        <Link to="/profile" style={{ marginRight: '1rem' }}>Profile</Link>
        <Link to="/about" style={{ marginRight: '1rem' }}>About</Link>
        <Link to="/login" style={{ marginRight: '1rem' }}>Login</Link>
        <Link to="/register" style={{ marginRight: '1rem' }}>Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;