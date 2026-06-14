import {
  useGetProductsQuery,
}
  from "../features/products/productsApi"

export default function Products() {

  const {
    data,
    isLoading,
  } = useGetProductsQuery()

  if (isLoading)
    return <h1>Loading...</h1>

  return (
    <div>
      {data?.map(product => (
        <p key={product.id}>
          {product.name}
        </p>
      ))}
    </div>
  )
}