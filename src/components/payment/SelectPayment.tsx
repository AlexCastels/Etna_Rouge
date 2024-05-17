import { useState } from "react"
import { useNavigate } from "react-router-dom";
import './selectPayment.scss'

export function SelectPayment(){
    const navigate = useNavigate()
    const [spia , setSpia] = useState<string>('')
    const [notSelect , setNotSelect] = useState<boolean>(false)

    function handleRadio(e:React.ChangeEvent<HTMLInputElement>){
        setSpia(e.target.value)
        setNotSelect(false)
    }

    function handleBtn(spia:string){
        if(spia === 'spedizione'){
            console.log(spia);            
            navigate('/ThankYouDelivery')
        }
        if(spia === 'credit-card'){
            console.log(spia);            
            navigate('/CreditCardForm')
        }
        setNotSelect(true)
    }

    function handleSubmint(e:React.FormEvent){
        e.preventDefault()
    }
    
    if(spia){
        console.log(spia);
    }

    return (
        <form onSubmit={handleSubmint} className="selectPayment-container">
            <p className="selectPayment-title">Payment Method</p>
            <div className="select-payform-line"></div>
                <div className="selectForm-general-container">
                    <div className="selectPayform-creditCard-container">
                        <div>
                            <input type="radio" name='selezione' value={'credit-card'} onChange={handleRadio}/>    
                            <label htmlFor="credit-card">Credit Card</label>
                        </div>
                        <img className="selectPayform-img" src="/assets/Credit-Card.png" alt="Pagamenti accettati"></img>     
                    </div>
                    <div className="selectPayform-delivery-container">
                        <div>
                            <input type="radio" name='selezione' value={'spedizione'}  onChange={handleRadio}/>
                            <label htmlFor="spedizione">Cash on Delivery</label>
                        </div>
                        <p>*By choosing payment on delivery, a supplement of €10 will apply to the order total</p>
                    </div>    
                </div>
            {notSelect && <p className="selectPayform-notSelect">Please choose a method</p>}
            <div className="select-payform-line"></div>
            <button onClick={() => handleBtn(spia)}>CHECKOUT</button>
        </form>
    )
}