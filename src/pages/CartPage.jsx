import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";

export default function CartPage() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useContext(CartContext);
  const totalCount = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);
  const [showModal, setShowModal] = useState(false);

  function handleOrder() {
    setShowModal(true);
  }

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added anything yet.</p>
        <Link to="/" className="continue-shopping-btn">
          Continue Shopping
        </Link>
      </div>
    );
  } else {
    return (
      <div className="cart-page-container">
        {showModal &&
          createPortal(
            <div className="modal-overlay">
              <div className="modal">
                <h1>Order Confirmed!</h1>
                <p>Thanks for shopping with ShopHub.</p>
                <Link
                  to="/"
                  className="continue-shopping-btn"
                  onClick={clearCart}
                >
                  Continue Shopping
                </Link>
              </div>
            </div>,
            document.body,
          )}
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
                    <button
                      className="qty-btn"
                      onClick={() => {
                        decreaseQuantity(id);
                      }}
                    >
                      -
                    </button>
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
                  <button
                    className="remove-btn"
                    onClick={() => {
                      removeFromCart(id);
                    }}
                  >
                    Remove
                  </button>
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
            <button className="place-order-btn" onClick={handleOrder}>
              Place Order
            </button>
          </div>
        </div>
      </div>
    );
  }
}
