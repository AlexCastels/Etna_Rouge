import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage.tsx";
import DiscoverMore from "./components/discoverMore/DiscoverMore.tsx";
import Cart from "./components/cart/Cart.tsx";
import { PayForm } from "./components/payment/PayForm.tsx";
import { CreditCardForm } from "./components/payment/CreditCardForm.tsx";
import Pdp from "./components/PDP/Pdp.tsx";
import { SelectPayment } from "./components/payment/SelectPayment.tsx";
import { ThankYouPageCard } from "./components/payment/ThankYouPageCard.tsx";
import { ThankYouPageDelivery } from "./components/payment/ThankYouPageDelivery.tsx";
import { Plp } from "./components/plp/Plp.tsx";
import NavBarTop from "./components/Navbar/NavBarTop.tsx";
import NavBarBottom from "./components/Navbar/NavbarBottom.tsx";



function App() {
  return (
    <>
      <BrowserRouter>
      {/* <PromoContent/> */}
        <NavBarTop/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/discover" element={<DiscoverMore />} />
          <Route path="/plp" element={<Plp />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/SelectPayment" element={<SelectPayment />} />
          <Route path="/DeliveryForm" element={<PayForm />} />
          <Route path="/CreditCardForm" element={<CreditCardForm />} />
          <Route path="/ThankYouCard" element={<ThankYouPageCard />} />
          <Route path="/ThankYouDelivery" element={<ThankYouPageDelivery />} />
          <Route path="/pdp/:id" element={<Pdp />}/> 
        </Routes>
        <NavBarBottom/>
      </BrowserRouter>

    

    </>

  );
}

export default App;

