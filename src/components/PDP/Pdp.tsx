import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { addToCart, toggleCart } from '../../redux/slices/cartSlice';
import { Carousel } from '../carousel/Carousel.tsx';
import Button from '../UI/button/Button';
import Cart from '../cart/Cart';

import '../pdp/Pdp.scss'
import NavBarTop from '../navbar/NavbarTop.tsx';
import { ButtonComponent } from '../atomic/ButtonComponent';

const Pdp: React.FC<any> = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.product.products);
  const element = product.find((el: any) => el.id == id);

  const handleAddToCart = (element: any) => {
    dispatch(addToCart(element));
    dispatch(toggleCart());
  };
  //carosello dinamico
  const [numItems, setNumItems] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      setNumItems(window.innerWidth <= 768 ? 3 : 5);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Cart/>
       <NavBarTop/> 
      <div className="pdp-wrapper">
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
          </div>
          <div className="pdp-container-size">
            <p className="pdp-size">
              <FormattedMessage
                id="pdp.selectSize"
                defaultMessage="Select your size"
              />
            </p>
            <div className="pdp-btn">
              <button>XS</button>
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
            </div>
          </div>
          <div className="pdp-btn-cart">
            <ButtonComponent
              className="btn-cart-component"
              onClick={() => handleAddToCart(element)}
              text="ADD TO CART"
            >
            </ButtonComponent>
          </div>
        </div>
      </div>
      <Carousel items={product} numItems={numItems} />
    </>
  );
};
export default Pdp;
