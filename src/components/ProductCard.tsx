import { Card } from "../interfaces"; 
import "../style.scss"

export const ProductCard: React.FC<{product: Card}> = ({product}) => {
    return (
        <div className="single-card-container">
            <div className="card-title">
                <p>{product.name}</p>
            </div>
            <div className="card-body-container">
                <div className="card-body-img">
                    <img src={product.img}></img>    
                </div>
                <div className="card-foot-btn">
                    <button>ADD TO CART</button>
                </div>    
            </div>
            <div className="card-body-text">
                <p>{product.price}€</p>
            </div>
        </div>
    )
}