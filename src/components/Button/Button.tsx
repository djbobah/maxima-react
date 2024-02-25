import * as React from "react";
import "./button.scss";

interface ButtonProps {
  title: string;
  style?: object;
  onClick?: any;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, style, onClick, disabled }) => {
  return (
    <button
      className="button"
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
