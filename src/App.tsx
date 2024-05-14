
import Cart from "./components/cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PayForm } from "./components/PayForm";
import { SelectPayment } from "./components/SelectPayment";
import FeaturesContent from "./components/featuresSection/FeaturesContent";
import HeroContent from "./components/heroSection/HeroContent";
import Pdp from "./components/Pdp/Pdp";
import Plp from "./components/plp/Plp";


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
