import { useEffect } from "react";
import { Carousel } from "./Carousel";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { fetchContentfulData } from "../../redux/slices/contentfulSlice";

const FetchCarouse = () => {
  const dispatch = useAppDispatch();
  const contents = useAppSelector((state) => state.contentful.contents);
  const error = useAppSelector((state) => state.contentful.error);
  const loading = useAppSelector((state) => state.contentful.loading);

  useEffect(() => {
    dispatch(fetchContentfulData());
  }, []);

  

  const filteredContentsHero = contents.filter(
    (items) => items.sys.contentType.sys.id === "erLpCarousel"
  );

  const arr = filteredContentsHero.map(
    (item) => {
      return {img: item.fields.image?.fields?.file?.url, description:  item?.fields.description }
    }
  );

  

  if (loading) {
    return <span> loading... </span>;
  }

  if (error) {
    return <span> {error.message} </span>;
  }

  return (
    <div>
      <Carousel items={arr} />
    </div>
  );
};

export default FetchCarouse;
