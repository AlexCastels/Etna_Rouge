
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { addToCart, toggleCart } from '../../redux/slices/cartSlice';
import { Carousel } from '../carousel/Carousel';
import Cart from '../cart/Cart';
import './Pdp.scss'

const Pdp: React.FC<any> = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const product = useAppSelector((state) => state.product.products);
    const element = product.find((el: any) => el.id == id);

    //carosello dinamico
    const [numItems, setNumItems] = useState(5);

    //handleSize
    const [elementSize , setElementSize] = useState<any | null>(null)

    //usato per aggiungere size in element
    function handleSize(e:any) {
        // console.log(e.target.value);
        const elementSize = { 
            ...element ,
            size : e.target.value
        }
        // return elementSize 
        setElementSize(elementSize)   
    }

    //per pushare nello slice il nuovo obj con la size
    function handleBtn(){
        if('size' in elementSize){
            dispatch(addToCart(elementSize))
            dispatch(toggleCart());
            // console.log('condizione ok');
            // console.log(elementSize);           
        }
    }

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

            <div className="pdp-wrapper">
                <div className="pdp-card">
                    <img
                        className="pdp-img"
                        src={element?.img}
                        alt={element?.name}
                    />
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
                            <FormattedMessage
                                id="pdp.color"
                                defaultMessage="Color ###"
                            />
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
                            <button onClick={handleSize} value='XS'>XS</button>
                            <button onClick={handleSize} value='S'>S</button>
                            <button onClick={handleSize} value='M'>M</button>
                            <button onClick={handleSize} value='L'>L</button>
                            <button onClick={handleSize} value='XL'>XL</button>
                        </div>
                    </div>
                    {!elementSize && <p>Selezionare una taglia per favore</p>}
                    <div className="pdp-btn-cart">
                        <button className="btn-cart-component" onClick={handleBtn}>
                            <FormattedMessage id="pdp.addToCart" defaultMessage="Add to Cart"/>
                        </button>
                    </div>
                </div>
            </div>
            <Carousel items={product} numItems={numItems} />
        </>
    );
};
export default Pdp;
