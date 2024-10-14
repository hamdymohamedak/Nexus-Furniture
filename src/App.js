import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import Browse from "./Components/Browse/Browse";
import Products from "./Components/Products/Products";
export default function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Browse />
      <Products />
    </>
  );
}
