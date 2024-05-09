import "../style.scss";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { useEffect } from "react";
import { fetchData } from "../redux/slices/productSlice";
import { addToCart } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

export const ProductCard = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <>
      <Link to="/Cart">Cart</Link>
      {product.map((el) => (
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
    </>
  );
};

export default ProductCard;
