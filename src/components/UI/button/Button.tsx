import "./button.scss";
import "../../../style.scss";

import React from "react";
interface ButtonProps {
  children: React.ReactNode;
  onClick: (item : any) => void;
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className, type }) => {
  const classes = `default-button ${className ? className : ""}`;
  return (
    <button className={classes} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
