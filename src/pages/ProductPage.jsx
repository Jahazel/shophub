import useFetch from "../hooks/useFetch";
import { PRODUCT_BY_ID_URL } from "../services/api";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(PRODUCT_BY_ID_URL(id));

  if (loading) {
    return <p>loading</p>;
  }

  if (error) {
    return <p>Something went wrong</p>;
  }

  const { title, price, image, description, category } = data;

  return (
    <div className="product-page-container">
      <div className="product-page-image-container">
        <img src={image} alt={image} />
      </div>

      <div className="product-page-card-content">
        <h1 className="product-title">{title}</h1>
        <p className="product-price">${price}</p>
        <p className="product-description">{description}</p>
        <p className="product-category">Category: {category}</p>
        <button className="product-buy-bttn">Add to Cart</button>
      </div>
    </div>
  );
}
