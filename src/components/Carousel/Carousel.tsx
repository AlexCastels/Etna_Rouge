import { useCarousel } from "../Hooks/useCarousel"
import "./Carousel.scss"

interface CarouselProps {
  items: string[];
}

export function Carousel({ items }: CarouselProps) {
  const { currentIndex, goToNext, goToPrev } = useCarousel(items.length);
  const itemsPerPage = 3;
  const startIndex = currentIndex;
  const endIndex = Math.min(startIndex + itemsPerPage, items.length);

  return (
    <div className="carousel">
      {/* Si disattiva il bottone "prev" se l'indice è zero */}
      <button className="btn-arrow" onClick={goToPrev} disabled={currentIndex === 0}>{"<"}</button>
      <div className="carousel-content">
        {/* Utilizziamo slice() per estrarre solo gli elementi desiderati dall'array items.  */}
        {items.slice(startIndex, endIndex).map((item, index) => (
          <div key={index} className="carousel-item">
            <img className="carousel-img" src={item} alt={item} />
          </div>
        ))}
      </div>
      {/* Si disattiva il bottone "next" se l'indice è uguale al numero di item presenti nell'array */}
      <button className="btn-arrow" onClick={goToNext} disabled={currentIndex === items.length - 1}>{">"}</button>
    </div>
  );
}

//Da scrivere dove verrà utilizzato il componente Carousel:
// const [data] = useFetch("http://localhost:3000/products")
// const item = data.map((item)=> item.img)
//return
//<Carousel items={item}/> 