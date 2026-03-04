import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartPage() {
  const { cartItems, increaseQuantity } = useContext(CartContext);
  const totalCount = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="cart-page-container">
      <h1>Checkout</h1>
      <div className="cart-layout">
        <div className="order-summary-container">
          <h2>Order Summary</h2>
          {cartItems.map(({ id, title, price, image, quantity }) => (
            <div className="cart-item" key={id}>
              <img src={image} alt={title} />
              <div className="cart-item-info">
                <p className="cart-item-title">{title}</p>
                <p className="cart-item-price">${price}</p>
              </div>
              <div className="cart-item-actions">
                <div className="quantity-controls">
                  <button className="qty-btn">-</button>
                  <span className="qty-number">{quantity}</span>
                  <button
                    className="qty-btn"
                    onClick={() => {
                      increaseQuantity(id);
                    }}
                  >
                    +
                  </button>
                </div>
                <button className="remove-btn">Remove</button>
              </div>
            </div>
          ))}
        </div>
        <div className="total-container">
          <h2>Order Total</h2>
          <div className="total-row">
            <p>Subtotal</p>
            <p>${totalCount}</p>
          </div>
          <div className="total-row total-final">
            <p>Total</p>
            <p>${totalCount}</p>
          </div>
          <button className="place-order-btn">Place Order</button>
        </div>
      </div>
    </div>
  );
}
