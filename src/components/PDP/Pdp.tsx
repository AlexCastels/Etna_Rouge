import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { useParams } from 'react-router-dom';
<<<<<<< HEAD
import '../PDP/Pdp.scss';
=======
import '../PDP/Pdp.scss'
import { addToCart } from '../../redux/slices/cartSlice';
import { Carousel } from '../Carousel/Carousel';
import Button from '../UI/button/Button';
>>>>>>> develope

const Pdp: React.FC<any> = () => {
    const { id } = useParams()
    const dispatch = useAppDispatch()
    const product = useAppSelector((state) => state.product.products);
    const element = product.find((el: any) => el.id == id)

    //carosello dinamico
    const [numItems, setNumItems] = useState(5);

    useEffect(()=>{
        const handleResize = () => {
            setNumItems(window.innerWidth <= 768 ? 3 : 5)
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[])
    return (
        <>
            <div className="pdp-wrapper">
                <div className="pdp-card">
                    <img className="pdp-img" src={element?.img} alt={element?.name} />
                    <p>{element?.description}</p>
                </div>
                <div className="pdp-info">
                    <div className="pdp-detail-header">
                        <h4 className="pdp-name-product">{element?.name}</h4>
                        <p className="pdp-price">{element?.price}€</p>
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
                        <Button className="btn-cart-component" onClick={() => dispatch(addToCart(element))}>Add to Cart</Button>
                    </div>
                </div>
            </div>
            <Carousel items={product} numItems={numItems} />
        </>
    )
}
export default Pdp