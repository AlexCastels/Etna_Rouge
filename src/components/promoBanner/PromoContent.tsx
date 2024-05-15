import  { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { fetchContentfulData } from "../../redux/slices/contentfulSlice";
import PromoBanner from "./PromoBanner";

const PromoContent = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.contentful.loading);
  const error = useAppSelector((state) => state.contentful.error);
  const contents = useAppSelector((state) => state.contentful.contents);

  const [currentIndex, setCurrentIndex] = useState(0);

  console.log(contents);

  useEffect(() => {
    dispatch(fetchContentfulData());
  }, []);

  const filteredContents = contents.filter(
    (items) => items.sys.contentType.sys.id === "erBanner"
  );

  console.log(filteredContents);

  const newArr = filteredContents.map((items) => {
    return items.fields.infoText;
  });

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

  console.log(filteredContents);

  if (error) {
    return <div>Error: {error.message}</div>;
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
