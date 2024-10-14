import React from "react";
import styles from "./Share.module.css";
import TestingImg from "../../assets/product.avif";
import { ViewportContainer } from "larose-js";
const images = [
  TestingImg,
  TestingImg,
  TestingImg,
  TestingImg,
  TestingImg,
  TestingImg,
  TestingImg,
  TestingImg,
];

// Function to shuffle the images array
const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export default function Share() {
  const shuffledImages = shuffleArray(images);

  return (
    <ViewportContainer>
      <section className={styles.shareSec}>
        <div className={styles.header}>Show Your Setup with</div>
        <div className={styles.hashtag}>
          <strong style={{ fontWeight: "bold" }}>#NexusFurniture</strong>
        </div>
        <div className={styles.imageGrid}>
          {shuffledImages.map((image, index) => (
            <div
              key={index}
              className={styles.imageWrapper}
              style={{ "--random-rotation": `${Math.random() * 10 - 5}deg` }} // Random rotation
            >
              <img
                loading="lazy"
                src={image}
                alt={`Setup ${index + 1}`}
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </section>
    </ViewportContainer>
  );
}
