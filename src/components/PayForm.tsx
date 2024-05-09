import { useState } from "react"
import '../components/payForm.scss'

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

    return (
        <form className='payform-container' onSubmit={handleForm}>
            <div>
                <h2>Inserisci Dati</h2>
            </div>
            <div className="payform-top">
                <input className='input-payform' required placeholder='Name *' name='name' type="text" onChange={handleInput}/>
                <input className='input-payform' required placeholder='Surname *' name= 'surname' type="text" onChange={handleInput}/>
                <input className='input-payform' required placeholder='E-mail *' name='email' type="email" onChange={handleInput}/>    
            </div>
            <div className="payform-bottom">
                <input className='input-payform' required placeholder='Phone Number *' name='phone' type="number" onChange={handleInput}/>
                <input className='input-payform' required placeholder='Address *' name='address' type="text" onChange={handleInput}/>
                <input className='input-payform' required placeholder='Province *' name='province' type="text" onChange={handleInput}/>
                <input className='input-payform' required placeholder='Zip Code *' name='zipcode' type="number" onChange={handleInput}/>
                <select className="input-payform" name='country' onChange={handleInput}>
                    <option value="">Select Country * </option>
                    <option value="IT">Italian</option>
                    <option value="FR">French</option>
                    <option value="SP">Spanish</option>
                    <option value="DE">German</option>
                </select>
            </div>
            <div className="payform-message">
                <p>*Payment on delivery have supplement of €10 to the order total</p>
            </div>
            <button>SUBMIT</button>
        </form>
    )
}