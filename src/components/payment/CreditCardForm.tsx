import "./creditCardForm.scss"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import Paypal from "./Paypal";

export function CreditCardForm(){
    
    interface CreditDate {
        month : number ,
        year : number,
    }
    interface CreditCard{
        creditName: string | null;
        creditNumber: string | null;
        creditDate: CreditDate;
        cvv: number | null;
    }
    
    const navigate = useNavigate()
    const [creditName , setCreditName] = useState<string | null>('')
    const [creditNumber , setCreditNumber] = useState<string | null>('')
    const [creditDate , setCreditDate] = useState<CreditDate>({
        month : 0,
        year : 0,
    })
    const [cvv , setCvv] = useState<number | null>(null)

    const creditObj:CreditCard = {
        creditName : creditName,
        creditNumber : creditNumber,
        creditDate : creditDate,
        cvv : cvv
    }

    function handleCreditName(e:React.FormEvent<HTMLInputElement>){
        setCreditName(e.currentTarget.value)
    }

    function handleCreditNumber(e:React.ChangeEvent<HTMLInputElement>){
        //rimuove eventuali spazi digitati
        const inputVal = e.target.value.replace(/ /g, "");
        //recupera solo caratteri digitati
        let inputNumbersOnly = inputVal.replace(/\D/g, ""); 
        if (inputNumbersOnly.length > 16) {
            //utilizzo substr per poter prendere solamente i primi 16 caratteri digitati
            //nel caso in cui ci fossero più di 16 caratteri digitati
            inputNumbersOnly = inputNumbersOnly.substr(0, 16);
        }
        //con slip viene creato un 'array' composto da soli 4 caratteri
        const splits = inputNumbersOnly.match(/.{1,4}/g);
        let spacedNumber = "";
        if (splits) {
            //con join uniamo i 4 arr unendoli con un -
            spacedNumber = splits.join("-"); 
        }
        setCreditNumber(spacedNumber);
    }

    function handleCreditDate(e:React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>){
        const value = e.currentTarget.value
        const name = e.currentTarget.name
        setCreditDate((prev) => {
            return {
                ...prev,
                [name] : value
            }
        })
    }

    function handleCvv(e:React.ChangeEvent<HTMLInputElement>){
        const value = e.target.value.length        
        if(value <= 3){
            setCvv(Number(e.target.value))
        }
    }

    function handleBtn(){
        console.log(creditObj);
        navigate('path componente')
    }

    function handleForm(e:React.FormEvent){
        e.preventDefault()      
    }

    return (
        <form onSubmit={handleForm} className="creditform-container">
            <div className="creditForm-title">
                <p>Enter Your Payment Credential</p>
            </div>
            <div className='creditForm-input-container'>
                <img src="/assets/CreditFake.png" width={250} alt="Credi-fake-card" />
                    <div className='creditForm-input-img'>
                        <input className='input-creditCard' required type="text" placeholder='Credit Number *' name="creditNumber" value={creditNumber} onChange={handleCreditNumber} />
                        <img className="credit-card-img" src='/assets/mastercard.png'></img>
                    </div>
                    <input className='input-creditCard' required type="text" name="creditName" placeholder='Credit Name *' onChange={handleCreditName}/>
                    <div className='creditCard-select'>
                        <input className='input-creditCard' disabled required type="text" maxLength={4} placeholder="Credit Date *" name='creditDate'/>
                        <div>
                            <select name="month" onChange={handleCreditDate} className='creditCard-select-style' required>
                                <option value="MM">MM</option>
                                <option value="gen">01</option>
                                <option value="feb">02</option>
                                <option value="mar">03</option>
                                <option value="apr">04</option>
                                <option value="mag">05</option>
                                <option value="giu">06</option>
                                <option value="lug">07</option>
                                <option value="ago">08</option>
                                <option value="set">09</option>
                                <option value="ott">10</option>
                                <option value="nov">11</option>
                                <option value="dic">12</option>
                            </select>
                            <select name='year'className='creditCard-select-style' onChange={handleCreditDate} required>
                                <option value="YY">YY</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>    
                        </div>
                    </div>
                <input className='input-creditCard' required type="number" placeholder='CVV *' name='cvv' value={cvv} onChange={handleCvv} />    
            </div>
            <button className="creditForm-btn" disabled={!creditDate || !creditName || !cvv || !creditNumber} onClick={handleBtn}>CHECKOUT</button>
            <p>Or</p>
            <div className="paypal-comp">
                <Paypal/>
            </div>
        </form>
    )
}