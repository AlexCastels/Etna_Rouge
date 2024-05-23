import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import "./thankYouPage.scss";
import { removeFormData } from "../../redux/slices/payformSlice";
import { FormattedMessage, FormattedNumber } from "react-intl";
import { useDarkMode } from "../darkmode/DarkModeContext";

export function ThankYouPageDelivery() {
  const total = useAppSelector((state) => state.cart.total);
  const formData = useAppSelector((state) => state.payformData);
  const dispatch = useAppDispatch();
  const { mode } = useDarkMode();
  console.log(formData);

  // const location = useLocation()
  // let deliveryTotal = location.state.total
  // if(location){
  //     deliveryTotal =
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
  }

  return (
    <div className={`thankyou-container ${mode}`}>
      <div className="thankyou-line"></div>
      <h2>
        <FormattedMessage id="thankYou.title" defaultMessage="Thank you!" />
      </h2>
      <p>
        <FormattedMessage
          id="thankYou.message"
          defaultMessage="Gentile {name}, grazie per l'acquisto. Non appena l'ordine sarà spedito, ti invieremo un'email all'indirizzo {email} con le informazioni di tracciamento."
          values={{ name: formData.name, email: formData.email }}
        />
      </p>
      <p>
        <FormattedMessage
          id="thankYou.orderTotal"
          defaultMessage="Your order: {total} {currency}"
          values={{
            total: <FormattedNumber style="currency" value={total + 10} />,
            currency: <FormattedMessage id="currency" defaultMessage="$" />,
          }}
        />
      </p>
      <div className="thankyou-line"></div>
      <button className="thankyou-btn" onClick={handleBtn}>
        <FormattedMessage id="thankYou.button.home" defaultMessage="HOME" />
      </button>
    </div>
  );
}
