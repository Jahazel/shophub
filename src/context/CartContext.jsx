import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCart = cartItems.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });

      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  function increaseQuantity(productId) {
    const existingItem = cartItems.find(({ id }) => id === productId);

    if (existingItem) {
      const updatedCart = cartItems.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      setCartItems(updatedCart);
    }
  }

  function decreaseQuantity(productId) {
    const existingItem = cartItems.find(({ id }) => id === productId);

    if (existingItem.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== productId));
    } else if (existingItem.quantity > 1) {
      const updatedCart = cartItems.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      setCartItems(updatedCart);
    }
  }

  function removeFromCart(productId) {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
