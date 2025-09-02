import { createContext, useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Add product to cart (with quantity support)
const addToCart = (product, quantity = 1) => {
  setCart((prev) => {
    const existing = prev.find((item) => item.id === product.id);
    if (existing) {
      return prev.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    }
    return [...prev, { ...product, quantity }];
  });

  // ✅ Trigger toast after updating cart
  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    toast.success(`${product.name} quantity updated! 🛒`);
  } else {
    toast.success(`${product.name} added to cart! 🛒`);
  }
};


  // Remove product from cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Update quantity directly
  const updateQuantity = (id, quantity) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Number(quantity) } : item
      )
    );
  };

  // Calculate subtotal
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, subtotal }}
    >
      {children}
      <ToastContainer position="top-right" autoClose={3000} />
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
