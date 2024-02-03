import React from "react";
import styles from "./NavBar.module.css";
import logo from "../assets/img/logo_EdSpase.svg";
import arrowDown from "../assets/img/arrow-down.svg";
const NavBar = () => {
  return (
    // <div className="nav">
    <header className={` ${styles.header}`}>
      <div className={`container ${styles.nav}`}>
        <img src={logo} className={styles.logo} />
        <div className={styles.menu}>
          <div className="menu__item">Возможности</div>
          <div className="menu__item">Стоимость</div>
          <div className="menu__item">Контакты</div>
        </div>
        <div className={styles.language}>
          <span className={styles.languageItem}>RU</span>
          <img src={arrowDown} alt="" />
        </div>
      </div>
    </header>
    // </div>
  );
};

export default NavBar;
