
import { useNavigate } from 'react-router-dom'
import NavBarTop from '../Navbar/NavBarTop';
import NavBarBottom from '../Navbar/NavbarBottom';

const DiscoverMore = () => {
  const navigate = useNavigate();
    const handleClick = () => {
    navigate('/')
}

    return (
      <>
      <NavBarTop/>
       <div>
            <h1>Etna Rouge blog</h1>
             <button onClick={handleClick}>Home</button>
      </div>
      <NavBarBottom/>
      </>
       
   
  )
}

export default DiscoverMore