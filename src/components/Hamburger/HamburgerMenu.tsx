import '../hamburger/hamburger.scss'

const HamburgerMenu: React.FC = () => {
  return (
    <>
    <div className="hamburger_menu">
        <svg 
        xmlns="http://www.w3.org/2000/svg"
        width="80px"
        height="80px"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g id="Menu / Hamburger_MD">
          <path
            id="Vector"
            d="M5 17H19M5 12H19M5 7H19"
            stroke="#000000"
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
