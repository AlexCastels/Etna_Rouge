import React from "react";
import "./heroSections.scss";

const HeroSection:React.FC<any> = ({ content }) => {
  
  const video = content?.video?.fields?.file?.url;

  

  return (
    <div className="hero-cont">
      <video src={video} muted autoPlay loop></video>
    </div>
  );
};

export default HeroSection;