import React from "react";
import { useAppSelector } from "../../redux/hook";
import FeaturesSection from "./FeaturesSection";

const FeaturesContent: React.FC = () => {
  const loading = useAppSelector((state) => state.contentful.loading);
  const error = useAppSelector((state) => state.contentful.error);
  const contents = useAppSelector((state) => state.contentful.contents);

  
  if (error) {
    return <div>Error: {error}</div>;
  }

  
  if (loading) {
    return <div>Loading...</div>;
  }

  
  const filterFeaturesContent = contents.filter(
    (item) => item.fields.title === "Feature Section"
  );

  return (
    <div>
      {filterFeaturesContent.map((item) => (
        <FeaturesSection key={item.sys.id} content={item.fields} />
      ))}
    </div>
  );
};

export default FeaturesContent;
