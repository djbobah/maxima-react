import * as React from "react";
import { useState } from "react";

import logo from "../../assets/img/logo_EdSpase_white.svg";
import "./modal.scss";

const Modal = ({ setOpenModal, openModal }) => {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const closeHandler = () => {
    setOpenModal(false);
    // setAge(14);
    setName("");
  };

  const handler = (e) => {
    const data = {
      name,
      // age,
    };
    console.log(data);
    closeHandler();
  };

  return (
    <div className={openModal ? "modal-wrapper active" : "modal-wrapper"}>
      <div className="modal">
        <div className="modal__close" onClick={closeHandler}>
          <i className="fa fa-times" />
        </div>
        <img src={logo} className="modal__logo" alt="Logo" />
        <div className="modal__content">
          {/* <label> */}
          {/* <span>Имя</span> */}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Имя Фамилия"
          />
          <input
            type="text"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            placeholder="Название организации"
          />
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            placeholder="Должность"
          />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Телефон"
          />
          {/* </label>
          <label>
            <span>Возраст</span>
            <input
              type="number"
              max={99}
              min={14}
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
            />
          </label> */}
          <button onClick={handler}>Отправить</button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
