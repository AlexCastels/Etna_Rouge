
import Cart from "./components/Cart"
import { ProductCard } from "./components/Plp"
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import "./style.scss";

import { PayForm } from "./components/PayForm"
import { SelectPayment } from './components/SelectPayment'



/* import { Plp } from './components/Plp' */

function App() {

    return (
        <>

        <BrowserRouter>
        <Routes>
            <Route path="/" element={<ProductCard/>}/>
            <Route path="/Cart" element={<Cart/>}/>
        </Routes>
        </BrowserRouter>

            <Routes>
                <Route path='/SelectPayment' element={<SelectPayment/>}/>
                <Route path='/DeliveryForm' element={<PayForm/>}/>
            </Routes>

        </>
    )
}

export default App;
