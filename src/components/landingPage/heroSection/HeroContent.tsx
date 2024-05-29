import { useEffect, useMemo } from "react";
import { useAppSelector } from "../../../redux/hook";
import HeroSection from "./HeroSection";

import { useNavigate } from "react-router-dom";
import Loading from "../../loading/Loading";
import ErrorPage from "../../errorPage/ErrorPage";


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
      navigate('*');
    }
  }, [error, navigate]);

  if (loading) {
    return <Loading/> ;
  }

  if (error) {
    return <ErrorPage />;
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
