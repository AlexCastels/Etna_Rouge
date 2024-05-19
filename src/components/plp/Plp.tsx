import { addToCart, toggleCart } from "../../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import "../plp/plp.scss";
import { useEffect, useState } from "react";
import { fetchData } from "../../redux/slices/productSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import Cart from "../cart/Cart";


export const Plp: React.FC<any> = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.product.products);
  const toggleCartValue = useAppSelector((state) => state.cart.toggleCart )

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const handleAddToCart = (el : any) => {
    dispatch(addToCart(el)); 
    dispatch(toggleCart()); 
  };

  return (
    <>
    <Cart/>
      <div className="cards-container">
        {product.map((el: any) => (
          <div className="card-container" key={el.id}>
            <Link to={`/pdp/${el.id}`}>
              <div className="card-img">
              <img src={el.img} alt="" />
            </div>
            </Link>
            <div className="card-button">
              <button onClick={() => handleAddToCart(el)}>
                ADD TO CART
              </button>
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
      
    </>
  );
};

export default Plp;

{
  /* <div className="single-card-container">
            <div className="card-body-container">
              <Link to={`/pdp/${el.id}`}>
                <div className="card-body-img">
                  <img src={el.img}></img>
                </div>
              </Link>
              <div className="card-foot-btn">
                <button onClick={() => dispatch(addToCart(el))}>
                  ADD TO CART
                </button>
              </div>
            </div>
            <Link to={`/pdp/${el.id}`} style={{ textDecoration: "none" }}>
              <div className="card-title">
                <p>{el.name}</p>
              </div>
            </Link>
            <div className="card-body-text">
              <p>{el.price}€</p>
            </div>
          </div> */
}
