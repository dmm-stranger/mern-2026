import { Navigate, Outlet } from "react-router-dom";

const isLoggedIn = true;

export default function AuthGuard() {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}