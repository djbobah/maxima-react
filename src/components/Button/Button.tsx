import * as React from "react";
import "./button.scss";

interface ButtonProps {
  title: string;
  style?: object;
  onClick?: any;
}

const Button: React.FC<ButtonProps> = ({ title, style, onClick }) => {
  return (
    <button className="button" style={style} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
