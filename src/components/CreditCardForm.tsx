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
        const name = e.target.name
        const value = e.target.value
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
        <form onSubmit={handleForm}>
            <div className="credit-card-img">

            </div>
            <label htmlFor="credit-number">Credit Card</label>
            <input type="number" name="creditNumber" onChange={handleInput} />

            <label htmlFor="credit-name">Credit Name</label>
            <input type="text" name="creditName" onChange={handleInput}/>

            <label htmlFor="credit-date">Credit Date</label>
            <input type="number" name='creditDate' pattern='\d\d/\d\d' onChange={handleInput}/>

            <label htmlFor="cvv">CVV</label>
            <input type="number" name='cvv' pattern="[0-9]{3}" onChange={handleInput}/>

            <button>Invio</button>

            {/* controllare come impostare pattern in react */}
        </form>
    )
}