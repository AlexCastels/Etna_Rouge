import { useDarkMode } from '../darkmode/DarkModeContext';
import './promoBanner.scss'

const PromoBanner = ({ text }) => {
  const { mode } = useDarkMode();

  return (
    <div className={`banner-cont ${mode}`}>
      <p>{text }</p>
    </div>
  )
}

export default PromoBanner;