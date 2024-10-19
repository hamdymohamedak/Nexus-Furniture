import React from "react";
import { CartProvider } from "./Components/CartContext/CartContext"; // Import the provider
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import Browse from "./Components/Browse/Browse";
import Products from "./Components/Products/Products";
import Share from "./Components/Share/Share";
import WhatsAppButton from "./Components/WhatsAppButton";
import { Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Contact from "./Components/Contact/Contact";
export default function App() {
  return (
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Browse" element={<Browse />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Share" element={<Share />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <WhatsAppButton setMessage={" "} setPhone={"+201551700603"} />
    </CartProvider>
  );
}
