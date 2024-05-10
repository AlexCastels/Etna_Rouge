
import Cart from "./components/Cart"
import { ProductCard } from "./components/Plp"
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import "./style.scss";
import { Plp } from './components/Plp'
import { PayForm } from "./components/PayForm"
import { SelectPayment } from './components/SelectPayment'
import { CreditCardForm } from "./components/CreditCardForm";




function App() {

    return (
        <>
        {/* <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProductCard/>}/>
                <Route path="/Cart" element={<Cart/>}/>
                <Route path='/SelectPayment' element={<SelectPayment/>}/>
                <Route path='/DeliveryForm' element={<PayForm/>}/>
            </Routes>
        </BrowserRouter> */}
        <CreditCardForm/>
        </>
    )
}

export default App
