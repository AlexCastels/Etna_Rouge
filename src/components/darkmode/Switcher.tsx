import { useEffect, useState } from "react";
import { useDarkMode } from "./DarkModeContext";
import "./switcher.scss";
import accessibility from "../../assets/accessibility.png";
import Dialog from "./Dialog";

const Switcher = () => {
  const [active, setActive] = useState<boolean>(false);

  const handleClick = () => {
    setActive((prev) => !prev)
  }
 

  return (
    <div className="switch">
      <button onClick={handleClick}>
        <img src={accessibility} alt="accessibility" />
        <Dialog active={active} />
      </button>
    </div>
  );
};

export default Switcher;
