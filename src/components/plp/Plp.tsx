import { addToCart } from "../../redux/slices/cartSlice";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../../redux/slices/productSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { FormattedMessage } from "react-intl";
import { useDarkMode } from "../darkmode/DarkModeContext";

export const Plp: React.FC<any> = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.product.products);
  const location = useLocation()
  const { mode } = useDarkMode();

  const gender = location.state?.gender
  const category = location.state?.category

  console.log(gender , category);
  
  const element = product.filter((el: any) => {
    if (gender == 'men' && category == 'shirt') {
      return el.gender === gender && el.category === category;
    }
    if(gender == 'men' && category == 'pants') {
      return el.gender === gender && el.category === category;
    }
    if (gender == 'men' && category == 'shoes') {
      return el.gender === gender && el.category === category;
    }
    if (gender == 'woman' && category == 'shirt') {
      return el.gender === gender && el.category === category;
    }
    if (gender == 'woman' && category == 'pants') {
      return el.gender === gender && el.category === category;
    }
    if (gender == 'woman' && category == 'shoes') {
      return el.gender === gender && el.category === category;
    }
    if (gender === 'men') {
      return el.gender === gender;
    }
    if (gender === 'woman'){
      return el.gender === gender;
    }
  })
  
  //funzione load more
  const imagePerRow = 8
  const [next, setNext] = useState(imagePerRow);
  function handleMoreImage() {
    setNext(next + imagePerRow);
  }

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <>
      <Link to="/Cart">
        <FormattedMessage id="plp.link.cart" defaultMessage="Cart" /> 
      </Link>

      <div className={`cards-container ${mode}`}>
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
                  <FormattedMessage
                    id="plp.button.addToCart"
                    defaultMessage="ADD TO CART"
                  />
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
          </div>
        ))}
        {next < product.length ? <button className='cards-container-loadmore' onClick={handleMoreImage}>
          <FormattedMessage id="plp.loadMore" defaultMessage='LOAD MORE' />
        </button> : <p className="cards-continer-nothingToSee"><FormattedMessage id="plp.nothingToSee" defaultMessage=' Nothing to see' /> </p>}
      </div>
    </>
  );
};

export default Plp;
