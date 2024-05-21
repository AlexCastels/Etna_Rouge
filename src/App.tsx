import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage.tsx";
import DiscoverMore from "./components/discoverMore/DiscoverMore.tsx";
import Cart from "./components/cart/Cart.tsx";

import { PayForm } from "./components/payment/PayForm.tsx";
import { CreditCardForm } from "./components/payment/CreditCardForm.tsx";
/* import Pdp from "./components/pdp/Pdp.tsx"; */
import { SelectPayment } from "./components/payment/SelectPayment.tsx";
import { ThankYouPageCard } from "./components/payment/ThankYouPageCard.tsx";
import { ThankYouPageDelivery } from "./components/payment/ThankYouPageDelivery.tsx";
import NavBarTop from "./components/navbar/NavBarTop.tsx";
import NavBarBottom from "./components/navbar/NavbarBottom.tsx";
import { Plp } from "./components/plp/Plp.tsx";


function App() {
  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/discover" element={<DiscoverMore />} />
          <Route path="/plp" element={<Plp />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/SelectPayment" element={<SelectPayment />} />
          <Route path="/DeliveryForm" element={<PayForm />} />
          {/* <Route path="/pdp/:id" element={<Pdp/>} /> */}
          <Route path="/CreditCardForm" element={<CreditCardForm />} />
          <Route path="/ThankYouCard" element={<ThankYouPageCard />} />
          <Route path="/ThankYouDelivery" element={<ThankYouPageDelivery />} />
        </Routes>
        
      </BrowserRouter>

    

    </>

  );
}

export default App;


