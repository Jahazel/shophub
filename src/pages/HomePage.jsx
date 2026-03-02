import ProductCard from "../components/ProductCard";
import useFetch from "../hooks/useFetch";
import { PRODUCTS_URL } from "../services/api";

export default function HomePage() {
  const { data, loading, error } = useFetch(PRODUCTS_URL);

  if (loading) {
    return <p>loading</p>;
  }

  if (error) {
    return <p>Something went wrong</p>;
  }

  return (
    <>
      <div className="hero">
        <h1>Welcome to ShopHub</h1>
        <p>Discover amazing products at great prices</p>
      </div>

      <div className="home-page-container">
        <h2>Our products</h2>
        <div className="products-container">
          {data.map(({ id, title, price, image }) => (
            <ProductCard
              key={id}
              id={id}
              title={title}
              price={price}
              image={image}
            />
          ))}
        </div>
      </div>
    </>
  );
}
