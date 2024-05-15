import { useLocation } from "react-router-dom"
import NavBarTop from "./NavBarTop";

const Shoes = () => {

    const location = useLocation();

    return (
        <>
        <NavBarTop/>
        <div className="nav_section">
            <p>- Shoes -
                {location.state.shoes}
            </p>
        </div>
        </>
    )
}
export default Shoes;