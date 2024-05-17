import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { fetchContentfulData } from "../../redux/slices/contentfulSlice";
import './landingCarousel.scss'
import { Link } from "react-router-dom";

const LandingCarousel = () => {
  const dispatch = useAppDispatch();
  const contents = useAppSelector((state) => state.contentful.contents);
  const error = useAppSelector((state) => state.contentful.error);
  const loading = useAppSelector((state) => state.contentful.loading);

  useEffect(() => {
    dispatch(fetchContentfulData());
  }, []);

  const filteredContentsHero = contents.filter(
    (items) => items.sys.contentType.sys.id === "erLpCarousel"
  );

  const arr = filteredContentsHero.map((item) => {
    return {
      img: item.fields.image?.fields?.file?.url,
      description: item?.fields.description,
    };
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (arr.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === arr.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Cambia immagine ogni 5 secondi

      return () => clearInterval(interval);
    }
  }, [arr]);

  if (loading) {
    return <span>loading...</span>;
  }

  if (error) {
    return <span>{error.message}</span>;
  }

  // Verifica se arr è vuoto o currentIndex è fuori dai limiti di arr
  if (arr.length === 0 || currentIndex >= arr.length || currentIndex < 0) {
    return <span>No items to display.</span>;
  }

  return (
    <div className="carousel-container">
      <div className="carousel-subcont">
            <div className="carousel-item">
              <img
                className="carousel-img"
                src={arr[currentIndex].img}
                alt={arr[currentIndex].description}
              />
              <p>{arr[currentIndex].description}</p>
              <Link to='/discover'>Discover more</Link>
            </div>
      
          <div className="btn-cont">
                <button
            className="btn-arrow"
            onClick={() =>
              setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? arr.length - 1 : prevIndex - 1
              )
            }
          >
            {"<"}
          </button>
          <button
            className='btn-arrow'
            onClick={() =>
              setCurrentIndex((prevIndex) =>
                prevIndex === arr.length - 1 ? 0 : prevIndex + 1
              )
            }
          >
            {">"}
          </button>
          </div>
        
      </div>
      
      </div>

  );
};

export default LandingCarousel;
