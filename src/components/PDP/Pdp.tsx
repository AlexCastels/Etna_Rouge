
import React from "react";
import { Products } from "../../interfaces";
import { Carousel } from "../carousel/Carousel";
import useFetch from "../Hooks/useFetch";
import { addToCart } from "../../redux/slices/cartSlice";
import { useAppDispatch } from "../../redux/hook";

//Doppia destrutturazione
export const Pdp: React.FC<Products> = ({ name, price, img, description }) => {
// const  { name, img, price, description} = obj
const [data] = useFetch("http://localhost:3000/products")
const dispatch = useAppDispatch();
const item = data.map((item)=> item.img )

    return (
        <>
            <div className="pdp-wrapper">
                <div className="pdp-card">
                    <img className="pdp-img" src={img} alt={name} />
                    <p>{description}</p>
                </div>
                <div className="pdp-info">
                    <div className="pdp-detail-header">
                        <h4 className="pdp-name-product">{name}</h4>
                        <p className="pdp-price">{price}</p>
                        <p className="pdp-color">Color ###</p>
                    </div>
                    <div className="pdp-container-size">
                        <p className="pdp-size">Select your size</p>
                        <div className="pdp-btn">
                            <button>XS</button>
                            <button>S</button>
                            <button>M</button>
                            <button>L</button>
                            <button>XL</button>
                        </div>
                    </div>
                    <div className="pdp-btn-cart">
                        <button onClick={() => dispatch(addToCart(el))}>Add to cart</button>
                    </div>
                </div>
            </div>
            <Carousel items={item}/>
        </>

    )
}