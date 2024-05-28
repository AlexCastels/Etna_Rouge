import { useMemo } from "react";
import { useAppSelector } from "../../../redux/hook";
import DiscoverSection from "./DiscoverSection.js"

const DiscoverContent: React.FC = () => {
  const loading = useAppSelector((state) => state.contentful.loading);
  const error = useAppSelector((state) => state.contentful.error);
  const contents = useAppSelector((state) => state.contentful.contents);
  

  const filterFeaturesContent = useMemo(() => {
    return contents.filter(
      (item) => item.sys.contentType.sys.id === "newsErPage"
    );
  }, [contents]);

  const filteredContentsLC = useMemo(() => {
    return contents.filter(
      (items: any) => items.sys.contentType.sys.id === "erLpCarousel"
    );
  }, [contents]);

console.log(filteredContentsLC);



  if (error) {
    return <div>Error: {error}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dark">
      {filterFeaturesContent.map((item) => (
        <DiscoverSection key={item.sys.id} error={error} images={filteredContentsLC} content={item.fields} />
      ))}
    </div>
  );
};

export default DiscoverContent;
