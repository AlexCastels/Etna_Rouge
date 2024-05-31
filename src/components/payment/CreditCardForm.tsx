import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import Paypal from "./Paypal";
import { useDarkMode } from "../darkmode/DarkmodeContext";
import "./creditCardForm.scss";

export function CreditCardForm() {
    interface CreditDate {
        month: number;
        year: number;
    }
    interface CreditCard {
        creditName: string | null;
        creditNumber: string | null;
        creditDate: CreditDate;
        cvv: number | null;
    }

    const navigate = useNavigate();
    const { mode } = useDarkMode();
    const [creditName, setCreditName] = useState<string | null>("");
    const [creditNumber, setCreditNumber] = useState<string | null>("");
    const [creditDate, setCreditDate] = useState<CreditDate>({
        month: 0,
        year: 0,
    });
    const [cvv, setCvv] = useState<number | null>(null);

    const creditObj: CreditCard = {
        creditName: creditName,
        creditNumber: creditNumber,
        creditDate: creditDate,
        cvv: cvv,
    };

    //gestione nome
    function handleCreditName(e: React.FormEvent<HTMLInputElement>) {
        setCreditName(e.currentTarget.value);
    }
    
    //gestione di CreditNumber
    function formatterCreditCard (input: string): string{
        //Rimuovo eventuali spazi e caratteri non numerici
        const sanitizedInput = input.replace(/\D/g, "").slice(0, 16);
        //Divide i caratteri in gruppi di 4 e li unisce con un trattino
        //l'operatore || è utilizzato per evitare che la funzione ritorni null
        return sanitizedInput.match(/.{1,4}/g)?.join("-") || "";
    }
    
    function handleCreditNumber(e: React.ChangeEvent<HTMLInputElement>) {
        const formattedNumber = formatterCreditCard(e.target.value)
        setCreditNumber(formattedNumber)
    }

    //gestione della data
    function handleCreditDate(e:React.FormEvent<HTMLInputElement>| React.ChangeEvent<HTMLSelectElement>){
        const value = e.currentTarget.value;
        const name = e.currentTarget.name;
        setCreditDate((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    }

    //gestione del CVV
    function handleCvv(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value.length;
        if (value <= 3) {
            setCvv(Number(e.target.value));
        }
    }

    function handleBtn() {
        console.log(creditObj);
        navigate("/thankYouCard");
    }

    function handleForm(e: React.FormEvent) {
        // console.log(creditObj);
    }

    return (
        <form onSubmit={handleForm} className={`creditform-container ${mode}`}>
            <div className="creditForm-title">
                <p>
                    <FormattedMessage
                        id="creditPayment.title"
                        defaultMessage="Enter Your Payment Credential"
                    />
                </p>
            </div>
            <div className="creditForm-input-container">
                <img
                    src="/assets/CreditFake.png"
                    width={250}
                    alt="Credi-fake-card"
                />
                <div className="creditForm-input-img">
                    <input
                        className={`input-creditCard ${mode}`}
                        required
                        type="text"
                        placeholder="Credit Number *"
                        name="creditNumber"
                        value={creditNumber}
                        onChange={handleCreditNumber}
                    />
                    <img
                        className="credit-card-img"
                        src="/assets/mastercard.png"
                    ></img>
                </div>
                <input
                    className={`input-creditCard ${mode}`}
                    required
                    type="text"
                    name="creditName"
                    placeholder="Credit Name *"
                    onChange={handleCreditName}
                />
                <div className="creditCard-select">
                    <input
                        className={`input-creditCard ${mode}`}
                        disabled
                        required
                        type="text"
                        placeholder="Expiration Date*"
                        name="creditDate"
                    />
                    <div>
                        <select
                            name="month"
                            onChange={handleCreditDate}
                            className={`creditCard-select-style ${mode}`}
                            required
                        >
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
                        <select
                            name="year"
                            className={`creditCard-select-style ${mode}`}
                            onChange={handleCreditDate}
                            required
                        >
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
                <input
                    className={`input-creditCard ${mode}`}
                    required
                    type="number"
                    placeholder="CVV *"
                    name="cvv"
                    value={cvv}
                    onChange={handleCvv}
                />
            </div>
            <button className={`creditForm-btn ${mode}`} disabled={!creditDate || !creditName || !cvv || !creditNumber} onClick={handleBtn}>
                <FormattedMessage id="creditPayment.checkout" defaultMessage="Checkout"/>
            </button>
            <p>
                <FormattedMessage id="creditPayment.or" defaultMessage="or" />
            </p>
            <div className="paypal-comp">
                <Paypal />
            </div>
        </form>
    );
}
