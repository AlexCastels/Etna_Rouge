import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { fetchContentfulData } from "../../redux/slices/contentfulSlice";
import FeaturesSection from "./FeaturesSection";

const FeaturesContent: React.FC = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.contentful.loading);
  const error = useAppSelector((state) => state.contentful.error);
  const contents = useAppSelector((state) => state.contentful.contents);

  useEffect(() => {
    dispatch(fetchContentfulData());
  }, []);

  // Controlliamo gli errori
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Controlliamo il caricamento
  if (loading) {
    return <div>Loading...</div>;
  }

  // Se non ci sono errori e il caricamento è completato, procediamo con il rendering
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
