import "./button.scss";
import "../../../style.scss";

import React from "react";
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className, type }) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
