import { FormattedMessage } from "react-intl";
import "../payment/paypalRedirect.scss"

export function PaypalRedirect(){
    return <p className="paypalRedirect"><FormattedMessage id="paypalRedirect" defaultMessage='Thank You!'/></p>
}