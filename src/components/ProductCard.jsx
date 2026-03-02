export default function ProductCard({ id, title, price, img }) {
  return (
    <div className="product-card" key={id}>
      <div className="image-container">
        <img src={img} alt={title} />
      </div>

      <div className="card-content">
        <h3>{title}</h3>
        <p>${price}</p>
      </div>
    </div>
  );
}
