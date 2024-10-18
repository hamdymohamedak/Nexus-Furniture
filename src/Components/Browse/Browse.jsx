import React, { useState } from "react";
import styles from "./Browse.module.css";
import testImg from "../../assets/product.avif";
import { ViewportContainer } from "larose-js";

export default function Browse() {
  const [ImgsState, setImgsState] = useState([
    {
      imgPath: testImg,
      imgTitle: "Leving",
    },
    {
      imgPath: testImg,
      imgTitle: "Dining",
    },
    {
      imgPath: testImg,
      imgTitle: "BedRoom",
    },
  ]);

  return (
    <ViewportContainer>
      <section className={styles.browseSec}>
        <div className={styles.title}>
          <h1>Browse The Range</h1>
          <h4>
          Nexus Furniture offers high-quality furniture, specializing in infinity tables for modern living
          </h4>
        </div>
        <div className={styles.cardParent}>
          {ImgsState.map((item, index) => (
            <div key={index} className={styles.card}>
              <img src={item.imgPath} alt={`Image ${index + 1}`} />
              <div className={styles.cardTitle}>{item.imgTitle}</div>
            </div>
          ))}
        </div>
      </section>
    </ViewportContainer>
  );
}
