import { useLocation } from "react-router-dom"
import NavBarTop from "./NavbarTop";

const All = () => {

    const location = useLocation();

    return (
        <>
        <NavBarTop/>
        <div className="nav_section">
            <p>- All -
                {location.state.all}
            </p>
        </div>
        </>
    )
}
export default All;
