import '../hamburger/Hamburger.scss'
import { useDarkMode } from '../darkmode/DarkmodeContext';

const HamburgerMenu: React.FC = () => {

  const { mode } = useDarkMode();

  return (
    <>
    <div className={`hamburger_menu ${mode}`}>
        <svg 
        xmlns="http://www.w3.org/2000/svg"
        width="60px"
        height="60px"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g id="Menu / Hamburger_MD">
          <path
            id="Vector"
            d="M5 17H19M5 12H19M5 7H19"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    </div>
    </>
  );
};

export default HamburgerMenu;
