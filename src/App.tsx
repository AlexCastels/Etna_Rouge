import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBarTop from "./components/Navbar/NavBarTop.tsx";
import NavBarBottom from "./components/Navbar/NavbarBottom";
import LandingPage from "./components/landingPage/LandingPage.tsx";
import DiscoverMore from "./components/discoverMore/DiscoverMore.tsx";
import Cart from "./components/cart/Cart.tsx";
import Plp from "./components/plp/Plp.tsx";
import Pdp from "./components/PDP/Pdp.tsx";
import { PayForm } from "./components/payment/PayForm.tsx";
import { CreditCardForm } from "./components/payment/CreditCardForm.tsx";
import { SelectPayment } from "./components/payment/SelectPayment.tsx";
import { ThankYouPageCard } from "./components/payment/ThankYouPageCard.tsx";
import { ThankYouPageDelivery } from "./components/payment/ThankYouPageDelivery.tsx";
import "./style.scss";
import "./components/PDP/Pdp.scss";
import AboutUs from "./components/aboutUs/aboutUs.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBarTop/>
        <Routes>
          <Route path="/aboutUs" element={<AboutUs />} />
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


/*   const onRenderCallback =
    () =>
    (
      id: any, // the "id" prop of the Profiler tree that has just committed
      phase: any, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
      actualDuration: any, // time spent rendering the committed update
      baseDuration: any, // estimated time to render the entire subtree without memoization
      startTime: any, // when React began rendering this update
      commitTime: any, // when React committed this update
      interactions: any // the Set of interactions belonging to this update
    ) => {
      console.log({
        id,
        phase,
        actualDuration,
        baseDuration,
        startTime,
        commitTime,
        interactions,
      });
    }; */