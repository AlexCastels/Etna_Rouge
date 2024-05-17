import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { PayForm } from "./components/PayForm";
// import { SelectPayment } from "./components/SelectPayment";
import Plp from "./components/plp/Plp";
import { CreditCardForm } from "./components/payment/CreditCardForm";
import Cart from "./components/cart/Cart";
import { ThankYouPageDelivery } from "./components/payment/ThankYouPageDelivery";
import { ThankYouPageCard } from "./components/payment/ThankYouPageCard";
import Pdp from "./components/PDP/Pdp";
/* import ProductCard from "./components/ProductCard.tsx";
import Paypal from "./components/payment/Paypal.tsx";
import LandingPage from "./components/landingPage/LandingPage.tsx";
import { CreditCardForm } from "./components/CreditCardForm"; */


function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Plp />} />
            <Route path="/Cart" element={<Cart />} />
            {/* <Route path='/SelectPayment' element={<SelectPayment/>}/>
            <Route path='/DeliveryForm' element={<PayForm/>}/> */}
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
