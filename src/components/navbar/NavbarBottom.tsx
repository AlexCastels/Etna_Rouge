import React from "react";
import "./navbarBottom.scss";
import { toggleCart } from "../../redux/slices/cartSlice";
import { useAppDispatch } from "../../redux/hook";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../darkmode/DarkmodeContext";


const NavBarBottom: React.FC = () => {
  const { mode } = useDarkMode();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleHome() {
    navigate("/");
  }

  return (
    <nav className={`navbar_bottom ${mode}`}>
      {/* Icona Home */}
      <div className="navbar_bottom_item"
      onClick={() => {
        dispatch(handleHome);
      }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
          version="1.1"
        >
          <title>Home</title>
          <g
            id="Page-1"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g id="Home">
              <rect
                id="Rectangle"
                fill-rule="nonzero"
                x="0"
                y="0"
                width="24"
                height="24"
              ></rect>
              <path
                className={`path_color ${mode}`}
                d="M5,10 L5,19 C5,19.5523 5.44772,20 6,20 L18,20 C18.5523,20 19,19.5523 19,19 L19,10"
                id="Path"
                stroke-width="2"
                stroke-linecap="round"
              ></path>
              <path
                className={`path_color ${mode}`}
                d="M21,11 L12.307,4.23875 C12.1264,4.09832 11.8736,4.09832 11.693,4.23875 L3,11"
                id="Path"
                stroke-width="2"
                stroke-linecap="round"
              ></path>
            </g>
          </g>
        </svg>
      </div>

      <div
        className="navbar_bottom_item"
        onClick={() => {
          dispatch(toggleCart());
        }}
      >
        {/* Icona Carrello */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          height="50px"
          viewBox="0 -0.5 25 25"
          fill="none"
        >
          <path
            className={`path_color ${mode}`}
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.50035 9.3C5.487 8.31988 6.27024 7.51426 7.25035 7.5H17.7503C18.7305 7.51426 19.5137 8.31988 19.5004 9.3V17.4C19.5276 19.3605 17.9608 20.972 16.0004 21H9.00035C7.03989 20.972 5.4731 19.3605 5.50035 17.4V9.3Z"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            className={`path_color ${mode}`}
            d="M16.0004 10.2V6.6C16.0276 4.63953 14.4608 3.02797 12.5004 3C10.5399 3.02797 8.9731 4.63953 9.00035 6.6V10.2"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </nav>
  );
};

export default NavBarBottom;
