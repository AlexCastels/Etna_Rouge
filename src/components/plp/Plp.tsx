
import { addToCart, toggleCart } from "../../redux/slices/cartSlice";
import "../plp/plp.scss";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../../redux/slices/productSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import Cart from "../cart/Cart";
import NavBarTop from "../Navbar/NavBarTop";
import NavBarBottom from "../Navbar/NavbarBottom";
import Button from "../UI/button/Button";


export const Plp: React.FC<any> = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.product.products);
  const imagePerRow = 8
  const [next, setNext] = useState(imagePerRow);
  const location = useLocation()

  const gender = location.state?.gender
  const category = location.state?.category
  function handleMoreImage(){
      setNext(next + imagePerRow);
  };

  const element = product.filter((el: any) => {
    if (gender == 'men' && category == 'shirt') {
      return el.gender === gender && el.category === category;
    }
    if(gender == 'men' && category == 'pants') {
      return el.gender === gender && el.category === category;
    }
    if (gender == 'men' && category == 'shoes') {
      return el.gender === gender && el.category === category;
    }
    if (gender == 'woman' && category == 'shirt') {
      return el.gender === gender && el.category === category;
    }
    if (gender == 'woman' && category == 'pants') {
      return el.gender === gender && el.category === category;
    }
    if (gender == 'woman' && category == 'shoes') {
      return el.gender === gender && el.category === category;
    }
    if (gender === 'men') {
      return el.gender === gender;
    }
    if (gender === 'woman'){
      return el.gender === gender;
    }
  })


  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const handleAddToCart = (el : any) => {
    dispatch(addToCart(el)); 
    dispatch(toggleCart()); 
  };

  return (
    <>
   <NavBarTop/>
    <Cart/>
      <div className="cards-container">
        {element.slice(0, next).map((el: any) => (
          <div className="card-container" key={el.id}>
            <Link to={`/pdp/${el.id}`}>
              <div className="card-img">
              <img src={el.img} alt="" />
            </div>
            </Link>
            <div className="card-button">
              <Button onClick={() => handleAddToCart(el)}>
                ADD TO CART
              </Button>
            </div>
            <Link to={`/pdp/${el.id}`} style={{textDecoration:'none',color:'black'}}>
              <div className="card-name">
              {el.name}
            </div>
            </Link>
            <div className="card-price">
              {Math.round(el.price)}
            </div>
          </div>
        ))}
       
         
      </div>
       <div className="container-butto">
          {next < product.length ? <Button onClick={handleMoreImage}>LOAD MORE</Button> : <p className="cards-continer-nothingToSee">Nothing to see</p>}
        </div>
      <NavBarBottom/>
    </>
  );

}



