import React from "react";
import "./featuresSection.scss"

interface FeaturesSection {
  image: string;
  p1: string;
  p2: string;
  p3: string;
}

const FeaturesSection: React.FC<FeaturesSection> = ({ image, p1, p2, p3 }) => {
  return (
    <div className="feature-cont">
      <img src={image} alt="features" />
      <div className="text-cont">
        <p> {p1} </p>
        <p> {p2} </p>
        <p> {p3} </p>
      </div>
    </div>
  );
};

export default FeaturesSection;
