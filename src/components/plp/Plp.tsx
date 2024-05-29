import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../../redux/slices/productSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import Cart from "../cart/Cart";
import NavBarBottom from "../navbar/NavbarBottom";
import NavBarTop from "../navbar/NavbarTop";
import { useDarkMode } from "../darkmode/DarkmodeContext";
import Footer from "../footer/Footer";
import { ButtonComponent } from "../atomic/ButtonComponent";
import "./plp.scss"

export const Plp: React.FC<any> = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.product.products);

  //darkmode
  const { mode } = useDarkMode();

  //logica categorie
  const location = useLocation();
  const gender = location.state?.gender;
  const category = location.state?.category;

  //logica load more
  const imagePerRow = 8;
  const [next, setNext] = useState(imagePerRow);
  function handleMoreImage() {
    setNext(next + imagePerRow);
    console.log(next);
  }

  //filtro delle categorie
  const element = product.filter((el: any) => {
    if (gender == "men" && category == "shirt") {
      return el.gender === gender && el.category === category;
    } else if (gender == "men" && category == "pants") {
      return el.gender === gender && el.category === category;
    } else if (gender == "men" && category == "shoes") {
      return el.gender === gender && el.category === category;
    } else if (gender == "woman" && category == "shirt") {
      return el.gender === gender && el.category === category;
    } else if (gender == "woman" && category == "pants") {
      return el.gender === gender && el.category === category;
    } else if (gender == "woman" && category == "shoes") {
      return el.gender === gender && el.category === category;
    } else if (gender === "men") {
      return el.gender === gender;
    } else if (gender === "woman") {
      return el.gender === gender;
    }
  });

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <>
      <NavBarTop />
      <Cart />
      <div className="cards-container">
        {element.slice(0, next).map((el: any) => (
          <div className="card-container" key={el.id}>
            <Link to={`/pdp/${el.id}`}>
              <div className="card-img">
                <img src={el.img} alt="product image" />
              </div>
            </Link>
            <Link
              to={`/pdp/${el.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className={`card-name ${mode}`}>{el.name}</div>
            </Link>
            <div className="card-price">
              € {Math.round(el.price)}
            </div>
          </div>
        ))}
      </div>
      <div className="container-butto">
        {next < element.length ? (
          <ButtonComponent onClick={handleMoreImage} text='LOAD MORE'></ButtonComponent>
        ) : (
          <p className="cards-continer-nothingToSee">
            Nothing to see
          </p>
        )}
      </div>
      <NavBarBottom />
      <Footer />
    </>
  );
};
