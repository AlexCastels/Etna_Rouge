import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { decrement, increment, remove, toggleCart } from "../../redux/slices/cartSlice";
import "../cart/cart.scss";
import { useEffect } from "react";
import Button from "../UI/button/Button";
import { ButtonComponent } from "../atomic/ButtonComponent";
import { FormattedMessage } from "react-intl";
import { useDarkMode } from "../darkmode/DarkModeContext";

const Cart = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);
  const total = useAppSelector((state) => state.cart.total);
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);
  const toggleCartValue = useAppSelector((state) => state.cart.toggleCart);
  const { mode } = useDarkMode();

  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/DeliveryForm");
    dispatch(toggleCart());
  };

  useEffect(() => {
    if (toggleCartValue) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [toggleCartValue]);

  return (
    <div className={`main-cart-container ${mode}`}>
      <div
        className={`overlay ${toggleCartValue ? "show" : "hide"} pointer`}
        onClick={() => dispatch(toggleCart())}
      ></div>
      <div
        className="cart-container"
        style={toggleCartValue ? { right: "0" } : { right: "-500px" }}
      >
        <div className="close">
          <img
            src="/src/assets/close.png"
            onClick={() => dispatch(toggleCart())}
            className="pointer"
            alt="Close"
          />
        </div>
        <div className="list-product">
          {cart.length === 0 ? (
            <div className="message-cart">
              <h2>
                <FormattedMessage id="cart.empty" defaultMessage="The cart is empty" />
              </h2>
            </div>
          ) : (
            cart.map((el) => (
              <div className="cart-body" key={el.id}>
                <div className="container-left">
                  <Link to={`/pdp/${el.id}`}>
                    <div className="cart-img">
                      <img src={el.img} alt={el.name} />
                    </div>
                  </Link>
                  <div className="card-button">
                    <div
                      onClick={() => dispatch(decrement(el))}
                      className="pointer"
                    >
                      -
                    </div>
                    <div>{el.quantity}</div>
                    <div
                      onClick={() => dispatch(increment(el))}
                      className="pointer"
                    >
                      +
                    </div>
                  </div>
                </div>
                <div className="container-right">
                  <div className="container-top">
                    <Link
                      to={`/pdp/${el.id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <div className="card-name">{el.name}</div>
                    </Link>
                  </div>
                  <div className="container-bottom">
                    <p>{Math.round(el.quantity * el.price)} €</p>
                    <div className="remove-button">
                      <Button
                        className="remove"
                        onClick={() => dispatch(remove(el))}
                      >
                        <FormattedMessage id="cart.remove" defaultMessage="Remove" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="totals" style={totalQuantity === 0 ? { display: 'none' } : { display: 'flex' }}>
          <div className="total">
            <div>TOTAL</div> € {total}
          </div>
          <div className="quantity">
            <div><FormattedMessage id="cart.quantity" defaultMessage="Quantity" /></div> {totalQuantity}
          </div>
          <ButtonComponent text="Checkout" onClick={handleCheckout} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
