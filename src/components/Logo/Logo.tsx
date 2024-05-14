import React from "react"
import LogoImage from "../../assets/Logo.png"
const Logo : React.FC = () => {
    return(
        <>
            <div>
                <img className="logo" src={LogoImage} alt="website Logo" />
            </div>
        </>
    )
}

export default Logo;