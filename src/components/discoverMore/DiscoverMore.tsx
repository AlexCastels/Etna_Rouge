
import { useNavigate } from 'react-router-dom'

const DiscoverMore = () => {
  const navigate = useNavigate();
    const handleClick = () => {
    navigate('/')
}

    return (
        <div>
            <h1>Etna Rouge blog</h1>
             <button onClick={handleClick}>Home</button>
      </div>
   
  )
}

export default DiscoverMore