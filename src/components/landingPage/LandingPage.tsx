import FeaturesContent from "../featuresSection/FeaturesContent";
import HeroContent from "../heroSection/HeroContent";
import LandingCarousel from "../landingCarousel/LandingCarousel";
import PromoContent from "../promoBanner/PromoContent";


const LandingPage = () => {
  return (
    <>
      {/* <PromoContent /> */}
      <HeroContent />
      <FeaturesContent />
      <LandingCarousel />
      
    </>
  );
};

export default LandingPage;
