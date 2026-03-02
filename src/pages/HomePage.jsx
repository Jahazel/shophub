import { getProduct } from "../services/api";
import ProductCard from "../components/ProductCard";
import React, { useEffect, useState } from "react";

export default function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getProduct();

      setData(result);
    }
    fetchData();
  }, []);

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
              img={image}
            />
          ))}
        </div>
      </div>
    </>
  );
}
