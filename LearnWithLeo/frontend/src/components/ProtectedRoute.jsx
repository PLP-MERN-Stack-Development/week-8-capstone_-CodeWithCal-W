import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, requiredRole }) {
  const token = localStorage.getItem('token');
  if (!token) return <Navigate to="/login" />;

  // Decode token payload
  const payload = JSON.parse(atob(token.split('.')[1]));
  if (requiredRole && payload.role !== requiredRole) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;