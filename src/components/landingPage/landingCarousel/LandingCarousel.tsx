import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { useAppSelector } from "../../../redux/hook";
import "./landingCarousel.scss";
import { useDarkMode } from "../../darkmode/DarkModeContext";

const LandingCarousel = () => {
  const contents = useAppSelector((state) => state.contentful.contents);
  const error = useAppSelector((state) => state.contentful.error);
  const loading = useAppSelector((state) => state.contentful.loading);

  const [currentIndex, setCurrentIndex] = useState(0);

  const { mode } = useDarkMode();

  const filteredContentsHero = contents.filter(
    (items : any) => items.sys.contentType.sys.id === "erLpCarousel"
  );

  const arr = filteredContentsHero.map((item) => ({
    img: item.fields.image?.fields?.file?.url,
    description: item?.fields.description,
  }));

  useEffect(() => {
    if (arr.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex >= arr.length - 2 ? 0 : prevIndex + 2
        );
      }, 5000); // Change images every 5 seconds

      return () => clearInterval(interval);
    }
  }, [arr]);

  if (loading) {
    return <span>Loading...</span>;
  }

  if (error) {

    return <span>{error}</span>;
  }

  if (arr.length === 0) {
    return <span>No items to display.</span>;

  }

  // Get the current two items to display
  const currentItems = [
    arr[currentIndex],
    arr[(currentIndex + 1) % arr.length],
  ];

  return (
    <div className={`carousel-container ${mode}`}>
      <span className={`landing-carousel-title  ${mode}`}>
        <FormattedMessage
          id="landing.carousel.title"
          defaultMessage="Etna Rouge's World "
        />
      </span>
      <div className="lp-carousel-subcont">
        {currentItems.map((item, index) => (
          <div key={index} className="lp-carousel-item">
            <img
              className="lp-carousel-img"
              src={item.img}
              alt={item.description}
            />
            <p className="lp-carousel-description">{item.description}</p>
          </div>
        ))}
      </div>
      <Link className={`lp-carousel-link ${mode}`} to="/discover">

        <FormattedMessage
          id="landing.carousel.discover"
          defaultMessage="Discover more "
        />
      </Link>
    </div>
  );
};

export default LandingCarousel;
