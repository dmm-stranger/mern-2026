import { Link } from "react-router-dom";

export default function Products() {
  const products = [
    { id: 1, name: "RTX 5090" },
    { id: 2, name: "MacBook Pro" },
  ];

  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`}>
            {product.name}
          </Link>
        </div>
      ))}
    </div>
  );
}