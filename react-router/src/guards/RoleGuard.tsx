import { Navigate, Outlet } from "react-router-dom";

interface Props {
  allowedRoles: string[];
}

export default function RoleGuard({ allowedRoles }: Props) {
  const userRole = "admin";

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}