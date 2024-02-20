import * as React from "react";
import "./Footer.scss";
import telegramImg from "../../../assets/img/TG_Logo.svg";
import vkImg from "../../../assets/img/VK_Logo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content container">
        <div className="footer__content_copyright">
          2022 Ed Space. Все права защищены
        </div>
        <div className="footer__content_socials">
          <img src={vkImg} alt="vk" />
          <img src={telegramImg} alt="telegramm" />
        </div>
      </div>
    </footer>
  );
}
