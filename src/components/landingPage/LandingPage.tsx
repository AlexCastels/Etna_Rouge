import FeaturesContent from '../featuresSection/FeaturesContent'
import FetchCarousel from '../carousel/FetchCarousel'
import HeroContent from '../heroSection/HeroContent'
import NavBarTop from '../Navbar/NavBarTop'


const LandingPage = () => {
  return (
      <>
          <NavBarTop />
          <HeroContent />
          <FeaturesContent />
          <FetchCarousel />
      </>
  )
}

export default LandingPage