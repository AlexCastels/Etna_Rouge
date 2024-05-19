
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style.scss";
import LandingPage from "./components/landingPage/LandingPage.tsx";
import { SelectPayment } from "./components/payment/SelectPayment.tsx";
import { PayForm } from "./components/payment/PayForm.tsx";
import { CreditCardForm } from "./components/payment/CreditCardForm.tsx";
import Cart from "./components/cart/Cart.tsx";
import Pdp from "./components/Pdp/Pdp.tsx";
import Plp from "./components/plp/Plp.tsx";


function App() {
  return (

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
    
  );

}


export default App;
