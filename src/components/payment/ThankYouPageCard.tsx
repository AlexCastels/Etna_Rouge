import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import "./thankYouPage.scss";
import { removeFormData } from "../../redux/slices/payformSlice";

import { FormattedMessage, FormattedNumber } from "react-intl";

import { clearCart } from "../../redux/slices/cartSlice";

export function ThankYouPageCard() {
    const total = useAppSelector((state) => state.cart.total);
    const formData = useAppSelector((state) => state.payformData);
    const dispatch = useAppDispatch();
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

    const navigate = useNavigate();
    function handleBtn() {
        navigate("/");
        dispatch(removeFormData());
        dispatch(clearCart());
    }

    return (
        <div className="thankyou-container">
            <div className="thankyou-line"></div>
            <h2>
                <FormattedMessage
                    id="thankYou.title"
                    defaultMessage="Thank you!"
                />
            </h2>
            <p>
                <FormattedMessage
                    id="thankYou.message"
                    defaultMessage={`Gentile {name}, grazie per l'acquisto. Non appena l'ordine sarà spedito, ti invieremo un'email all'indirizzo {email} con le informazioni di tracciamento.`}
                    values={{
                        name: formData.name,
                        email: (
                            <span className="spanForm">{formData.email}</span>
                        ),
                    }}
                />
            </p>
            <p>
                {total === 0 ? null : <FormattedMessage
                    id="thankYou.orderTotal"
                    defaultMessage="Your order: {total} {currency}"
                    values={{
                        total: (
                            <FormattedNumber
                                value={total}
                                style="currency"
                                currency="EUR"
                            />
                        ),
                        currency: (
                            <FormattedMessage
                                id="currency"
                                defaultMessage="USD"
                            />
                        ),
                    }}
                />}
            </p>
            <div className="thankyou-line"></div>
            <button className="thankyou-btn" onClick={handleBtn}>
                <FormattedMessage
                    id="thankYou.button.home"
                    defaultMessage="HOME"
                />
            </button>
        </div>
    );
}
