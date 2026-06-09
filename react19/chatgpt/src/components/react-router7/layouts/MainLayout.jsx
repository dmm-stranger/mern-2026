import { Outlet, Link } from "react-router";

export default function MainLayout() {
  return (
    <>
      <header className="border-b">
        <nav className="container mx-auto flex gap-4 p-4">
          <Link to="/">Home</Link>

          <Link to="/catalog">
            Catalog
          </Link>


          <Link to="/products/123">
            Product
          </Link>

          <Link to="/cart">
            Cart
          </Link>
        </nav>
      </header>

      <main className="container mx-auto py-6">
        <Outlet />
      </main>
    </>
  );
}