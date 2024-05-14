
import Cart from "./components/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style.scss";
import "./components/PDP/Pdp.scss"

// import { Plp } from './components/Plp';
// import { PayForm } from "./components/PayForm"

import { Pdp } from "./components/PDP/Pdp.tsx";
import ProductCard from "./components/ProductCard.tsx";
import { SelectPayment } from "./components/SelectPayment.tsx";
import { PayForm } from "./components/PayForm.tsx";

import Paypal from "./components/payment/Paypal.tsx";
import LandingPage from "./components/landingPage/LandingPage.tsx";
import { Carousel } from "./components/carousel/Carousel.tsx";




function App() {
    return (
        <>
             <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                {/*     <Route path="/plp/productId" element={<Pdp {...obj} />} />
                    <Route path="/pdp" element={<ProductCard />} />
                    <Route path="/Cart" element={<Cart />} />
                    <Route path="/SelectPayment" element={<SelectPayment />} />
                    <Route path="/DeliveryForm" element={<PayForm/>} /> */}
                </Routes>
            </BrowserRouter>
        
        </>
    );

}

export default App;
