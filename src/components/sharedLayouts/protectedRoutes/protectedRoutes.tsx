import { Navigate, Outlet } from "react-router-dom";
import { getAuthToken } from "../../../utils/authToken";

const ProtectedRoutes = () => {
  const token = getAuthToken();

  if (!token) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
