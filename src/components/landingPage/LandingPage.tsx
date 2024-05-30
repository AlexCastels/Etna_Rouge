import Cart from "../cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import { fetchContentfulData } from "../../redux/slices/contentfulSlice";
import PromoContent from "../promoBanner/PromoContent";
import FeaturesContent from "./featuresSection/FeaturesContent";
import HeroContent from "./heroSection/HeroContent";
import LandingCarousel from "./landingCarousel/LandingCarousel";
import NavBarTop from "../navbar/NavbarTop";
import NavBarBottom from "../navbar/NavbarBottom";
import Footer from "../footer/Footer";
import CentralProductSection from "./CentralProductSection/CentralProductSection";



const LandingPage = () => {
  const dispatch = useDispatch();
  const contents = useSelector((state: RootState) => state.contentful.contents);

  useEffect(() => {
    if (contents.length === 0) {
      dispatch(fetchContentfulData()); //dispatching the action of fetch data from Contentful to allow the access to the Landing Page's components
    }
  }, [dispatch, contents.length]);

  return (
    <>
      <PromoContent />
      <NavBarTop />
      <Cart />
      <HeroContent />
      <CentralProductSection />
      <FeaturesContent />
      <LandingCarousel />
      <NavBarBottom />
      <Footer />
    </>
  );
};

export default LandingPage;
