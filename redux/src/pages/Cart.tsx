import { useSelector } from "react-redux"

export default function Header() {
  const cartItems = useSelector(
    (state: any) => state.cart.items
  )

  return (
    <div>
      Cart: {cartItems.length}
    </div>
  )
}