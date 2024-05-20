import { addToCart } from "../../redux/slices/cartSlice";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../../redux/slices/productSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import "../plp/plp.scss";

export const Plp: React.FC<any> = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.product.products);
  const location = useLocation()

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
  };

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <>
      <Link to="/Cart">Cart</Link>
      <div className="cards-container">
        {element.slice(0, next).map((el: any) => (
          <div className="single-card-container">
            <div className="card-body-container">
              <Link to={`/pdp/${el.id}`}>
                <div className="card-body-img">
                  <img src={el.img}></img>
                </div>
              </Link>
              <div className="card-foot-btn">
                <button onClick={() => dispatch(addToCart(el))}>ADD TO CART</button>
              </div>
            </div>
            <Link to={`/pdp/${el.id}`} style={{ textDecoration: 'none' }}>
              <div className="card-title">
                <p>{el.name}</p>
              </div>
            </Link>
            <div className="card-body-text">
              <p>{el.price}€</p>
            </div>
          </div>
        ))}
        {next < product.length ? <button className='cards-container-loadmore' onClick={handleMoreImage}>LOAD MORE</button> : <p className="cards-continer-nothingToSee">Nothing to see</p>}
      </div>
    </>
  );
};

export default Plp;
