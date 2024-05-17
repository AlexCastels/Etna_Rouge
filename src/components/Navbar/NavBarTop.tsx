import React, { useState } from "react";
import Logo from "../Logo/Logo";
import "./NavbarTop.scss";
import HamburgerMenu from "../Hamburger/HamburgerMenu";
import { /* Link */ useNavigate } from "react-router-dom";
import "./Overlay.scss";
import { FormattedMessage } from "react-intl";

const NavBarTop: React.FC = () => {
  const [toggle, setToggle] = useState(true);
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const [toggleOverlay, setToggleOverlay] = useState(true);

  const navigate = useNavigate();

  function linkShirts() {
    navigate("/shirts", { state: { name: "shirts" } });
  }
  function linkPants() {
    navigate("/pants", { state: { name: "pants" } });
  }
  function linkShoes() {
    navigate("/shoes", { state: { name: "shoes" } });
  }
  function linkAll() {
    navigate("/all", { state: { name: "all" } });
  }

  return (
    <>
      <nav className="navbar_top">
        <div
          onClick={() => {
            setToggleSidebar(!toggleSidebar);
          }}
        >
          <HamburgerMenu />
        </div>
        <div className="navbar_logo">
          <Logo />
        </div>
        <div
          className="navbar_center"
          onClick={() => {
            setToggleOverlay(!toggleOverlay);
          }}
        >
          <div
            onClick={() => {
              setToggle(!toggle);
            }}
            className="navbar_categories"
          >
            <FormattedMessage id="navbarTop.men" defaultMessage="Men" />
          </div>
          <div
            onClick={() => {
              setToggle(!toggle);
            }}
            className="navbar_categories"
          >
            <FormattedMessage id="navbarTop.women" defaultMessage="Women" />
          </div>
          <div className="navbar_categories">
            <FormattedMessage
              id="navbarTop.aboutUs"
              defaultMessage="About Us"
            />
          </div>
        </div>
        <div className="navbar_right">
          {/* icona Search */}
          <div className="navbar_button_item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="75%"
              height="75%"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15 15L21 21"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
          </div>
          {/* icona Profile */}
          <div className="navbar_button_item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="75%"
              height="75%"
              viewBox="0 0 20 20"
              version="1.1"
            >
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-180.000000, -2159.000000)"
                  fill="#000000"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M134,2008.99998 C131.783496,2008.99998 129.980955,2007.20598 129.980955,2004.99998 C129.980955,2002.79398 131.783496,2000.99998 134,2000.99998 C136.216504,2000.99998 138.019045,2002.79398 138.019045,2004.99998 C138.019045,2007.20598 136.216504,2008.99998 134,2008.99998 M137.775893,2009.67298 C139.370449,2008.39598 140.299854,2006.33098 139.958235,2004.06998 C139.561354,2001.44698 137.368965,1999.34798 134.722423,1999.04198 C131.070116,1998.61898 127.971432,2001.44898 127.971432,2004.99998 C127.971432,2006.88998 128.851603,2008.57398 130.224107,2009.67298 C126.852128,2010.93398 124.390463,2013.89498 124.004634,2017.89098 C123.948368,2018.48198 124.411563,2018.99998 125.008391,2018.99998 C125.519814,2018.99998 125.955881,2018.61598 126.001095,2018.10898 C126.404004,2013.64598 129.837274,2010.99998 134,2010.99998 C138.162726,2010.99998 141.595996,2013.64598 141.998905,2018.10898 C142.044119,2018.61598 142.480186,2018.99998 142.991609,2018.99998 C143.588437,2018.99998 144.051632,2018.48198 143.995366,2017.89098 C143.609537,2013.89498 141.147872,2010.93398 137.775893,2009.67298"
                      id="profile-[#1341]"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          {/* icona Cart */}
          <div
            /* onClick={() => {
            setToggle(!toggle);
          }} */
            className="navbar_button_item"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              width="75%"
              height="75%"
              viewBox="0 0 32 32"
              version="1.1"
            >
              <path d="M27 4.96h-5.975v-1.918c0-1.655-1.346-3-3-3h-3.989c-1.655 0-3 1.345-3 3v1.918h-6.037c-1.104 0-2 0.896-2 2v22.999c0 1.105 0.896 2 2 2h22c1.105 0 2-0.895 2-2v-22.999c0-1.104-0.895-2-2-2h0zM13.037 3.042c0-0.552 0.448-1 1-1h3.989c0.552 0 1 0.448 1 1v1.918h-5.989v-1.918zM27 29.959h-22v-22.999h6.037v2.058s-0.027 0.999 0.994 0.999c1.125 0 1.006-0.999 1.006-0.999v-2.058h5.989v2.058s-0.067 1.004 0.996 1.004c1 0 1.004-1.004 1.004-1.004v-2.058h5.974v22.999z" />
            </svg>
          </div>
        </div>
        <div className="navbar_hidden">
          {!toggle && (
            <div className="categories_hidden">
              <div className="category_border"></div>
              <div className="single_category" onClick={linkShirts}></div>
              <div className="category_border"></div>
              <div className="single_category" onClick={linkPants}>
                <FormattedMessage
                  id="navHidden.shirts"
                  defaultMessage="Shirts"
                />
              </div>
              <div className="category_border"></div>
              <div className="single_category" onClick={linkShoes}>
                <FormattedMessage id="navHidden.shoes" defaultMessage="Shoes" />
              </div>
              <div className="category_border"></div>
              <div className="single_category" onClick={linkAll}>
                <FormattedMessage id="navHidden.all" defaultMessage="All" />
              </div>
              <div className="category_border"></div>
            </div>
          )}
        </div>
      </nav>
      {!toggleSidebar && (
        <div className="sidebar_hidden2">
          <div className="category_border"></div>
          <div className="single_category" onClick={linkShirts}>
            <FormattedMessage
                  id="navHidden.shirts"
                  defaultMessage="Shirts"
                />
          </div>
          <div className="category_border"></div>
          <div className="single_category" onClick={linkPants}>
             <FormattedMessage
                  id="navHidden.pants"
                  defaultMessage="Pants"
                />
          </div>
          <div className="category_border"></div>
          <div className="single_category" onClick={linkShoes}>
            <FormattedMessage id="navHidden.shoes" defaultMessage="Shoes" />
          </div>
          <div className="category_border"></div>
          <div className="single_category" onClick={linkAll}>
            <FormattedMessage
                  id="navHidden.all"
                  defaultMessage="All"
                />
          </div>
          <div className="category_border"></div>
        </div>
      )}
      {!toggleSidebar && <div className="overlay"></div>}
      {!toggleOverlay && <div className="overlay"></div>}
    </>
  );
};

export default NavBarTop;
