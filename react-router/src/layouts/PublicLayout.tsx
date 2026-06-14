import { Outlet, Link } from "react-router-dom";

export default function PublicLayout() {
  return (
    <>
      <header>
        <h2>Public Header</h2>

        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/products">Products</Link> |{" "}
          <Link to="/login">Login</Link>
        </nav>
      </header>

      <Outlet />

      <footer>
        <p>Public Footer</p>
      </footer>
    </>
  );
}