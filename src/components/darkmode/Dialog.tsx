import React, { useEffect, useState } from "react";
import { useDarkMode } from "./DarkModeContext";
import moon from "../../assets/moon.png";
import sun from "../../assets/sun.png";
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

  useEffect(() => {
    if (closing) {
      setTimeout(() => {
        setClosing(false);
        setActive(false);
      }, 300); // Time in milliseconds, adjust as needed
    }
  }, [closing, setActive]);

  useEffect(() => {
    document.body.classList.add(mode);
    return () => {
      document.body.classList.remove(mode === "light" ? "dark" : "light");
    };
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
          <img className="light-mode-img" src={moon} alt="dark mode" />
        </button>
      </span>

      <button className="lightmode-btn" onClick={handleLightClick}>
        <img className="light-mode-img" src={sun} alt="light mode" />
      </button>
      <button className="light-mode-close-btn" onClick={handleCloseClick}>
        X
      </button>
    </dialog>
  );
};

export default Dialog;
