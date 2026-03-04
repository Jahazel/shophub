import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to={`/`}>
        <h1 className="logo">ShopHub</h1>
      </Link>
      <Link to="/cart" className="cart-btn"></Link>
    </nav>
  );
}
