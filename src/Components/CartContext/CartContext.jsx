import React, { createContext, useContext, useState, useEffect } from "react";

// Create Context
const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage when the component mounts
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart)); // Load saved cart from localStorage
    }
  }, []);

  // Save cart to localStorage whenever the cart state changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (product) => {
    const existingProduct = cart.find(
      (item) => item.imgTitle === product.imgTitle
    );

    if (existingProduct) {
      // If product already exists in cart, update its quantity
      setCart(
        cart.map((item) =>
          item.imgTitle === product.imgTitle
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Add new product to cart
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;

    const message = cart
      .map(
        (item) =>
          `• ${item.imgTitle} - $${item.imgPrice.toFixed(2)} x ${item.quantity}`
      )
      .join("\n");

    const totalPrice = cart.reduce(
      (total, item) => total + item.imgPrice * item.quantity,
      0
    );

    const whatsappMessage = `Hi, I am interested in purchasing the following items:\n\n${message}\n\nTotal: $${totalPrice.toFixed(
      2
    )}`;
    const whatsappNumber = "+201551700603";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, handleCheckout }}
    >
      {children}
    </CartContext.Provider>
  );
};
