// DialogNewsLetter.tsx
import React from "react";
import heart from "../../assets/Logo.png"
import "./DialogNewsLetter.scss";
import Button from "../../components/UI/button/Button";


interface DialogProps {
  message: string;
  submitted: boolean;
  onClose: () => void;
}

const DialogNewsLetter: React.FC<DialogProps> = ({
  message,
  onClose,
  submitted,
}) => {
  return (
    <dialog open>
      <div>
        <span>
          <h3>{message}</h3>
          {submitted && <img src={heart} alt="Heart" />}
        </span>
        <Button className="closing-btn" onClick={onClose}>
          x
        </Button>
      </div>
    </dialog>
  );
};

export default DialogNewsLetter;
