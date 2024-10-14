import React from "react";
import styles from "./WhatsAppButton.module.css";

const WhatsAppButton = ({ setPhone, setMessage }) => {
  const handleClick = () => {
    const phoneNumber = setPhone;
    const message = setMessage;
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <button className={styles["whatsapp-button"]} onClick={handleClick}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
      />
      Chat with us on WhatsApp
    </button>
  );
};

export default WhatsAppButton;
