import { Link } from "react-router-dom";

export default function ProductCard({ id, title, price, image }) {
  return (
    <div className="product-card">
      <Link to={`/product/${id}`}>
        <div className="image-container">
          <img src={image} alt={title} />
        </div>

        <div className="card-content">
          <h3>{title}</h3>
          <p>${price}</p>
        </div>
      </Link>
    </div>
  );
}
