import React from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.contactTitle}>Get in Touch</h1>
      <div className={styles.contactInfo}>
        <p className={styles.contactItem}>
          <strong>Phone:</strong>
          <a href="tel:+201551700603" className={styles.contactLink}>
            {" "}
            +201551700603
          </a>
        </p>
        <p className={styles.contactItem}>
          <strong>Instagram: </strong>
          <a
            href="https://www.instagram.com/_nexus_furniture_?igsh=MTM0NzJ0Ymt0cjFnag%3D%3D&utm_source=qr"
            className={styles.contactLink}
            target="_blank"
            rel="noopener noreferrer"
          >
             _nexus_furniture_
          </a>
        </p>
        <p className={styles.contactItem}>
          <strong>Facebook:</strong>
          <a
            href="https://www.facebook.com/profile.php?id=61562742105575&mibextid=LQQJ4d"
            className={styles.contactLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Nexus Furniture
          </a>
        </p>
        <p className={styles.contactItem}>
          <strong>WhatsApp:</strong>
          <a
            href="https://wa.me/+201551700603"
            className={styles.contactLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat with us
          </a>
        </p>
      </div>
    </div>
  );
}
