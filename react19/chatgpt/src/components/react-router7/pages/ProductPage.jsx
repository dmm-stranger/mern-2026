import { useParams } from "react-router";

export default function ProductPage() {
  const { productId } = useParams();

  return (
    <div>
      Product ID:
      {" "}
      {productId}
    </div>
  );
}