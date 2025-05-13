import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Loading from '../common/Loading';

const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;