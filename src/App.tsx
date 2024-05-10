/* 
import Cart from "./components/Cart"
import { ProductCard } from "./components/Plp"
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import "./style.scss";

import { PayForm } from "./components/PayForm"
import { SelectPayment } from './components/SelectPayment' */
import ContentfulSimulation from "./components/ContentfulSimulation";
import FeaturesContent from "./components/featuresSection/FeaturesContent";
import FeaturesSection from "./components/featuresSection/FeaturesSection";
import HeroContent from "./components/heroSection/HeroContent";



/* import { Plp } from './components/Plp' */

function App() {

    return (
        <>

       {/*  <BrowserRouter>
        <Routes>
            <Route path="/" element={<ProductCard/>}/>
            <Route path="/Cart" element={<Cart/>}/>
        </Routes>
        </BrowserRouter>

            <Routes>
                <Route path='/SelectPayment' element={<SelectPayment/>}/>
                <Route path='/DeliveryForm' element={<PayForm/>}/>
            </Routes> */}
         <HeroContent />
        <FeaturesContent /> 
         
        </>
    )
}

export default App;
