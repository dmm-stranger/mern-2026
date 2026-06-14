import { Outlet, Link } from "react-router-dom";

export default function AdminLayout() {
  return (
    <>
      <h1>Admin Panel</h1>

      <nav>
        <Link to="/admin">Dashboard</Link> |{" "}
        <Link to="/admin/users">Users</Link> |{" "}
        <Link to="/admin/orders">Orders</Link> |{" "}
        <Link to="/admin/products">Products</Link>
      </nav>

      <Outlet />
    </>
  );
}