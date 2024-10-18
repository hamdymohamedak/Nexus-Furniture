import React from "react";
import styles from "./Hero.module.css";
import Browse from "../Browse/Browse";
import Products from "../Products/Products";
import Share from "../Share/Share";
export default function Hero() {
  return (
    <>
      <section className={styles.Parent}>
        <div className={styles.popAlert}>
          <div style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
            New arrabil
          </div>
          <h2 className={styles.alertH2}>Discover out new collection</h2>
          <p>
            Nexus Furniture offers high-quality furniture, specializing in
            infinity tables for modern living
          </p>
          <button className={styles.popBtn}>Buy Now</button>
        </div>
      </section>
      <Browse />
      <Products />
      <Share />
    </>
  );
}
