import { Outlet, Link } from "react-router-dom";

export default function PrivateLayout() {
  return (
    <>
      <h2>User Dashboard</h2>

      <nav>
        <Link to="/account">Account</Link> |{" "}
        <Link to="/checkout">Checkout</Link>
      </nav>

      <Outlet />
    </>
  );
}