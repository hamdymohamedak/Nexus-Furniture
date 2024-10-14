import React from "react";
import styles from "./Hero.module.css";
export default function Hero() {
  return (
    <section className={styles.Parent}>
      <div className={styles.popAlert}>
        <div style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
          New arrabil
        </div>
        <h2 className={styles.alertH2}>Discover out new collection</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, ut
        </p>
        <button className={styles.popBtn}>Buy Now</button>
      </div>
    </section>
  );
}
