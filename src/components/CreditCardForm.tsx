import Button from './UI/button/Button';
import './creditCardForm.scss'
import { useState } from "react"
// https://codesandbox.io/p/sandbox/thirsty-heisenberg-fwgtb?file=%2Fsrc%2FCreditCard.js%3A18%2C54
export function CreditCardForm(){

    interface CreditCard{
        creditNumber: number;
        creditName: string;
        creditDate: number;
        cvv: number;
    }

    const [input , setInput] = useState<CreditCard>({
        creditNumber: 0,
        creditName: '',
        creditDate: 0,
        cvv: 0
    })

    function handleInput(e:React.ChangeEvent<HTMLInputElement>){
        // const regex = /^[0-9]{3,4}$/
        const name = e.target.name
        const value = e.target.value
        // if(name === 'cvv'){
        //     handleRegex(e.target.value , regex)
        // } 
        setInput((prev) => {
            return {
                ...prev,
                [name] : value
            }
        })
    }

    // function handleRegex(value:any , regex:RegExp):boolean{
    //     return regex.test(value)
    // } onKeyDown={handleRegex} da mettere in input

    function handleForm(e:React.FormEvent){
        e.preventDefault()
        console.log(input);       
    }

    return (
        <form onSubmit={handleForm} className="creditform-container">
            <div className="creditForm-title">
                <p>Enter Your Payment Credential</p>
            </div>
            <div className='creditForm-input-container'>
                    <div className='creditForm-input-img'>
                        <input className='input-creditCard' required type="text" maxLength={16} placeholder='Credit Number *' name="creditNumber" onChange={handleInput} />
                        <img className="credit-card-img" src='/public/assets/mastercard.png'></img>
                    </div>
                    <input className='input-creditCard' required type="text" name="creditName" placeholder='Credit Name *' onChange={handleInput}/>
                    <div className='creditCard-select'>
                        <input className='input-creditCard' disabled required type="text" maxLength={4} placeholder="Credit Date *" name='creditDate' onChange={handleInput}/>
                        <div>
                            <select name="month" className='creditCard-select-style' required>
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
                            <select name='year'className='creditCard-select-style' required>
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
                <input className='input-creditCard' required type="text" placeholder='CVV *' name='cvv' maxLength={3}  onChange={handleInput} />    
            </div>
            <button>Invio</button>
            {/* controllare come impostare pattern in react */}
        </form>
    )
}