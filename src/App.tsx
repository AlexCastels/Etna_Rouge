
import Cart from "./components/cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PayForm } from "./components/PayForm";
import { SelectPayment } from "./components/SelectPayment";
import FeaturesContent from "./components/featuresSection/FeaturesContent";
import HeroContent from "./components/heroSection/HeroContent";
import Plp from "./components/plp/Plp";
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
          <Route path="/SelectPayment" element={<SelectPayment />} />
          <Route path="/DeliveryForm" element={<PayForm />} />
          <Route path="/pdp/:id" element={<Pdp/>}/>
        </Routes>
      </BrowserRouter>
      <HeroContent />
      <FeaturesContent />
    </>
  );



}


export default App;
