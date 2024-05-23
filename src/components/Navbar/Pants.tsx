import { useLocation } from "react-router-dom"
import NavBarTop from "./NavbarTop";

const Pants = () => {

    const location = useLocation();

    return (
        <>
        <NavBarTop/>
        <div className="nav_section">
            <p>- Pants -
                {location.state.pants}
            </p>
        </div>
        </>
    )
}
export default Pants;