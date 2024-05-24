import React from "react";
import "./button.scss";
import "../../../style.scss";
interface ButtonProps {
  children: React.ReactNode;
  onClick?: (item : any) => void;
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className, type }) => {
  const classes = `default-button ${className ? className : ""}`;
  const disabled = false
  return (
    <button className={classes} type={type} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
