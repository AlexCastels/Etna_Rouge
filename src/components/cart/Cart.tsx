import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { decrement, increment, remove } from "../../redux/slices/cartSlice";
import "../plp/plp.scss";

const Cart = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);
  const total = useAppSelector((state) => state.cart.total);
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);
  return (
    <>
      Total price: {total}
      Quantity: {totalQuantity}
      <Link to="/plp">Products</Link>
      <div className="cards-container">
        {cart.map((el) => (
          <div className="card-container">
            <Link to={`/pdp/${el.id}`}>
              <div className="card-img">
                <img src={el.img} alt="" />
              </div>
            </Link>

            <div className="card-button">
              <button onClick={() => dispatch(decrement(el))}>-</button> 
              <button onClick={() => dispatch(remove(el))}>Remove</button>
              <button onClick={() => dispatch(increment(el))}>+</button>
            </div>
            <Link to={`/pdp/${el.id}`} style={{textDecoration:'none',color: 'black'}}>
              <div className="card-name">{el.name}</div>
            </Link>

            <div className="card-price">{el.price}</div>
            <div>
                <p>Quantity:{el.quantity}</p>
                <p> Price:{Math.round(el.quantity * el.price)}</p>
            </div>
          
           
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
