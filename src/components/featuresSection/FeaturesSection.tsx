import React from "react";
import "./FeaturesSection.scss";



const FeaturesSection: React.FC<any> = ({ content }) => {

  const img = content?.image?.fields?.file?.url || "";
  const p1 = content?.description?.content[0]?.content[0]?.value || "";
  const p2 = content?.secondParagraph?.content[0]?.content[0]?.value || "";
  const p3 = content?.thirdParagraph?.content[0]?.content[0]?.value || "";

  return (
    <div className="feature-cont">
      {img && <img src={img} alt="features" />}
      <div className="text-cont">
        {p1 && <p>{p1}</p>}
        {p2 && <p>{p2}</p>}
        {p3 && <p>{p3}</p>}
      </div>
    </div>
  );
};

export default FeaturesSection;
