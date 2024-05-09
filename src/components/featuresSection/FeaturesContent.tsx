import useContentfulData from "../../contentful/useContentful";
import FeaturesSection from "./FeaturesSection";

const FeaturesContent = () => {
  const { loading, data, error } = useContentfulData("2oV7RHGJMTRbqGEPJTg0cS");

  if (loading) return <span>Loading...</span>;
  if (error) return <span>Error: {error.message}</span>;

  if (!data) {
    return <span>No content available</span>;
  }

  const { fields } = data;

    const { id, title } = fields;
    console.log(data);
    

    const image: string | undefined = fields?.image?.fields?.file?.url; 
    const paragraph1: string | undefined = fields.description.content[0].content[0].value;
    const paragraph2: string | undefined = fields.secondParagraph.content[0].content[0].value;
    const paragraph3: string | undefined = fields.thirdParagraph.content[0].content[0].value;



    return <div>
    <FeaturesSection image={image} p1={paragraph1} p2={paragraph2} p3={paragraph3} />
        
  </div>;
};

export default FeaturesContent;
