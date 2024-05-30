import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { FormattedMessage, FormattedNumber } from "react-intl";
import { removeFormData } from "../../redux/slices/payformSlice";
import { clearCart } from "../../redux/slices/cartSlice";
import { useDarkMode } from "../darkmode/DarkmodeContext";
import "./thankYouPage.scss";


export function ThankYouPageCard(){
    
    const total = useAppSelector((state) => state.cart.total)
    const totalPromo = useAppSelector((state) => state.cart.totalPromo)
    const formData = useAppSelector(state => state.payformData)
    const dispatch = useAppDispatch()
    const { mode } = useDarkMode();

    const navigate = useNavigate();
    function handleBtn() {
        navigate("/");
        dispatch(removeFormData());
        dispatch(clearCart());
    }

    return (
        <div className={`thankyou-container ${mode}`}>
            <div className={`thankyou-line ${mode}`}></div>
            <h2 className={mode}>
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
                                value={totalPromo ? totalPromo : total}
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
            <div className={`thankyou-line ${mode}`}></div>
            <button className={`thankyou-btn ${mode}`} onClick={handleBtn}>
                <FormattedMessage
                    id="thankYou.button.home"
                    defaultMessage="HOME"
                />
            </button>
        </div>
    );
}
