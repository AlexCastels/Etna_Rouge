import Cart from "../cart/Cart";
import FeaturesContent from "../featuresSection/FeaturesContent";
import HeroContent from "../heroSection/HeroContent";
import LandingCarousel from "../landingCarousel/LandingCarousel";
import NavBarTop from "../Navbar/NavBarTop";
import PromoContent from "../promoBanner/PromoContent";


const LandingPage = () => {
  return (
    <>
      <Cart/>
      <PromoContent />
      <NavBarTop />
      <HeroContent />
      <FeaturesContent />
      <LandingCarousel />
      
    </>
  );
};

export default LandingPage;
