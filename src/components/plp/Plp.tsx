import { addToCart, toggleCart } from "../../redux/slices/cartSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../../redux/slices/productSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import Cart from "../cart/Cart";
import NavBarBottom from "../navbar/NavbarBottom"
import Button from "../UI/button/Button";
import "../plp/plp.scss";
import NavBarTop from "../navbar/NavbarTop";

export const Plp: React.FC<any> = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.product.products);
  
  //logica categorie
  const location = useLocation();
  const gender = location.state?.gender;
  const category = location.state?.category;

  //logica load more
  const imagePerRow = 8;
  const [next, setNext] = useState(imagePerRow);
  function handleMoreImage() {
    setNext(next + imagePerRow);
    console.log(next)
  }
  const navigate = useNavigate()
  //filtro delle categorie
  const element = product.filter((el: any) => {
    if (gender == "men" && category == "shirt") {
      return el.gender === gender && el.category === category;
    }
    if (gender == "men" && category == "pants") {
      return el.gender === gender && el.category === category;
    }
    if (gender == "men" && category == "shoes") {
      return el.gender === gender && el.category === category;
    }
    if (gender == "woman" && category == "shirt") {
      return el.gender === gender && el.category === category;
    }
    if (gender == "woman" && category == "pants") {
      return el.gender === gender && el.category === category;
    }
    if (gender == "woman" && category == "shoes") {
      return el.gender === gender && el.category === category;
    }
    if (gender === "men") {
      return el.gender === gender;
    }
    if (gender === "woman") {
      return el.gender === gender;
    }
  });

  //logica per passare dati in pdp per go back
  // function handleNavigate(id:any){
  //   navigate(`/pdp/${id}` , {state : params})
  // }

  useEffect(() => {
    dispatch(fetchData());
    //logica per go back
    // setParams({
    //   gender : gender ,
    //   category : category
    // })  
  }, []);

  const handleAddToCart = (el: any) => {
    dispatch(addToCart(el));
    dispatch(toggleCart());
  };

  return (
    <>
      <NavBarTop/>
      <Cart />
      <div className="cards-container">
        {element.slice(0, next).map((el: any) => (
          <div className="card-container" key={el.id}>
            <Link to={`/pdp/${el.id}`}>
              <div className="card-img">
                <img src={el.img} alt="" />
              </div>
            </Link>
            {/* <div className="card-button">
              <Button onClick={() => handleAddToCart(el)}>
                <FormattedMessage
                  id="plp.button.addToCart"
                  defaultMessage="ADD TO CART"
                />
              </Button>
            </div> */}
            <Link to={`/pdp/${el.id}`} style={{textDecoration:'none',color:'black'}}>
              <div className="card-name">
              {el.name}
            </div>
            </Link>
            {/* <div onClick={() => handleNavigate(el.id)} style={{textDecoration:'none',color:'black'}}>
              <div className="card-name">
              {el.name}
            </div>
            </div> */}
            <div className="card-price">
              € {Math.round(el.price)}
            </div>
          </div>
        ))}
      </div>
      <div className="container-butto">
        {next < element.length ? (
          <Button onClick={handleMoreImage}>LOAD MORE</Button>
        ) : (
          <p className="cards-continer-nothingToSee">Nothing to see</p>
        )}
      </div>
      <NavBarBottom />
    </>
  );
};
