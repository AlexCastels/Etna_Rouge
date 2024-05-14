import FeaturesContent from "../featuresSection/FeaturesContent";
import HeroContent from "../heroSection/HeroContent";
import LandingCarousel from "../landingCarousel/LandingCarousel";
import NavBarTop from "../Navbar/NavBarTop";


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
