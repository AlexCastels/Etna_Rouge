
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style.scss";
import "./components/PDP/Pdp.scss"
import { SelectPayment } from "./components/payment/SelectPayment.tsx";
import { PayForm } from "./components/payment/PayForm.tsx";
import { CreditCardForm } from "./components/payment/CreditCardForm.tsx";
import Pdp from "./components/PDP/Pdp.tsx";
import Plp from "./components/plp/Plp.tsx";
import Cart from "./components/cart/Cart.tsx";
import { ThankYouPageCard } from "./components/payment/ThankYouPageCard.tsx";
import { ThankYouPageDelivery } from "./components/payment/ThankYouPageDelivery.tsx";


function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Plp />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path='/SelectPayment' element={<SelectPayment/>}/>
            <Route path='/DeliveryForm' element={<PayForm/>}/>
            <Route path='/CreditCardForm' element={<CreditCardForm/>}/>
            <Route path="/ThankYouCard" element={<ThankYouPageCard/>}/>
            <Route path="/ThankYouDelivery" element={<ThankYouPageDelivery/>}/>
            <Route path="/Cart" element={<Cart />} />
            <Route path="/pdp/:id" element={<Pdp />}/> 
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
