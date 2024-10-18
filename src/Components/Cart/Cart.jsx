import React from "react";
import { useCart } from "../CartContext/CartContext";
import styles from "./Cart.module.css";
import { Ak_Alert } from "larose-js";
export default function Cart() {
  const { cart, removeFromCart, handleCheckout } = useCart();
  const totalPrice = cart.reduce(
    (total, item) => total + item.imgPrice * item.quantity,
    0
  );

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.cartTitle}>Your Cart</h1>
      <div className={styles.cartItems}>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className={styles.cartItem}>
              <img
                className={styles.itemImage}
                src={item.imgPath}
                alt={item.imgTitle}
              />
              <div className={styles.itemDetails}>
                <h3 className={styles.itemName}>{item.imgTitle}</h3>
                <p className={styles.itemPrice}>${item.imgPrice.toFixed(2)}</p>
                <p className={styles.itemQuantity}>Quantity: {item.quantity}</p>
              </div>
              <button
                className={styles.removeItemBtn}
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
      {cart.length > 0 && (
        <div className={styles.cartSummary}>
          <h2 className={styles.summaryTitle}>Cart Summary</h2>
          <p className={styles.summaryTotal}>Total: ${totalPrice.toFixed(2)}</p>
          <button className={styles.checkoutBtn} onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}
