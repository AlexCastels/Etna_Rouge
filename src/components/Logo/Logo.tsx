import React, { useEffect, useState } from "react";
import { useDarkMode } from "../darkmode/DarkmodeContext";
import logoDark from "../../assets/logo-Light.png";
import logoLight from "../../assets/logo-Dark.png";



const Logo: React.FC = () => {
  const { mode } = useDarkMode();
  const [url, seturl] = useState<string>("");

  useEffect(() => {
    if (mode === "dark") {
      seturl(logoLight);
    } else if (mode === "light") {
      seturl(logoDark);
    }
  }, [mode]);

  return (
    <>
      <div>
        <img className="logo" src={url} alt="website Logo" />
      </div>
    </>
  );
};

export default Logo;
