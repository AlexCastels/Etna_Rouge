import Cart from "./components/Cart"
import { ProductCard } from "./components/Plp"
import {BrowserRouter,Route,Routes} from 'react-router-dom'



function App() {
    
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<ProductCard/>}/>
            <Route path="/Cart" element={<Cart/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default App
