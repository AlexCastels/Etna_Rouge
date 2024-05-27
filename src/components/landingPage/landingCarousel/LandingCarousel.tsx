import { useEffect, useMemo, useState } from "react";
import { useAppSelector } from "../../../redux/hook";
import { useDarkMode } from "../../darkmode/DarkmodeContext";
import { FormattedMessage } from "react-intl";
import "./landingCarousel.scss";

const LandingCarousel = () => {
  const contents = useAppSelector((state) => state.contentful.contents);
  const error = useAppSelector((state) => state.contentful.error);
  const loading = useAppSelector((state) => state.contentful.loading);

  const [currentIndex, setCurrentIndex] = useState(0);
  const { mode } = useDarkMode();

  const filteredContentsHero = useMemo(() => {
    return contents.filter(
      (items: any) => items.sys.contentType.sys.id === "erLpCarousel"
    );
  }, [contents]);

  const arr = useMemo(() => {
    return filteredContentsHero.map((item) => ({
      img: item.fields.image?.fields?.file?.url,
      description: item?.fields.description,
    }));
  }, [filteredContentsHero]);

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
      <span className={`landing-carousel-title ${mode}`}>
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
            <p className={`lp-carousel-description ${mode}`}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
      {/*  <Link className="lp-carousel-link" to="/discover">

        <FormattedMessage
          id="landing.carousel.discover"
          defaultMessage="Discover more "
        />
      </Link> */}
    </div>
  );
};

export default LandingCarousel;
