
import Cart from "./components/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style.scss";
import { PayForm } from "./components/PayForm";
import { SelectPayment } from "./components/SelectPayment";
import ProductCard from "./components/ProductCard";
import FeaturesContent from "./components/featuresSection/FeaturesContent";
import HeroContent from "./components/heroSection/HeroContent";
import NavBarTop from "./components/Navbar/NavBarTop";
import NavBarBottom from "./components/Navbar/NavbarBottom";
import HamburgerMenu from "./components/Hamburger/HamburgerMenu";
import Plp from "./components/Plp";
import Shirts from "./components/Navbar/Shirts";
import Pants from "./components/Navbar/Pants";
import Shoes from "./components/Navbar/Shoes";
import All from "./components/Navbar/All";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBarTop/>}/>
          <Route path="/" element={<ProductCard />} />
          <Route path="/shirts" element={<Shirts />} />
          <Route path="/pants" element={<Pants />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/all" element={<All />} />
          <Route path="/hamburger_menu" element={<HamburgerMenu/>} />
          <Route path="/plp/:id/:name" element={<Plp/>}/>
          <Route path="/Cart" element={<Cart />} />
          <Route path="/SelectPayment" element={<SelectPayment />} />
          <Route path="/DeliveryForm" element={<PayForm />} />
        </Routes>
      </BrowserRouter>
      <HeroContent />
      <FeaturesContent />
      <NavBarBottom/>
    </>
  );

}

export default App;
