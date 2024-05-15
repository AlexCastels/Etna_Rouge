
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style.scss";
import "./components/PDP/Pdp.scss"
import ProductCard from "./components/ProductCard.tsx";
import Paypal from "./components/payment/Paypal.tsx";
import LandingPage from "./components/landingPage/LandingPage.tsx";
import { SelectPayment } from "./components/payment/SelectPayment.tsx";
import { PayForm } from "./components/payment/PayForm.tsx";
import { CreditCardForm } from "./components/payment/CreditCardForm.tsx";

import Pdp from "./components/PDP/Pdp.tsx";
import HeroContent from "./components/heroSection/HeroContent";
import NavBarTop from "./components/Navbar/NavBarTop";
import NavBarBottom from "./components/Navbar/NavbarBottom";
import HamburgerMenu from "./components/Hamburger/HamburgerMenu";
import Plp from "./components/Plp";
import Shirts from "./components/Navbar/Shirts";
import Pants from "./components/Navbar/Pants";
import Shoes from "./components/Navbar/Shoes";
import All from "./components/Navbar/All";

import PromoContent from "./components/promoBanner/PromoContent.tsx"
import Cart from "./components/cart/Cart.tsx";
import DiscoverMore from "./components/landingPage/discoverMore/DiscoverMore.tsx";


function App() {
  return (
    <div>




   <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductCard />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/SelectPayment" element={<SelectPayment />} />
          <Route path="/DeliveryForm" element={<PayForm />} />
          <Route path="/pdp/:id" element={<Pdp />}/>  */}
        </Routes>
      </BrowserRouter>
      <HeroContent />
      <FeaturesContent />
    </>
  );

}


export default App;
