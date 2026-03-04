import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { cartItems } = useContext(CartContext);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav>
      <Link to={`/`}>
        <h1 className="logo">ShopHub</h1>
      </Link>
      <Link to="/cart" className="cart-btn">
        Cart: {cartCount}
      </Link>
    </nav>
  );
}
