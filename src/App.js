import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import Browse from "./Components/Browse/Browse";
import Products from "./Components/Products/Products";
import Share from "./Components/Share/Share";
import WhatsAppButton from "./Components/WhatsAppButton";
import { RoseRouter, Route } from "larose-js";
export default function App() {
  return (
    <>
      <NavBar />
      <RoseRouter>
        <Route path="/" element={<Hero />} />
        <Route path="/Browse" element={<Browse />} />
        <Route path="/Products" element={<Products />} />
        <Route path="Share/" element={<Share />} />

        <WhatsAppButton
          setMessage={"Hello Nexus-Furniture"}
          setPhone={"+201551700603"}
        />
      </RoseRouter>
    </>
  );
}
