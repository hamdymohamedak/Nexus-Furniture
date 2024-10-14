import React, { useState } from "react";
import styles from "./NavBar.module.css";
import logo from "../../assets/LaRose.webp";
import { Icons } from "../Icons/Icons";

const NavBar = () => {
  const [isSmallNavOpen, setIsSmallNavOpen] = useState(false);

  const handleSmallNavButtonClick = () => {
    setIsSmallNavOpen(!isSmallNavOpen);
  };

  return (
    <>
      <ul className={styles.ul}>
        <div className={styles.navLogo}>
          <img src={logo} alt="La Rose Logo" />
        </div>
        <div className={styles.navLinks}>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </div>
        <div className={styles.iconContainer}>
          <div>
            <Icons.heart />
          </div>
          <div>
            <Icons.search />
          </div>
          <div>
            <Icons.shopping />
          </div>
          <div>
            <Icons.userPlus />
          </div>
        </div>
      </ul>

      {/* Small Nav */}
      <div className={styles.smallNavBar}>
        <img src={logo} alt="La Rose Logo" />
        <div onClick={handleSmallNavButtonClick} className={styles.closeIcon}>
          <Icons.CloseMenu />
        </div>
      </div>
      <ul
        style={{
          transform: isSmallNavOpen
            ? "translate(0%, 0%)"
            : "translate(-100%, 0%)",
        }}
        className={styles.smallNav}
      >
        <div onClick={handleSmallNavButtonClick} className={styles.closeIcon}>
          <Icons.CloseMenu />
        </div>
        <img src={logo} alt="La Rose Logo" />
        <li>Home</li>
        <li>Shop</li>
        <li>About</li>
        <li>Contact</li>
        <div className={styles.smallNavIcons}>
          <div>
            <Icons.heart />
          </div>
          <div>
            <Icons.search />
          </div>
          <div>
            <Icons.shopping />
          </div>
          <div>
            <Icons.userPlus />
          </div>
        </div>
      </ul>
    </>
  );
};

export default NavBar;
