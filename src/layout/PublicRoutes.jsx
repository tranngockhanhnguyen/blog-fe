import { Navigate, Outlet } from "react-router-dom";

export default function PublicRoutes() {
  const token = localStorage.getItem("access_token") || false;
  return token ? <Navigate to='/' /> : <Outlet />;
}
