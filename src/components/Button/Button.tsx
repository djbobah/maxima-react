import * as React from "react";
import "./button.scss";

interface ButtonProps {
  title: string;
  style?: object;
}

const Button: React.FC<ButtonProps> = ({ title, style }) => {
  return (
    <button className="button" style={style}>
      {title}
    </button>
  );
};

export default Button;
