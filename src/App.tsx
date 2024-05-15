
import Cart from "./components/cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PayForm } from "./components/PayForm";
import { SelectPayment } from "./components/SelectPayment";
import Plp from "./components/plp/Plp";
import Pdp from "./components/Pdp/Pdp";
import LandingPage from "./components/landingPage/LandingPage.tsx";
import { CreditCardForm } from "./components/CreditCardForm";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/plp" element={<Plp/>}/>
           <Route path="/pdp/:id" element={<Pdp/>}/>
          <Route path="/Cart" element={<Cart />} />
          <Route path="/SelectPayment" element={<SelectPayment />} />
          <Route path="/DeliveryForm" element={<PayForm />} />
         <Route path="/CreditCard" element={<CreditCardForm/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );



}


export default App;
