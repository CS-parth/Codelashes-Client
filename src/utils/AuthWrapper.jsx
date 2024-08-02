import { Navigate, useLocation } from 'react-router-dom';
import { useAuthQuery } from '../hooks/useAuthQuery';
const AuthWrapper = ({ children }) => {
  const {data:isUser,isLoading,error} = useAuthQuery({refetchOnWindowFocus:false});
  const location = useLocation();

  if(isLoading) return <div>Loading ....</div>
  if(error) return <div>Request Failed</div>

  if (!isUser.authenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!isUser.authorized) {
    // Redirect to unauthorized page or show an error
    return <Navigate to="/unauthorized" replace />;
  }
  return children;
};

export default AuthWrapper;