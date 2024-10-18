import React, { useState } from "react";
import styles from "./NavBar.module.css";
import logo from "../../assets/Logo-removebg-preview.png";
import { Icons } from "../Icons/Icons";
import { Link } from "react-router-dom";

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
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/Shop"}>Shop</Link>
          </li>
          <li>
            <Link to={"/About"}>About</Link>
          </li>
          <li>
            <Link to={"/Contact"}>Contact</Link>
          </li>
        </div>
        <div className={styles.iconContainer}>
          <div>
            <Icons.heart />
          </div>
          <div>
            <Icons.search />
          </div>
          <div>
            <Link to={"/Cart"}>
              <Icons.shopping />
            </Link>
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
        <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/Shop"}>Shop</Link>
          </li>
          <li>
            <Link to={"/About"}>About</Link>
          </li>
          <li>
            <Link to={"/Contact"}>Contact</Link>
          </li>
        <div className={styles.smallNavIcons}>
          <div>
            <Icons.heart />
          </div>
          <div>
            <Icons.search />
          </div>
          <div>
          <Link to={"/Cart"}>
              <Icons.shopping />
            </Link>
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
