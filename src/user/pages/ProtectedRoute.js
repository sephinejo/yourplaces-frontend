import { useContext } from 'react';
import { AuthContext } from '../../shared/context/auth-context';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const auth = useContext(AuthContext);

  if (!auth.isLoggedIn) {
    return <Navigate to='/' replace />;
  }

  return children;
}

export default ProtectedRoute;
