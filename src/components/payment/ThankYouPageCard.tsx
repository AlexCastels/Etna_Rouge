import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../redux/hook"
import "./thankYouPage.scss"
import { removeFormData } from "../../redux/slices/payformSlice";
import { clearCart } from "../../redux/slices/cartSlice";

export function ThankYouPageCard(){
    const total = useAppSelector((state) => state.cart.total)
    const formData = useAppSelector(state => state.payformData)
    const dispatch = useAppDispatch()
    console.log(formData);
    // const location = useLocation()
    // let deliveryTotal = 0
    // if(location){
    //     deliveryTotal = location.state.total
    // }
    // console.log(deliveryTotal);
    
    // const [deliveryTotal , setDeliverytotal] = useState(10)
    // if(location.state.total){
    //     setDeliverytotal((p) => p + location.state.total)
    // }
    
    const navigate = useNavigate()
    function handleBtn(){
        navigate('/')
        dispatch(removeFormData())
        dispatch(clearCart())
    }

    return (
        <div className="thankyou-container">
            <div className="thankyou-line"></div>
            <h2>Thank you!</h2>
            <p>Gentile {formData.name}, grazie per l'acquisto. Non appena l'ordine sarà spedito, ti invieremo un e-mail all'indirizzo <span className="spanForm">{formData.email}</span> con le informazioni di tracciamento.</p>
            <p>Your order: {total} €</p>
            <div className="thankyou-line"></div>
            <button className='thankyou-btn' onClick={handleBtn}>HOME</button>
        </div>
    )
}