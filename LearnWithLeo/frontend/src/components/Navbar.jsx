import { Link } from 'react-router-dom';
import logo from '../assets/logo-white.png';

function Navbar() {
  return (
    <nav>
      <img src={logo} alt="Learn With Leo Logo" style={{ height: '60px', verticalAlign: 'middle' }} />
      <h2 style={{ display: 'inline-block', marginLeft: '1rem', verticalAlign: 'middle' }}>Learn With Leo</h2>
      <div style={{ marginLeft: '2rem', display: 'inline-block' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;