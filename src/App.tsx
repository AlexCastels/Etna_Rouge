
import Cart from "./components/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style.scss";
import { PayForm } from "./components/PayForm";
import { SelectPayment } from "./components/SelectPayment";
import ProductCard from "./components/ProductCard";
import FeaturesContent from "./components/featuresSection/FeaturesContent";
import HeroContent from "./components/heroSection/HeroContent";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductCard />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/SelectPayment" element={<SelectPayment />} />
          <Route path="/DeliveryForm" element={<PayForm />} />
        </Routes>
      </BrowserRouter>
      <HeroContent />
      <FeaturesContent />
    </>
  );

}

export default App;
