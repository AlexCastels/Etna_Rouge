
import Cart from "./components/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style.scss";
import "./components/PDP/Pdp.scss"

// import { Plp } from './components/Plp';
// import { PayForm } from "./components/PayForm"
import { Products } from "./interfaces";
import { Pdp } from "./components/PDP/Pdp.tsx";
import ProductCard from "./components/ProductCard.tsx";
import { SelectPayment } from "./components/SelectPayment.tsx";
import { PayForm } from "./components/PayForm.tsx";
import FeaturesContent from "./components/featuresSection/FeaturesContent.tsx";
import HeroContent from "./components/heroSection/HeroContent.tsx"

const obj: Products = {
    id: 5,
    name: "Men's Casual Wear",
    price: 609.99,
    gender: "men",
    category: "shoes",
    img: "https://plus.unsplash.com/premium_photo-1689327920655-52e42cf05219?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmVzdGl0aSUyMHVvbW98ZW58MHx8MHx8fDA%3D",
    quantity: 0,
    description: "Casual wear for men's everyday activities."
}


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/plp/productId" element={<Pdp {...obj} />} />
                    <Route path="/" element={<ProductCard />} />
                    <Route path="/Cart" element={<Cart />} />
                    <Route path="/SelectPayment" element={<SelectPayment />} />
                    <Route path="/DeliveryForm" element={<PayForm
                    />} />
                </Routes>
            </BrowserRouter>
            <HeroContent />
            <FeaturesContent />
        </>
    );

}

export default App;
