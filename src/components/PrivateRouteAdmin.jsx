import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRouteAdmin = ({ children }) => {
  const { auth } = useSelector((state) => ({ ...state }));

  return auth && auth.token ? { ...children } : <Navigate to="/admin" />;
};

export default PrivateRouteAdmin;
