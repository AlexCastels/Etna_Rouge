
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
import PromoContent from "./components/promoBanner/PromoContent.tsx"
import Cart from "./components/cart/Cart.tsx";
import DiscoverMore from "./components/discoverMore/DiscoverMore.tsx";




function App() {
  return (
    <div>
<LandingPage />


  {/*  <BrowserRouter>
        <Routes>
          <Route path="/" element={ <LandingPage />} />
          <Route path="/discover" element={ <DiscoverMore />} />
         {/*  <Route path="/Cart" element={<Cart />} />
          <Route path="/SelectPayment" element={<SelectPayment />} />
          <Route path="/DeliveryForm" element={<PayForm />} />
          <Route path="/pdp/:id" element={<Pdp />}/>  
        </Routes>
      </BrowserRouter>  */}
     
      
        {/* <Routes>
          <Route path='/SelectPayment' element={<SelectPayment/>}/>
          <Route path='/DeliveryForm' element={<PayForm/>}/>
          <Route path='/CreditCardForm' element={<CreditCardForm/>}/>
        </Routes> */}
 
      
      
    </div>
  )
}


export default App;
