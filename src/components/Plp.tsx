import "../style.scss";
import { addToCart } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

export const Plp : React.FC <any> = ({product, dispatch}) => {

  return (
    <>
      <Link to="/Cart">Cart</Link>
      <div className="cards-container">
      {product.map((el : any) => (
        <div key={el.id} className="single-card-container">
          <div className="card-title">
            <p>{el.name}</p>
          </div>
          <div className="card-body-container">
            <div className="card-body-img">
              <img src={el.img}></img>
            </div>
            <div className="card-foot-btn">
              <button onClick={() => dispatch(addToCart(el))}>
                ADD TO CART
              </button>
            </div>
          </div>
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
