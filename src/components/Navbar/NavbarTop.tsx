import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { toggleCart } from "../../redux/slices/cartSlice";
import HamburgerMenu from "../hamburger/HamburgerMenu";
import "../hamburger/Hamburger.scss";
import Logo from "../logo/Logo";
import "../navbar/navbarTop.scss";
import "../navbar/Overlay.scss";

const NavBarTop: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleSidebarGender, setToggleSidebarGender] = useState(false);

  const toggleCartValue = useAppSelector((state) => state.cart.toggleCart);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const quantity = useAppSelector((state) => state.cart.totalQuantity);

  const [gender, setGender] = useState("");
  function GenderMen() {
    setGender("men");
  }
  function GenderWoman() {
    setGender("woman");
  }

  const [showMenSubItems, setShowMenSubItems] = useState(false);

  const toggleMenSubItems = () => {
    setShowMenSubItems(!showMenSubItems);
  };
  const [showWomenSubItems, setShowWomenSubItems] = useState(false);

  const toggleWomenSubItems = () => {
    setShowWomenSubItems(!showWomenSubItems);
  };

  function linkShirts() {
    navigate("/plp", { state: { category: "shirt", gender: gender } });
  }
  function linkPants() {
    navigate("/plp", { state: { category: "pants", gender: gender } });
  }
  function linkShoes() {
    navigate("/plp", { state: { category: "shoes", gender: gender } });
  }

  function linkAll() {
    navigate("/plp", { state: { gender: gender } });
  }

  return (
    <>
      <nav className="navbar_top">
        <div
          onClick={() => {
            setToggleSidebarGender(!toggleSidebarGender);
          }}
        >
          <HamburgerMenu />
        </div>
        <div className="navbar_logo">
          <Logo />
        </div>
        <div className="navbar_center">
          <div
            className="navbar_categories"
            onClick={() => {
              setToggle(!toggle), GenderMen();
            }}
          >
            <FormattedMessage id="navbarTop.men" defaultMessage="Men" />
          </div>
          <div
            className="navbar_categories"
            onClick={() => {
              setToggle(!toggle), GenderWoman();
            }}
          >
            <FormattedMessage id="navbarTop.women" defaultMessage="Women" />
          </div>
          <div className="navbar_categories">
            {/* <Link to="/aboutUs" style={mode == "dark" ? { textDecoration: "none", color: "white" } : { textDecoration: "none", color: "dark" }}> */}
            <FormattedMessage
              id="navbarTop.aboutUs"
              defaultMessage="About Us"
            />
            {/* </Link> */}
          </div>
        </div>
        <div className="navbar_right">
          {/* icona Cart */}
          <div
            onClick={() => {
              dispatch(toggleCart());
            }}
            className="navbar_button_item"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="50px"
              viewBox="0 -0.5 25 25"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.50035 9.3C5.487 8.31988 6.27024 7.51426 7.25035 7.5H17.7503C18.7305 7.51426 19.5137 8.31988 19.5004 9.3V17.4C19.5276 19.3605 17.9608 20.972 16.0004 21H9.00035C7.03989 20.972 5.4731 19.3605 5.50035 17.4V9.3Z"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.0004 10.2V6.6C16.0276 4.63953 14.4608 3.02797 12.5004 3C10.5399 3.02797 8.9731 4.63953 9.00035 6.6V10.2"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div
              className="quantity-number"
              style={quantity <= 0 ? { display: "none" } : { display: "flex" }}
            >
              {quantity}
            </div>
          </div>
        </div>
        <div className="navbar_hidden">
          {/*  Al click della sezione centrale navbar si aprirà la sezione categoria(maglietta,scarpe,pantaloni,tutto) della navbar */}
          {toggle && (
            <div className="categories_hidden">
              <div className="category_border"></div>
              <div
                className="single_category"
                onClick={() => {
                  linkAll(), setToggle(!toggle);
                }}
              >
                All
              </div>
              <div className="category_border"></div>
              <div
                className="single_category"
                onClick={() => {
                  linkShirts(), setToggle(!toggle);
                }}
              >
                Shirt
              </div>
              <div className="category_border"></div>
              <div
                className="single_category"
                onClick={() => {
                  linkPants(), setToggle(!toggle);
                }}
              >
                Pants
              </div>
              <div className="category_border"></div>
              <div
                className="single_category"
                onClick={() => {
                  linkShoes(), setToggle(!toggle);
                }}
              >
                Shoes
              </div>
              <div className="category_border"></div>
            </div>
          )}
        </div>
      </nav>
      {
        <div
          className="sidebar_hidden2"
          style={toggleSidebarGender ? { left: "0" } : { left: "-30%" }}
        >
          <div className="category_border"></div>

          {/* Categoria Uomo*/}
          <div
            className="navbar_categories"
            onClick={() => {
              toggleMenSubItems(),
                GenderMen(),
                setShowWomenSubItems(showWomenSubItems);
            }}
          >
            Men
          </div>
          {showMenSubItems && (
            <>
              <div
                className="single_category"
                onClick={() => {
                  linkAll(),
                    setToggleSidebarGender(!toggleSidebarGender),
                    setShowMenSubItems(!showMenSubItems);
                }}
              >
                All
              </div>
              <div
                className="single_category"
                onClick={() => {
                  linkShirts(),
                    setToggleSidebarGender(!toggleSidebarGender),
                    setShowMenSubItems(!showMenSubItems);
                }}
              >
                Shirt
              </div>
              <div
                className="single_category"
                onClick={() => {
                  linkPants(),
                    setToggleSidebarGender(!toggleSidebarGender),
                    setShowMenSubItems(!showMenSubItems);
                }}
              >
                Pants
              </div>
              <div
                className="single_category"
                onClick={() => {
                  linkShoes(),
                    setToggleSidebarGender(!toggleSidebarGender),
                    setShowMenSubItems(!showMenSubItems);
                }}
              >
                Shoes
              </div>
            </>
          )}

          {/* Categoria Donna*/}
          <div className="category_border"></div>
          <div
            className="navbar_categories"
            onClick={() => {
              toggleWomenSubItems(),
                GenderWoman(),
                setShowMenSubItems(showMenSubItems);
            }}
          >
            Women
          </div>
          {showWomenSubItems && (
            <>
              <div
                className="single_category"
                onClick={() => {
                  linkAll(),
                    setToggleSidebarGender(!toggleSidebarGender),
                    setShowWomenSubItems(!showWomenSubItems);
                }}
              >
                All
              </div>
              <div
                className="single_category"
                onClick={() => {
                  linkShirts(),
                    setToggleSidebarGender(!toggleSidebarGender),
                    setShowWomenSubItems(!showWomenSubItems);
                }}
              >
                Shirt
              </div>
              <div
                className="single_category"
                onClick={() => {
                  linkPants(),
                    setToggleSidebarGender(!toggleSidebarGender),
                    setShowWomenSubItems(!showWomenSubItems);
                }}
              >
                Pants
              </div>
              <div
                className="single_category"
                onClick={() => {
                  linkShoes(),
                    setToggleSidebarGender(!toggleSidebarGender),
                    setShowWomenSubItems(!showWomenSubItems);
                }}
              >
                Shoes
              </div>
            </>
          )}
          <div className="category_border"></div>
        </div>
      }
    </>
  );
};

export default NavBarTop;
