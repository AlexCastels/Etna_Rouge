import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { decrement, increment, remove } from "../../redux/slices/cartSlice";
import '../plp/plp.scss'

const Cart = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);
  const total = useAppSelector((state) => state.cart.total);

  return (
    <>
      {total}
      <Link to="/">Products</Link>
    <div className="cards-container">
      {cart.map((el) => (
        <div key={el.id} className="single-card-container">
          <div className="card-title">
            <p>{el.name}</p>
          </div>
          <div className="card-body-container">
            <div className="card-body-img">
              <img src={el.img}></img>
            </div>
            <div className="card-foot-btn">
              <button onClick={() => dispatch(decrement(el))}>-</button>
              <button onClick={() => dispatch(remove(el))}>Remove</button>
              <button onClick={() => dispatch(increment(el))}>+</button>
            </div>
          </div>
          <div className="card-body-text">
            <p>{el.price}€</p>
            <p>Quantity: {el.quantity}</p>
          </div>
        </div>
      ))}
    </div>
      
    </>
  );
};

export default Cart;
