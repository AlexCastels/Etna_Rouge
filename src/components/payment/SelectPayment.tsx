import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./selectPayment.scss";
import { FormattedMessage } from "react-intl";
import { useDarkMode } from "../darkmode/DarkModeContext";


export function SelectPayment() {
    const navigate = useNavigate();
    const [spia, setSpia] = useState<string>("");
  const [notSelect, setNotSelect] = useState<boolean>(false);
  const { mode } = useDarkMode();

    function handleRadio(e: React.ChangeEvent<HTMLInputElement>) {
        setSpia(e.target.value);
        setNotSelect(false);
    }

    function handleBtn(spia: string) {
        if (spia === "spedizione") {
            console.log(spia);
            navigate("/ThankYouDelivery");
        }
        if (spia === "credit-card") {
            console.log(spia);
            navigate("/CreditCardForm");
        }
        setNotSelect(true);
    }

    function handleSubmint(e: React.FormEvent) {
        e.preventDefault();
    }

    if (spia) {
        console.log(spia);
    }

  return (
    <form onSubmit={handleSubmint} className={`selectPayment-container ${mode}`}>
      <p className="selectPayment-title">
        <FormattedMessage
          id="selectPayment.title"
          defaultMessage="Payment Methods"
        />
      </p>
      <div className="select-payform-line"></div>
      <div className="selectForm-general-container">
        <div className="selectPayform-creditCard-container">
          <div>
            <input
              type="radio"
              name="selezione"
              value={"credit-card"}
              onChange={handleRadio}
            />
            <label htmlFor="credit-card">
              <FormattedMessage
                id="selectPayment.label.creditCard"
                defaultMessage="Credit Card"
              />
            </label>
          </div>
          <img
            className="selectPayform-img"
            src="/assets/Credit-Card.png"
            alt="Pagamenti accettati"
          />
        </div>
        <div className="selectPayform-delivery-container">
          <div>
            <input
              type="radio"
              name="selezione"
              value={"spedizione"}
              onChange={handleRadio}
            />
            <label htmlFor="spedizione">
              <FormattedMessage
                id="selectPayment.label.cash"
                defaultMessage="Cash on Delivery"
              />
            </label>
          </div>
          <p>
            <FormattedMessage
              id="selectPayment.advise"
              defaultMessage="*By choosing payment on delivery, a supplement of €10 will apply to the order total"
            />
          </p>
        </div>
      </div>
      {notSelect && (
        <p className="selectPayform-notSelect">
          <FormattedMessage
            id="selectPayment.noSelected"
            defaultMessage="Please select a payment method"
          />
        </p>
      )}
      <div className="select-payform-line"></div>
      <button onClick={() => handleBtn(spia)}>
        <FormattedMessage
          id="selectPayment.button.checkout"
          defaultMessage="CHECKOUT"
        />
      </button>
    </form>
  );
}
