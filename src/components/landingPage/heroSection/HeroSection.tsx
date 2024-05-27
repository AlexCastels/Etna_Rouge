import React from "react";
import "./heroSections.scss";
import { useDarkMode } from "../../darkmode/DarkmodeContext";

const HeroSection:React.FC<any> = ({ content }) => {
  const { mode } = useDarkMode();
  const video = content?.video?.fields?.file?.url;

  

  return (
    <div className={`hero-cont ${mode}`}>
      <video src={video} muted autoPlay loop></video>
    </div>
  );
};

export default HeroSection;