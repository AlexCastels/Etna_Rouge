import "./style.scss";
import { Plp } from './components/Plp';
import { PayForm } from "./components/PayForm"
import { SelectPayment } from './components/SelectPayment'
import { Route, Routes } from 'react-router-dom'


function App() {

    return (
        <>
            <Routes>
                <Route path='/SelectPayment' element={<SelectPayment/>}/>
                <Route path='/DeliveryForm' element={<PayForm/>}/>
            </Routes>
        </>
    )
}

export default App
