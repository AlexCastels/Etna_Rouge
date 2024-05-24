import { useLocation } from "react-router-dom"
import NavBarTop from "./NabarTop";

const HamburgerSide = () => {

    const location = useLocation();

    return (
        <>
        <NavBarTop/>
        <div className="nav_section">
            <p>- Hamburger -
                {location.state.all}
            </p>
        </div>
        </>
    )
}
export default HamburgerSide;