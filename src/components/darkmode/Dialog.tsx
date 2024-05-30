import React, { useEffect, useState } from "react";
import { useDarkMode } from "./DarkmodeContext";
import "./dialog.scss";

interface DialogProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dialog: React.FC<DialogProps> = ({ active, setActive }) => {
  const { mode, setMode } = useDarkMode();
  const [closing, setClosing] = useState(false);

  const handleDarkClick = () => {
    setMode("dark");
  };

  const handleLightClick = () => {
    setMode("light");
  };

  const handleCloseClick = () => {
    setClosing(true);
  };

  useEffect(() => {  //setting a Timeout for closing the Dialog
    if (closing) {
      setTimeout(() => {
        setClosing(false);
        setActive(false);
      }, 300);
    }
  }, [closing, setActive]);

  useEffect(() => { // adding the class for light and dark theme to the body
    document.body.classList.add(mode);
  }, [mode]);

  if (!active && !closing) {
    return null;
  }

  return (
    <dialog
      className={`light-mode-cont ${closing ? "closing" : ""}`}
      open={!closing}
    >
      <h3 className="light-mode-title">Mode: </h3>
      <span>
        <button className="darkmode-btn" onClick={handleDarkClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </span>

      <button className="lightmode-btn" onClick={handleLightClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g id="Environment / Sun">
            <path
              id="Vector"
              d="M12 4V2M12 20V22M6.41421 6.41421L5 5M17.728 17.728L19.1422 19.1422M4 12H2M20 12H22M17.7285 6.41421L19.1427 5M6.4147 17.728L5.00049 19.1422M12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17Z"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      </button>
      <button className="light-mode-close-btn" onClick={handleCloseClick}>
        X
      </button>
    </dialog>
  );
};

export default Dialog;
