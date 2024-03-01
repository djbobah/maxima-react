import * as React from "react";
import { useState } from "react";

import logo from "../../assets/img/logo_EdSpase_white.svg";
import "./modal.scss";
import Button from "../Button/Button";

interface ModalProps {
  setOpenModal: (a: boolean) => void;
  setDisableButton: (a: boolean) => void;
  openModal: boolean;
}

const Modal = ({ setOpenModal, openModal, setDisableButton }: ModalProps) => {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [agreement, setAgreement] = useState(false);

  const closeHandler = () => {
    setOpenModal(false);
    setName("");
    setOrganization("");
    setPosition("");
    setEmail("");
    setPhone("");
    setAgreement(false);
  };

  const handler = () => {
    // const data = {
    //   name,
    //   organization,
    //   position,
    //   email,
    //   phone,
    //   agreement,
    // };
    setDisableButton(true);
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
          <div className="agreementBlock">
            <div>
              <input
                className="agreementBlockCheck"
                type="checkbox"
                checked={agreement}
                id="check"
                onChange={(e) => setAgreement(e.target.checked)}
              />
            </div>
            <div className="agreementBlock_text">
              <label htmlFor="check">Я согласен на обработку моих</label>
              <div>
                <a href="/personal">персональных данных</a>
              </div>
            </div>
          </div>

          <Button title="Отправить" onClick={handler} disabled={!agreement} />
        </div>
      </div>
    </div>
  );
};
export default Modal;
