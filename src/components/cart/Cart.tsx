import {useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useEffect } from "react";
import { decrement,increment,remove,toggleCart,} from "../../redux/slices/cartSlice";
import Button from "../UI/button/Button";
import { ButtonComponent } from "../atomic/ButtonComponent";
import { FormattedMessage } from "react-intl";
import "../cart/cart.scss";



const Cart = () => {

  //Richiamo valori dello state da redux
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);
  const totalPricePromo = useAppSelector((state) => state.cart.totalPricePromo);
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);
  const toggleCartValue = useAppSelector((state) => state.cart.toggleCart);
  const activePromo = useAppSelector((state) => state.cart.activePromo);

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/DeliveryForm");
    dispatch(toggleCart());
  };

  //Gestione scrolling body
  useEffect(() => {
    if (toggleCartValue) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [toggleCartValue]);

  return (
    <>
      <div className="main-cart-container">
        <div className={`overlay ${toggleCartValue ? "show" : "hide"} pointer`} onClick={() => dispatch(toggleCart())}></div>
        <div className="cart-container" style={toggleCartValue ? { right: "0" } : { right: "-500px" }}>
          <div className="close">
            <img src="\src\assets\close.png" onClick={() => dispatch(toggleCart())} className="pointer"></img>
          </div>
          <div className="list-product">
            {cart.length === 0 ? (
              <div className="message-cart">
                <p>
                  <FormattedMessage id="cart.empty" defaultMessage="The cart is empty"/>
                </p>
              </div>
            ) : (
              cart.map((el) => (
                <div className="cart-body" key={el.id}>
                  <div className="container-left">
                    <div className="cart-img">
                      <img src={el.img} alt="" />
                    </div>
                    <div className="card-button">
                      <div onClick={() => dispatch(decrement(el))} className="pointer">
                        -
                      </div>
                      <div>
                        {el.quantity}
                      </div>
                      <div onClick={() => dispatch(increment(el),console.log(cart))} className="pointer">
                        +
                      </div>
                    </div>
                  </div>

                  <div className="container-right">
                    <div className="container-top" style={{ textDecoration: "none", color: "black" }}>
                      <div className="card-name">{el.name}</div>
                       <p>€ {el.price * el.quantity}</p>
                      <div>{el.size}</div>
                    </div>
                    <div className="container-bottom">
                      <div className="remove-button">
                        <Button className="remove"onClick={() => dispatch(remove(el))}>
                          <FormattedMessage id="cart.remove"defaultMessage="Remove"/>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="totals" style={totalQuantity === 0 ? { display: "none" } : { display: "flex" }}>
            <div className="promo">
              <div style={activePromo ? { display: "block" } : { display: "none" }}>
                Promo Attiva!
              </div>
              <div style={activePromo ? { display: "block" } && { textDecoration: "line-through" } : { display: "none" }}>
                € {totalPrice}
              </div>
            </div>

            <div className="total">
              <div>
                <FormattedMessage id="cart.price" defaultMessage="Total price:"/>
              </div>
              € {totalPricePromo ? totalPricePromo : totalPrice}
            </div>
            <div className="quantity">
              <div>
                <FormattedMessage id="cart.quantity" defaultMessage="Quantity"/>
              </div>
              {totalQuantity}
            </div>
            <ButtonComponent text="Checkout" onClick={handleCheckout} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
