
import Cart from "./components/cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style.scss";
import "./components/PDP/Pdp.scss"
import Paypal from "./components/payment/Paypal.tsx";
import LandingPage from "./components/landingPage/LandingPage.tsx";
import { SelectPayment } from "./components/payment/SelectPayment.tsx";
import { PayForm } from "./components/payment/PayForm.tsx";
import { CreditCardForm } from "./components/payment/CreditCardForm.tsx";
import Plp from "./components/plp/Plp.tsx";
import FeaturesContent from "./components/featuresSection/FeaturesContent.tsx";
import Pdp from "./components/PDP/Pdp.tsx";
import HeroContent from "./components/heroSection/HeroContent";
import { ThankYouPageCard } from "./components/payment/ThankYouPageCard.tsx";
import { ThankYouPageDelivery } from "./components/payment/ThankYouPageDelivery.tsx";


function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Routes>
          <Route path="/" element={<Plp />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/SelectPayment" element={<SelectPayment />} />
          <Route path="/DeliveryForm" element={<PayForm />} />
          <Route path="/pdp/:id" element={<Pdp/>}/>
        </Routes>
      <FeaturesContent /> */}
        <Routes>
          <Route path='/SelectPayment' element={<SelectPayment/>}/>
          <Route path='/DeliveryForm' element={<PayForm/>}/>
          <Route path='/CreditCardForm' element={<CreditCardForm/>}/>
          <Route path="/ThankYouCard" element={<ThankYouPageCard/>}/>
          <Route path="/ThankYouDelivery" element={<ThankYouPageDelivery/>}/>
          <Route path="/" element={<Plp />} />
          <Route path="/Cart" element={<Cart />} />
          {/* <Route path="/pdp/:id" element={<Pdp/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App;
