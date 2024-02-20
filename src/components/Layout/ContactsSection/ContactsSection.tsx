import * as React from "react";
import "./ContactsSection.scss";
import logo from "../../../assets/img/logo_EdSpase.svg";

export default function ContactsSection() {
  return (
    <div className="contacts container">
      <img src={logo} alt="logo" />
      <div className="contacts__data">
        <div className="contacts__data_section">
          <h3>Меню:</h3>
          <ul className="contacts__data_list">
            <li>Возможности</li>
            <li>Стоимость</li>
            <li>Выбор Ed Space</li>
          </ul>
        </div>
        <div className="contacts__data_section">
          <h3>Документы:</h3>
          <ul className="contacts__data_list">
            <li>Пользовательское соглашение</li>
            <li>Публичная оферта</li>
          </ul>
        </div>
        <div className="contacts__data_section">
          <h3>Контакты:</h3>
          <ul className="contacts__data_list">
            <li>admin@site.com</li>
            <li>+7 (900) 123-45-67</li>
            <li>+7 (999) 876-54-32</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
