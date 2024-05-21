import Cart from "../cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import NewsLetterForm from "../../newsLetter/form/NewsLetterForm";
import FeaturesContent from "../featuresSection/FeaturesContent";
import HeroContent from "../heroSection/HeroContent";
import LandingCarousel from "../landingCarousel/LandingCarousel";
import PromoContent from "../promoBanner/PromoContent";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import { fetchContentfulData } from "../../redux/slices/contentfulSlice";
import Footer from "../footer/Footer";
import NavBarTop from "../Navbar/NavBarTop";
import NavBarBottom from "../Navbar/NavbarBottom";

const LandingPage = () => {
  const dispatch = useDispatch();
  const contents = useSelector((state: RootState) => state.contentful.contents);

  useEffect(() => {
    if (contents.length === 0) {
      dispatch(fetchContentfulData());
    }
  }, [dispatch, contents.length]);

  return (
    <>
    <PromoContent />
    <NavBarTop/>
      <Cart/>
      <HeroContent />
      <FeaturesContent />
      <LandingCarousel />
      <NewsLetterForm />
      <NavBarBottom/>
    </>
  );
};

export default LandingPage;
