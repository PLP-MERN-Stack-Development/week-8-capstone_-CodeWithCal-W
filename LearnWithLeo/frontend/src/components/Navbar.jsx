import logo from '../assets/logo-white.png';

function Navbar() {
  return (
    <nav>
      <img src={logo} alt="Learn With Leo Logo" style={{ height: '60px', verticalAlign: 'middle' }} />
      <h2 style={{ display: 'inline-block', marginLeft: '1rem', verticalAlign: 'middle' }}>Learn With Leo</h2>
    </nav>
  );
}

export default Navbar;