/* 
import Cart from "./components/Cart"
import { ProductCard } from "./components/Plp"
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import "./style.scss";

import { PayForm } from "./components/PayForm"
import { SelectPayment } from './components/SelectPayment' */
import FetchCarouse from "./components/Carousel/FetchCarousel";
import FeaturesContent from "./components/featuresSection/FeaturesContent";
import HeroContent from "./components/heroSection/HeroContent";


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
     <FetchCarouse /> 
    </>
  );
}

export default App;
