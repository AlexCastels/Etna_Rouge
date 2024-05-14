import { addToCart } from "../../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import "../plp/plp.scss";
import { useEffect } from "react";
import { fetchData } from "../../redux/slices/productSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";

export const Plp: React.FC<any> = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <>
      <Link to="/Cart">Cart</Link>

      <div className="cards-container">
        {product.map((el: any) => (
         
            <div className="single-card-container">
             
              
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
              <Link to={`/pdp/${el.id}`} style={{textDecoration: 'none'}}>
              <div className="card-title">
                <p>{el.name}</p>
              </div>
              </Link>
              <div className="card-body-text">
                <p>{el.price}€</p>
              </div>
               
            </div>
          
        ))}
      </div>
    </>
  );
};

export default Plp;
