import React from "react";
import styles from "./NavBar.module.css";
import logo from "../../assets/LaRose.webp";
import { Icons } from "../Icons/Icons";
export default function NavBar() {
  return (
    <>
      <ul className={styles.ul}>
        <div className={styles.navLogo}>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </div>
        <div>
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
}
