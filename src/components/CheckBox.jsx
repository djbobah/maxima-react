import styles from "./CheckBox.module.css";
import check from "../assets/img/ok-circle.svg";

const CheckBox = ({ title }) => {
  return (
    <div className={`${styles.box}`}>
      <span>{title}</span>
      <img src={check} alt="check" className={`${styles.check}`} />
    </div>
  );
};

export default CheckBox;
