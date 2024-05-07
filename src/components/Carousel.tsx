import { useCarousel } from "./UseCarousel"

interface CarouselProps{
    items: string[];
}

export function Carousel({ items}: CarouselProps) {
    const { currentIndex, goToNext, goToPrev } = useCarousel(items.length);
    const itemsPerPage = 3;
    const startIndex = currentIndex;
    const endIndex = Math.min(startIndex + itemsPerPage, items.length);

    return (
        <div className="carousel">
            {/* Si disattiva il bottone "prev" se l'indice è zero */}
          <button onClick={goToPrev} disabled={currentIndex === 0}>Prev</button>
          <div className="carousel-content">
           {/* Utilizziamo slice() per estrarre solo gli elementi desiderati dall'array items.  */}
            {items.slice(startIndex, endIndex).map((item, index) => (
              <div key={index} className="carousel-item">
                <img src={item} alt={item} />
              </div>
            ))}
          </div>
          {/* Si disattiva il bottone "next" se l'indice è uguale al numero di item presenti nell'array */}
          <button onClick={goToNext} disabled={currentIndex === items.length - 1}>Next</button>
        </div>
      );
}