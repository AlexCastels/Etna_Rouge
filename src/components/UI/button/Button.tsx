import './button.scss'
import '../../../style.scss'

import React from "react";
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  type?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick
}) => {
  

  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

