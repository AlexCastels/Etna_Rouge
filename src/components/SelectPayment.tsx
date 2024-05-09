import { useState } from "react"
import { useNavigate } from "react-router-dom";
import './selectPayment.scss'

export function SelectPayment(){
    const navigate = useNavigate()
    const [spia , setSpia] = useState<string>('')

    function handleRadio(e:React.ChangeEvent<HTMLInputElement>){
        setSpia(e.target.value)
    }

    function handleBtn(spia:string){
        if(spia === 'spedizione'){
            console.log(spia);
            
            navigate('/DeliveryForm')
        }
        if(spia === 'credit-card'){
            console.log(spia);
            
            navigate('/path del componente')
        }
    }

    // function handleSubmint(e:React.FormEvent){
    //     e.preventDefault()
    // }
    
    if(spia){
        console.log(spia);
    }

    return (
        <form className="selectPayment-container">
            <h2 className="selectPayment-title">Payment Method</h2>
            <div className="select-payform-line"></div>
                <div className="selectPayform-creditCard-container">
                    <div>
                        <input type="radio" name='selezione' value={'credit-card'} onChange={handleRadio}/>    
                        <label htmlFor="credit-card">Credit Card</label>
                    </div>
                    <img className="selectPayform-img" src="/public/assets/Credit-Card.png" alt="Pagamenti accettati"></img>     
                </div>
                <div className="selectPayform-delivery-container">
                    <div>
                        <input type="radio" name='selezione' value={'spedizione'}  onChange={handleRadio}/>
                        <label htmlFor="spedizione">Cash on Delivery</label>
                    </div>
                    <p>*By choosing payment on delivery, a supplement of €10 will apply to the order total</p>
                </div>
            <div className="select-payform-line"></div>
            <button onClick={() => handleBtn(spia)}>CHECKOUT</button>
            {/* {spia === 'spedizione' ? <PayForm/> : <p>Selezionare un metodo</p>} */}
        </form>
    )
}