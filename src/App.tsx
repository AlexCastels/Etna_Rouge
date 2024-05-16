import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PayForm } from "./components/payment/PayForm.tsx";
import HeroContent from "./components/heroSection/HeroContent";
import Cart from "./components/cart/Cart.tsx";
import FeaturesContent from "./components/featuresSection/FeaturesContent.tsx";
import Pdp from "./components/Pdp/Pdp.tsx";
import ProductCard from "./components/ProductCard.tsx";
import { SelectPayment } from "./components/payment/SelectPayment.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductCard />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/SelectPayment" element={<SelectPayment />} />
          <Route path="/DeliveryForm" element={<PayForm />} />
          <Route path="/pdp/:id" element={<Pdp />} />
        </Routes>
      </BrowserRouter>
      <HeroContent />
      <FeaturesContent />
    </>
  );
}

export default App;
