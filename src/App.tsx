import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style.scss";
import "./components/PDP/Pdp.scss"
import { SelectPayment } from "./components/payment/SelectPayment.tsx";
import { PayForm } from "./components/payment/PayForm.tsx";
import { CreditCardForm } from "./components/payment/CreditCardForm.tsx";
import Pdp from "./components/PDP/Pdp.tsx";
import Plp from "./components/plp/Plp.tsx";
import Cart from "./components/cart/Cart.tsx";
/* import { ThankYouPageCard } from "./components/payment/ThankYouPageCard.tsx";
import { ThankYouPageDelivery } from "./components/payment/ThankYouPageDelivery.tsx"; */
import LandingPage from "./components/landingPage/LandingPage.tsx";
import NavBarTop from "./components/navbar/NavBarTop.tsx";
import NavBarBottom from "./components/navbar/NavbarBottom.tsx";
import { Profiler } from "react";
import PromoBanner from "./components/promoBanner/PromoBanner.tsx";
import { stringify } from "querystring";
import PromoContent from "./components/promoBanner/PromoContent.tsx";


function App() {

  const onRenderCallback = () => (
    id:any, // the "id" prop of the Profiler tree that has just committed
    phase:any, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration:any, // time spent rendering the committed update
    baseDuration:any, // estimated time to render the entire subtree without memoization
    startTime:any, // when React began rendering this update
    commitTime:any, // when React committed this update
    interactions:any // the Set of interactions belonging to this update
  ) => {
    console.log({id, phase, actualDuration, baseDuration, startTime, commitTime, interactions});
  }

  return (
    <>
    {/* <PromoBanner/> */}
      <BrowserRouter>
            <PromoContent/>
            <NavBarTop/>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/plp" element={<Plp/>}/>
              {/* <Route path="/pdp/:id" element={<Pdp />}/>  */}
              <Route path="/Cart" element={<Cart />} />
              <Route path='/DeliveryForm' element={<PayForm/>}/>
              <Route path='/SelectPayment' element={<SelectPayment/>}/>
              <Route path='/CreditCardForm' element={<CreditCardForm/>}/>
{/*               <Route path="/ThankYouCard" element={<ThankYouPageCard/>}/>
              <Route path="/ThankYouDelivery" element={<ThankYouPageDelivery/>}/> */}

            </Routes>
          <NavBarBottom/>
        </BrowserRouter>
    </>
  );
}

export default App;