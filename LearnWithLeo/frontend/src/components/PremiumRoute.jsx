import { Navigate } from 'react-router-dom';

function PremiumRoute({ children }) {
  const subscribed = localStorage.getItem('subscribed');
  if (!subscribed) {
    return <Navigate to="/subscription" />;
  }
  return children;
}

export default PremiumRoute;