import { useEffect, useMemo, useState } from "react";
import { useDarkMode } from "../../darkmode/DarkmodeContext";
import { useAppSelector } from "../../../redux/hook";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import Loading from "../../loading/Loading";
import ErrorPage from "../../errorPage/ErrorPage";
import "./landingCarousel.scss";

const LandingCarousel = () => {
  const contents = useAppSelector((state) => state.contentful.contents);
  const error = useAppSelector((state) => state.contentful.error);
  const loading = useAppSelector((state) => state.contentful.loading);

  const [currentIndex, setCurrentIndex] = useState(0);
  const { mode } = useDarkMode();
//filter and memoizing the contents of the correct content type
  const filteredContentsLC = useMemo(() => {
    return contents.filter(
      (items: any) => items.sys.contentType.sys.id === "erLpCarousel"
    );
  }, [contents]);

// mapping and memoizing the result in a new object
  const arr = useMemo(() => {
    return filteredContentsLC.map((item) => ({
      img: item.fields.image?.fields?.file?.url,
      description: item?.fields.description,
    }));
  }, [filteredContentsLC]);


//setting the interval to slide two images each 5s
  useEffect(() => {
    if (arr.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex >= arr.length - 2 ? 0 : prevIndex + 2
        );
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [arr]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage />;
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
