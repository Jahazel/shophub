import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { cartItems, clearCart } = useContext(CartContext);
  const { currentUser, logout } = useContext(AuthContext);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const navigate = useNavigate();

  function handleLogout() {
    clearCart();
    logout();
    navigate("/login");
  }

  return (
    <nav>
      <Link to={`/`}>
        <h1 className="logo">ShopHub</h1>
      </Link>
      <div className="nav-right">
        {currentUser && (
          <>
            <p className="nav-welcome">Welcome, {currentUser.name}!</p>
            <Link to="/cart" className="cart-btn">
              Cart: {cartCount}
            </Link>
            <button className="logout-btn" onClick={handleLogout}>
              Sign Out
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
