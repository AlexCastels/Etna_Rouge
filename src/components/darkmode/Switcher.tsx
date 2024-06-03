import { useEffect, useState } from "react";
import { useDarkMode } from "./DarkmodeContext";
import Dialog from "./Dialog";
import accessibilityLight from "../../assets/accessibilityLight.png";
import accessibilityDark from "../../assets/accessibilityDark.png";
import "./switcher.scss";


const Switcher = () => {
  const [active, setActive] = useState<boolean>(false); //the state controls the opening/closing of the Dialog 
  const [url, setUrl] = useState<string>(""); // this state change the url of the accessibility img
  const { mode } = useDarkMode();

  const handleClick = () => {
    setActive((prev) => !prev);
  };

  useEffect(() => { //changing the url for show the white or dark accessibility img to make it visible
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
