import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hook";
import PromoBanner from "./PromoBanner";

const PromoContent = () => {
  const loading = useAppSelector((state) => state.contentful.loading);
  const error = useAppSelector((state) => state.contentful.error);
  const contents = useAppSelector((state) => state.contentful.contents);

  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredContents = contents.filter(
    (items) => items.sys.contentType.sys.id === "erBanner"
  );

  const newArr = filteredContents.map((items) => items.fields.infoText);

  useEffect(() => {
    if (newArr.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === newArr.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [newArr]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PromoBanner text={newArr[currentIndex]} />
    </>
  );
};

export default PromoContent;
