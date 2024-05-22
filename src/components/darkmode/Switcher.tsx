import React, { useEffect, useState } from "react";
import { useDarkMode } from "./DarkModeContext";
import "./switcher.scss";
import accessibilityLight from "../../assets/accessibilityLight.png";
import accessibilityDark from "../../assets/accessibilityDark.png";
import Dialog from "./Dialog";

const Switcher = () => {
  const [active, setActive] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");
  const { mode } = useDarkMode();

  const handleClick = () => {
    setActive((prev) => !prev);
  };

  useEffect(() => {
    if (mode === "light") {
      setUrl(accessibilityLight)
    } else if (mode === "dark") {
      setUrl(accessibilityDark)
    }
  }, [mode]);

  return (
    <div className="switcher-cont">
      <button className="switcher-btn" onClick={handleClick}>
        <img className="access-img" src={url} alt="accessibility" />
      </button>
      <Dialog active={active} setActive={setActive} />
    </div>
  );
};

export default Switcher;
