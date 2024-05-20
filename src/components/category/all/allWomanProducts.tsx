import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { addToCart } from "../../../redux/slices/cartSlice";
import Button from "../../UI/button/Button";
import { Link, useParams } from "react-router-dom";

const AllWomanProducts:any = () => {
    const dispatch = useAppDispatch();
    const { gender } = useParams();
    const product = useAppSelector((state) => state.product.products);
    const element = product.find((el: any) => el.gender == gender)
    return (
        <>
            <Link to="/Cart">Cart</Link>
            <div className="cards-container">
                {product.map((el: any) => (
                    <div className="single-card-container">
                        <div className="card-body-container">
                            <Link to={`/pdp/${el.id}`}>
                                <div className="card-body-img">
                                    <img src={el.img}></img>
                                </div>
                            </Link>
                            <div className="card-foot-btn">
                                <Button className="btn-cart-component" onClick={() => dispatch(addToCart(element))}>Add to Cart</Button>
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
            </div>
        </>
    )
}

export default AllWomanProducts;