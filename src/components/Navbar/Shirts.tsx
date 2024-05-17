import { useLocation } from "react-router-dom"
import NavBarTop from "./NavBarTop";
import "./NavbarTop.scss"

const Shirts = () => {

    const location = useLocation();

    return (
        <>
        <NavBarTop/>
        <div className="nav_section">
            <p>- Shirts -
                {location.state.shirts}
            </p>
        </div>
        </>
    )
}
export default Shirts;