import * as React from "react";
import styles from "./NavBar.module.css";
import logo from "../assets/img/logo_EdSpase.svg";
import arrowDown from "../assets/img/arrow-down.svg";
const NavBar = () => {
  return (
    // <div className="nav">
    <header className={` ${styles.header}`}>
      <div className={`container ${styles.nav}`}>
        <img src={logo} className={styles.logo} alt="Logo" />
        <div className={styles.menu}>
          <div className={styles.menuItem}>Возможности</div>
          <div className={styles.menuItem}>Стоимость</div>
          <div className={styles.menuItem}>Контакты</div>
        </div>
        <div className={styles.language}>
          <span className={styles.languageItem}>RU</span>
          <img src={arrowDown} alt="Arrow" />
        </div>
      </div>
    </header>
    // </div>
  );
};

export default NavBar;
