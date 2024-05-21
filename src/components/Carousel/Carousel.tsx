import { Link } from "react-router-dom";
import { useCarousel } from "../hooks/useCarousel";
import "./Carousel.scss";



interface CarouselProps {
  items: any;
  numItems: number;
}

//added a parameter called numItems, for the reusing of Carousel component, passing the wanted items number;
export const Carousel: React.FC<CarouselProps> = ({ items, numItems }) => {
  const itemsPerPage = numItems;
  
  const { currentIndex, goToNext, goToPrev } = useCarousel(
    items.length,
    itemsPerPage
  );

  const startIndex = currentIndex;
  const endIndex = Math.min(startIndex + itemsPerPage, items.length);


  return (
    <div className="carousel-cont">
      
      <div className="carousel">
        {/* Si disattiva il bottone "prev" se l'indice è zero */}
        <button
          className="btn-arrow"
          onClick={goToPrev}
          disabled={currentIndex === 0} 
        >
          {"<"}
        </button>
        <div className="carousel-content">
          {/* Utilizziamo slice() per estrarre solo gli elementi desiderati dall'array items.  */}
          {items.slice(startIndex, endIndex).map((item :any) => (
            
            <div key={item.id} className="carousel-item">
              <Link to={`/pdp/${item.id}`} style={{textDecoration: 'none', color: "black"}}>
              <img className="carousel-img" src={item.img} alt={item.name} />
              <p>{item.name}</p>
              </Link>
            </div>
          ))}
        </div>
        {/* Si disattiva il bottone "next" se l'indice è uguale al numero di item presenti nell'array */}
        <button
          className="btn-arrow"
          onClick={goToNext}
          disabled={currentIndex === items.length - 1}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};


