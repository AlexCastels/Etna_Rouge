import FeaturesContent from "../featuresSection/FeaturesContent";
import HeroContent from "../heroSection/HeroContent";
import NavBarTop from "../Navbar/NavBarTop";
import LandingCarousel from "../landingCarousel/LandingCarousel";

const LandingPage = () => {
  return (
    <>
      <NavBarTop />
      <HeroContent />
      <FeaturesContent />
      <LandingCarousel />
      
    </>
  );
};

export default LandingPage;
