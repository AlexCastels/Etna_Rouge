import { useEffect, useMemo } from "react";
import { useAppSelector } from "../../../redux/hook";
import HeroSection from "./HeroSection";

import { useNavigate } from "react-router-dom";


const Content = () => {
  const navigate = useNavigate();
  const contents = useAppSelector((state) => state.contentful.contents);
  const error = useAppSelector((state) => state.contentful.error);
  const loading = useAppSelector((state) => state.contentful.loading);

  const filteredContentsHero = useMemo(() => {
    return contents.filter((items) => items.fields.title === "Hero Section ER");
  }, [contents]);

  useEffect(() => {
    if (error) {
      navigate('/error');
    }
  }, [error, navigate]);

  if (loading) {
    return <span> loading... </span>;
  }

  if (error) {
    return <span>Something went wrong</span>;
  }

  return (
    <div>
      {filteredContentsHero &&
        filteredContentsHero.map((item) => (
          <HeroSection key={item.sys.id} content={item.fields} />
        ))}
    </div>
  );
};

export default Content;
