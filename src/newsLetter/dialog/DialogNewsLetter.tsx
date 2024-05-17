// DialogNewsLetter.tsx
import React from "react";
import heart from "../../../public/assets/heart.png";
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
    <div>
    
      <dialog open>
           <Button className="closing-btn" onClick={onClose}>
            x
          </Button>
        <div>
         
          <span>
            <h3>{message}</h3>
            {submitted && <img src={heart} alt="Heart" />}
          </span>
        </div>
      </dialog>
    </div>
  );
};

export default DialogNewsLetter;
