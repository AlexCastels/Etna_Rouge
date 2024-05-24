import { FormattedMessage } from "react-intl";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hook";
import { addFormData } from "../../redux/slices/payformSlice";
import { useDarkMode } from "../darkmode/DarkModeContext";
import Button from "../UI/button/Button";
import './payForm.scss'


interface PayForm {
    name : string;
    surname : string;
    email : string;
    country : string;
    province : string;
    address : string;
    zipcode : number;
    phone : number;
}

export function PayForm(){
    // const total = useAppSelector(state => state.cart.total)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { mode } = useDarkMode();
    const [input , setInput] = useState<PayForm>({
        name : '',
        surname : '',
        email : '',
        country : '',
        province : '',
        address : '',
        zipcode : 0,
        phone : 0
    })

    function handleInput(e:React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>){
        const value = e.currentTarget.value
        const name = e.currentTarget.name
        setInput((prev) => {
            return {
                ...prev,
                [name] : value
            }
        })
    }

    function handleForm(e:React.FormEvent){
        e.preventDefault()
        console.log(input);       
    }

    function handleBtn(){
        if(input.name && input.surname && input.email && input.phone && input.address && input.province && input.zipcode && input.country){
            navigate('/SelectPayment')
            console.log(input);
            dispatch(addFormData(input))            
        }        
    }

    return (
        <form className={`payform-container ${mode}`} onSubmit={handleForm}>
            <div>
                <h2 className={`payform-title ${mode}`} ><FormattedMessage id="payForm.title" defaultMessage="Insert your data" /></h2>
            </div>
            <div className="payform-top">
                <input className='input-payform' required placeholder='Name *' name='name' type="text" onChange={handleInput}/>
                <input className='input-payform' required placeholder='Surname *' name= 'surname' type="text" onChange={handleInput}/>
                <input className='input-payform' required placeholder='E-mail *' name='email' type="email" onChange={handleInput}/>    
            </div>
            <div className="payform-bottom">
                <input className='input-payform' required placeholder='Phone Number *' name='phone' type="text" onChange={handleInput}/>
                <input className='input-payform' required placeholder='Address *' name='address' type="text" onChange={handleInput}/>
                <input className='input-payform' required placeholder='Province *' name='province' type="text" maxLength={2} onChange={handleInput}/>
                <input className='input-payform' required placeholder='Zip Code *' name='zipcode' type="text" onChange={handleInput}/>
                <select className="input-payform" name='country' onChange={handleInput}>
                    <option value=""><FormattedMessage id="payForm.country" defaultMessage="Select your country" /> </option>
                    <option value="IT"><FormattedMessage id="payForm.Italy" defaultMessage="Select your country" /> </option>
                    <option value="FR"><FormattedMessage id="payForm.France" defaultMessage="Select your country" /> </option>
                    <option value="SP"><FormattedMessage id="payForm.Spain" defaultMessage="Select your country" /> </option>
                    <option value="DE"><FormattedMessage id="payForm.Germany" defaultMessage="Select your country" /> </option>
                </select>
            </div>
            <div className={`payform-message ${mode}`}>
                <p><FormattedMessage id="payForm.supplement" defaultMessage="*Payment on delivery have supplement of €10 to the order total" /></p>
            </div>
            <button className="payform-btn" onClick={handleBtn}>
                <FormattedMessage id="payForm.button.pay" defaultMessage="Go to pay"/>
            </button>
            {/* {input.name && input.surname && input.email && input.phone && input.address && input.province && input.zipcode && input.country ? <p>Compilare campi richiesti</p> : null} */}
        </form>
    )
}