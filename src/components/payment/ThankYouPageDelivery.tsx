import { useLocation, useNavigate } from "react-router-dom"
import { useAppSelector } from "../../redux/hook"
import "./thankYouPage.scss"
import { useState } from "react";

export function ThankYouPageDelivery(){

    
    const total = useAppSelector((state) => state.cart.total)
    // const location = useLocation()
    // let deliveryTotal = location.state.total
    // if(location){
    //     deliveryTotal = 
    // }
    // console.log(deliveryTotal);
    
    
    // const [deliveryTotal , setDeliverytotal] = useState(10)
    // if(location.state.total){
    //     setDeliverytotal((p) => p + location.state.total)
    // }
    
    const navigate = useNavigate()
    function handleBtn(){
        
        navigate('/')
    }


    return (
        <div className="thankyou-container">
            <div className="thankyou-line"></div>
            <h2>Thank you!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quia facere maiores quod voluptas optio, dolores rem eveniet magni necessitatibus qui in doloremque, id porro debitis molestias. Adipisci, eaque quibusdam.</p>
            <p>Your order: {total + 10} €</p>
            <div className="thankyou-line"></div>
            <button className='thankyou-btn' onClick={handleBtn}>HOME</button>
        </div>
    )
}