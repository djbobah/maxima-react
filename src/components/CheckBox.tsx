import * as React from "react";

import styles from "./CheckBox.module.css";
import check from "../assets/img/ok-circle.svg";

interface checkBoxProps {
  title: string;
}

const CheckBox = ({ title }: checkBoxProps) => {
  return (
    <div className={`${styles.box}`}>
      <span>{title}</span>
      <img src={check} alt="check" className={`${styles.check}`} />
    </div>
  );
};

export default CheckBox;
