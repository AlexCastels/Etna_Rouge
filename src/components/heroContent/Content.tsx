import useContentfulData from "../../contentful/useContentful";
import HeroSection from "../heroSection/HeroSection";

const Content = () => {
  const { loading, data, error } = useContentfulData("6GpawXy0lqHn9ZPzC61Tnq");

  if (loading) return <span>Loading...</span>;
  if (error) return <span>Error: {error.message}</span>;



  if (!data) {
    return <span>No content available</span>;
  }

  const { fields } = data;

  const { id, title } = fields;

  const videoUrl: string | undefined = fields?.video?.fields?.file?.url;

  if (!videoUrl) {
    return <span>No video available</span>; // Gestisci il caso in cui non ci sia un video
  }

  return (
    <div>
      <HeroSection id={id} title={title} video={videoUrl} />
    </div>
  );
};

export default Content;
