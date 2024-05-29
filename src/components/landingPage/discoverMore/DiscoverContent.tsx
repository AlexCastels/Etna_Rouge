import { useEffect, useMemo } from "react";
import { useAppSelector } from "../../../redux/hook";
import DiscoverSection from "./DiscoverSection.js"
import { useDispatch } from "react-redux";
import { fetchContentfulData } from "../../../redux/slices/contentfulSlice.js";

const DiscoverContent: React.FC = () => {
  const loading = useAppSelector((state) => state.contentful.loading);
  const error = useAppSelector((state) => state.contentful.error);
  const contents = useAppSelector((state) => state.contentful.contents);
  const dispatch = useDispatch();

  
    useEffect(() => {
    if (contents.length === 0) {
      dispatch(fetchContentfulData()); //dispatching the action of fetch data from Contentful to allow the access to the Landing Page's components
    }
  }, [dispatch, contents.length]);

  
//filter the contents for the news section and memoizing the given values
  const filterFeaturesContent = useMemo(() => {
    return contents.filter(
      (item) => item.sys.contentType.sys.id === "newsErPage"
    );
  }, [contents]);

  //filtering the images of Landing Carousel and memoizing the given values
  const filteredContentsLC = useMemo(() => {
    return contents.filter(
      (items: any) => items.sys.contentType.sys.id === "erLpCarousel"
    );
  }, [contents]);



  if (error) {
    return <div>Error: {error}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {filterFeaturesContent.map((item) => (
        <DiscoverSection key={item.sys.id} error={error} images={filteredContentsLC} content={item.fields} />
      ))}
    </div>
  );
};

export default DiscoverContent;
