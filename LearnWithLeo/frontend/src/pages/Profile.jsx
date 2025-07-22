import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Try to get user info from localStorage
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    // Decode token payload (for demo; in production, fetch from backend)
    const payload = JSON.parse(atob(token.split('.')[1]));
    setUser({ id: payload.userId, role: payload.role });
  }, [navigate]);

  if (!user) return <p>Loading...</p>;

  return (
    <main>
      <h1>Profile</h1>
      <p><strong>User ID:</strong> {user.id}</p>
      <p><strong>Role:</strong> {user.role}</p>
      <button onClick={() => {
        localStorage.removeItem('token');
        navigate('/login');
      }}>Logout</button>
    </main>
  );
}

export default Profile;