import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Adhoc = ({ children }) => {
  const Auth = useSelector((state) => state.User);
  if (Auth.data.isAuth) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default Adhoc;
