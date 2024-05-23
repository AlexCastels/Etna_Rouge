import React from "react"
import { Link } from "react-router-dom";

const Logo : React.FC = () => {
    return(
        <>
            <div>
                <Link to='/'>
                        <img className="logo" src={'../src/assets/EtnaRougeLogo.webp'} alt="website Logo" />
                </Link>
            
            </div>
        </>
    )
}

export default Logo;