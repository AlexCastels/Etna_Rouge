import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useEffect, useState } from "react";
import { addToCart, toggleCart } from "../../redux/slices/cartSlice";
import { FormattedMessage } from "react-intl";
import Cart from "../cart/Cart";
import NavBarTop from "../navbar/NavbarTop";
import { Carousel } from "../carousel/Carousel";
// import { useHistory } from "react-router-dom";
import "./Pdp.scss"


const Pdp: React.FC<any> = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const product = useAppSelector((state) => state.product.products);
    const element = product.find((el: any) => el.id == id);
    const navigate = useNavigate()
    // const history = useHistory()

    //logica go back
    // const location = useLocation()
    // const gender = location.state?.gender;
    // const category = location.state?.category;
    // console.log(gender , category);
    
    //carosello dinamico
    const [numItems, setNumItems] = useState(5);

    //handleSize
    const [elementSize , setElementSize] = useState<any | null>(null)

    //usato per aggiungere size in element
    function handleSize(e:any) {
        const elementSize = { 
            ...element ,
            size : e.target.value
        } 
        setElementSize(elementSize)   
    }

    //per pushare nello slice il nuovo obj con la size
    function handleBtn(){
        if('size' in elementSize){
            dispatch(addToCart(elementSize))
            dispatch(toggleCart());          
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

    //funzione go back
    function handleBack(){
        navigate(-1)
    }

    return (
        <>
            <Cart/>
            <NavBarTop/>
            <div className="pdp-wrapper">
                <div onClick={handleBack} className="pdp-icon-back">
                    <img src="\public\assets\back.png" alt="arrow back" />
                    <p>Go back</p>
                </div>
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
                        <div className="pdp-color-container">
                            <div className="div1"></div>
                            <div className="div2"></div>
                            <div className="div3"></div>
                        </div>
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
                    <div className="pdp-btn-cart">
                        <button className="btn-cart-component" onClick={handleBtn}>
                            <FormattedMessage id="pdp.addToCart" defaultMessage="Add to Cart"/>
                        </button>
                        {!elementSize && <p>Selezionare una taglia per favore</p>}
                    </div>
                </div>
            </div>
            <Carousel items={product} numItems={numItems} />
        </>
    );
};
export default Pdp;
