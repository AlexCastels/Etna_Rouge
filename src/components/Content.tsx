import { useCallback, useEffect, useState } from "react";
import { client } from "../contentful/client";
import HeroSection from "./HeroSection";
import { Product } from "../interfaces";

const Content = () => {
  const [loadingContent, setLoadingContent] = useState(false);
  const [content, setContent] = useState<Product[]>([]); 

  const cleanUp = useCallback((entry: any) => {
    const { sys, fields } = entry;
    const id = sys.id;
    const title = fields.title;
    const video = fields.video.fields.file.url;
    const updatedContent = { id, title, video };
    setContent([updatedContent]);
  }, []); 

  const getContent = useCallback(async () => {
    try {
      setLoadingContent(true);
      const response = await client.getEntry("6GpawXy0lqHn9ZPzC61Tnq");
      console.log(response);

      if (response) {
        cleanUp(response); 
        setLoadingContent(false);
      } else {
        throw new Error("Something went wrong fetching hero section data");
      }
    } catch (error) {
      console.error(error);
      setLoadingContent(false);
    }
  }, [cleanUp]);

  useEffect(() => {
    getContent();
  }, [getContent]);

  return (
    <div>
      {loadingContent ? (
        <span>Loading...</span>
      ) : (
        content.map((item) => (
       <HeroSection  video={item.video} />
        ))
      )}
    </div>
  );
};

export default Content;
