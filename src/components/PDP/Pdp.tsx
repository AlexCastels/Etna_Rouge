import React from 'react'
import { useAppSelector } from '../../redux/hook';
import { useParams } from 'react-router-dom';
import '../PDP/Pdp.scss';

const Pdp : React.FC<any>  = () => {
    const {id} = useParams()
      const product = useAppSelector((state) => state.product.products);
    const element = product.find((el : any) => el.id == id )
  
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
                        <p className="pdp-price">{element?.price}</p>
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
                        <button>Add to cart</button>
                    </div>
                </div>
            </div>
   
   
            {/* <Carousel items={product}/> */}
   </>
  )
}

export default Pdp