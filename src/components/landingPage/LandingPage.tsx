import { useDispatch, useSelector } from "react-redux";
import PromoContent from "../promoBanner/PromoContent";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import { fetchContentfulData } from "../../redux/slices/contentfulSlice";
import FeaturesContent from "./featuresSection/FeaturesContent";
import HeroContent from "./heroSection/HeroContent";
import LandingCarousel from "./landingCarousel/LandingCarousel";
import NewsLetterForm from "./newsLetter/form/NewsLetterForm";

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
      <HeroContent />
      <FeaturesContent />
      <LandingCarousel />
      <NewsLetterForm />
    </>
  );
};

export default LandingPage;
