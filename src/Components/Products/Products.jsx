import React, { useState } from "react";
import { useCart } from "../CartContext/CartContext";
import styles from "./Products.module.css";
import testImg from "../../assets/product.avif";
import { ViewportContainer } from "larose-js";

export default function Products() {
  const { addToCart } = useCart();
  const [addedProductId, setAddedProductId] = useState(null);

  const [products] = useState([
    {
      imgPath: testImg,
      imgTitle: "Product 1",
      imgDescription: "This is a great product.",
      imgPrice: 29.99,
    },
    {
      imgPath: testImg,
      imgTitle: "Product 2",
      imgDescription: "This is an awesome product.",
      imgPrice: 39.99,
    },
    {
      imgPath: testImg,
      imgTitle: "Product 3",
      imgDescription: "This is an amazing product.",
      imgPrice: 49.99,
    },
  ]);

  const handleAddToCart = (product, index) => {
    addToCart(product);
    setAddedProductId(index); // Set the ID of the product just added

    // Reset the button text after 5 seconds
    setTimeout(() => {
      setAddedProductId(null);
    }, 5000);
  };

  return (
    <ViewportContainer>
      <section className={styles.productsSec}>
        <div className={styles.title}>
          <h1>Our Products</h1>
          <h4>Discover our range of amazing products!</h4>
        </div>
        <div className={styles.cardParent}>
          {products.map((product, index) => (
            <div key={index} className={styles.card}>
              <img
                loading="lazy"
                src={product.imgPath}
                alt={product.imgTitle}
                className={styles.productImg}
              />
              <div className={styles.cardContent}>
                <h3 className={styles.productTitle}>{product.imgTitle}</h3>
                <p className={styles.productDescription}>
                  {product.imgDescription}
                </p>
                <p className={styles.productPrice}>
                  ${product.imgPrice.toFixed(2)}
                </p>
                <button
                  className={styles.addToCartBtn}
                  onClick={() => handleAddToCart(product, index)}
                >
                  {/* Change button text based on whether the product was added */}
                  {addedProductId === index
                    ? "Added to Cart Successfully"
                    : "Add to Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </ViewportContainer>
  );
}
