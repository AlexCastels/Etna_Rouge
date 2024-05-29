import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useEffect, useState } from "react";
import { addToCart, toggleCart } from "../../redux/slices/cartSlice";
import { FormattedMessage } from "react-intl";
import Cart from "../cart/Cart";
import NavBarTop from "../navbar/NavbarTop";
import { Carousel } from "../carousel/Carousel";
import isValid from "../../utils/validationFunction";
import "./pdp.scss";
import { fetchData } from "../../redux/slices/productSlice";

const Pdp: React.FC<any> = () => {
  const { id } = useParams();

  //Funzione di validazione per controllare se l'id corrisponde ai parametri altrimenti viene mandato in error
  useEffect(() => {
    if (!isValid(id)) {
      navigate("*");
    } else {
      return console.log(id + "valid");
    }
  }, [id]);

  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.product.products);
  const element = product.find((el: any) => el.id == id);
  const navigate = useNavigate();

  //carosello dinamico
  const [numItems, setNumItems] = useState(5);

  //handleSize
  const [elementSize, setElementSize] = useState<any | null>("");

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  //usato per aggiungere size in element
  function handleSize(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const elementSize = {
      ...element,
      size: e.currentTarget.value,
    };
    setElementSize(elementSize);
  }

  //per pushare tramite 'Add to cart' nello slice il nuovo obj con la size
  function handleBtn() {
    if ("size" in elementSize) {
      dispatch(addToCart(elementSize));
      dispatch(toggleCart());
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setNumItems(
        window.innerWidth <= 480 ? 1 : window.innerWidth <= 768 ? 3 : 5
      );
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //funzione go back
  function handleBack() {
    navigate(-1);
  }

  return (
    <>
      <Cart />
      <NavBarTop />
      <div className="pdp-wrapper">
        <div onClick={handleBack} className="pdp-icon-back">
          <img src="\public\assets\back.png" alt="arrow back" />
          <p>
            <FormattedMessage id="pdp.goBack" defaultMessage="Go Back" />
          </p>
        </div>
        <div className="pdp-card">
          <img className="pdp-img" src={element?.img} alt={element?.name} />
          <p>{element?.description}</p>
        </div>
        <div className="pdp-info">
          <div className="pdp-detail-header">
            <h4 className="pdp-name-product">{element?.name}</h4>
            <p className="pdp-price">
              <FormattedMessage
                id="pdp.price"
                defaultMessage="{price}€"
                values={{ price: element?.price }}
              />
            </p>
            <p className="pdp-color">
              <FormattedMessage id="pdp.color" defaultMessage="Color ###" />
            </p>
            <div className="pdp-color-container">
              <div className="div1"></div>
              <div className="div2"></div>
              <div className="div3"></div>
            </div>
          </div>
          <div className="pdp-container-size">
            <div className="pdp-btn">
              {element?.category === "shoes" && element?.gender === "woman" && (
                <button onClick={handleSize} value="36">
                  36
                </button>
              )}
              {element?.category === "shoes" ? (
                <>
                  <button onClick={handleSize} value="37">
                    37
                  </button>
                  <button onClick={handleSize} value="38">
                    38
                  </button>
                  <button onClick={handleSize} value="39">
                    39
                  </button>
                  <button onClick={handleSize} value="40">
                    40
                  </button>
                </>
              ) : (
                <>
                  <button onClick={handleSize} value="XS">
                    XS
                  </button>
                  <button onClick={handleSize} value="S">
                    S
                  </button>
                  <button onClick={handleSize} value="M">
                    M
                  </button>
                  <button onClick={handleSize} value="L">
                    L
                  </button>
                  <button onClick={handleSize} value="XL">
                    XL
                  </button>
                </>
              )}
              {element?.category === "shoes" && element?.gender === "men" && (
                <>
                  <button onClick={handleSize} value="41">
                    41
                  </button>
                  <button onClick={handleSize} value="42">
                    42
                  </button>
                  <button onClick={handleSize} value="43">
                    43
                  </button>
                  <button onClick={handleSize} value="44">
                    44
                  </button>
                  <button onClick={handleSize} value="45">
                    45
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="pdp-btn-cart">
            <button className="btn-cart-component" onClick={handleBtn}>
              <FormattedMessage
                id="pdp.addToCart"
                defaultMessage="Add to Cart"
              />
            </button>
            {!elementSize && (
              <p className="pdp-btn-size">
                <FormattedMessage
                  id="pdp.selectSize"
                  defaultMessage="Please, select your size"
                />{" "}
              </p>
            )}
          </div>
        </div>
      </div>
      <Carousel items={product} numItems={numItems} />
    </>
  );
};
export default Pdp;
