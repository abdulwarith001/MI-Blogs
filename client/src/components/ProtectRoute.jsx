import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { DashboardLayout } from "../pages";
const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return userInfo ? <DashboardLayout /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
