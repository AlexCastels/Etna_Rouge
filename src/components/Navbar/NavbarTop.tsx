import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { toggleCart } from "../../redux/slices/cartSlice";
import HamburgerMenu from "../hamburger/HamburgerMenu";
import Logo from "../logo/Logo";
import "./NavbarTop.scss";
import "./Overlay.scss";
import { useDarkMode } from "../darkmode/DarkModeContext";

const NavBarTop: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleSidebarGender, setToggleSidebarGender] = useState(false);

  const toggleCartValue = useAppSelector((state) => state.cart.toggleCart);
  const navigate = useNavigate();
  const { mode } = useDarkMode();
  const dispatch = useAppDispatch();
  const quantity = useAppSelector((state) => state.cart.totalQuantity);

  const [gender, setGender] = useState("");
  const [showMenSubItems, setShowMenSubItems] = useState(false);
  const [showWomenSubItems, setShowWomenSubItems] = useState(false);

  const GenderMen = () => setGender("men");
  const GenderWoman = () => setGender("woman");

  const toggleMenSubItems = () => setShowMenSubItems(!showMenSubItems);
  const toggleWomenSubItems = () => setShowWomenSubItems(!showWomenSubItems);

  const linkShirts = () => navigate(`/plp/${gender}/shirt`, { state: { category: "shirt", gender } });
  const linkPants = () => navigate(`/plp/${gender}/pants`, { state: { category: "pants", gender } });
  const linkShoes = () => navigate(`/plp/${gender}/shoes`, { state: { category: "shoes", gender } });
  const linkAll = () => navigate(`/plp/${gender}`, { state: { gender } });

  return (
    <>
      <nav className={`navbar_top ${mode}`}>
        <div onClick={() => setToggleSidebarGender(!toggleSidebarGender)}>
          <HamburgerMenu />
        </div>
        <div className="navbar_logo">
          <Logo />
        </div>
        <div className="navbar_center">
          <div onClick={() => { setToggle(!toggle); GenderMen(); }} className="navbar_categories">
            <FormattedMessage id="navbarTop.men" defaultMessage="Men" />
          </div>
          <div onClick={() => { setToggle(!toggle); GenderWoman(); }} className="navbar_categories">
            <FormattedMessage id="navbarTop.women" defaultMessage="Women" />
          </div>
          <div className="navbar_categories">
            <Link className={mode} to="/aboutUs">
              <FormattedMessage id="navbarTop.aboutUs" defaultMessage="About Us" />
            </Link>
          </div>
        </div>
        <div className="navbar_right">
          <div onClick={() => dispatch(toggleCart())} className="navbar_button_item">
            <svg className={mode} xmlns="http://www.w3.org/2000/svg" fill="#000000" width="75%" height="75%" viewBox="0 0 32 32" version="1.1">
              <path d="M27 4.96h-5.975v-1.918c0-1.655-1.346-3-3-3h-3.989c-1.655 0-3 1.345-3 3v1.918h-6.037c-1.104 0-2 0.896-2 2v22.999c0 1.105 0.896 2 2 2h22c1.105 0 2-0.895 2-2v-22.999c0-1.104-0.895-2-2-2h0zM13.037 3.042c0-0.552 0.448-1 1-1h3.989c0.552 0 1 0.448 1 1v1.918h-5.989v-1.918zM27 29.959h-22v-22.999h6.037v2.058s-0.027 0.999 0.994 0.999c1.125 0 1.006-0.999 1.006-0.999v-2.058h5.989v2.058s-0.067 1.004 0.996 1.004c1 0 1.004-1.004 1.004-1.004v-2.058h5.974v22.999z" />
            </svg>
            <div className="quantity-number" style={quantity <= 0 ? { display: "none" } : { display: "flex" }}>
              {quantity}
            </div>
          </div>
        </div>
        {toggle && (
          <div className={`navbar_hidden ${mode}`}>
            <div className={`categories_hidden ${mode}`}>
              <div className="category_border"></div>
              <div className="single_category" onClick={linkAll}>
                <FormattedMessage id="navHidden.all" defaultMessage="All" />
              </div>
              <div className="category_border"></div>
              <div className="single_category" onClick={linkShirts}>
                <FormattedMessage id="navHidden.shirts" defaultMessage="Shirts" />
              </div>
              <div className="category_border"></div>
              <div className="single_category" onClick={linkPants}>
                <FormattedMessage id="navHidden.pants" defaultMessage="Pants" />
              </div>
              <div className="category_border"></div>
              <div className="single_category" onClick={linkShoes}>
                <FormattedMessage id="navHidden.shoes" defaultMessage="Shoes" />
              </div>
              <div className="category_border"></div>
            </div>
          </div>
        )}
      </nav>

      {toggleSidebarGender && (
        <div className={`sidebar_hidden2 ${mode}`}>
          <div className="category_border"></div>
          <div className="single_category" onClick={toggleMenSubItems}>
            Men
          </div>
          {showMenSubItems && (
            <>
              <div className="single_category" onClick={linkAll}>
                <FormattedMessage id="navHidden.all" defaultMessage="All" />
              </div>
              <div className="single_category" onClick={linkShirts}>
                <FormattedMessage id="navHidden.shirts" defaultMessage="Shirts" />
              </div>
              <div className="single_category" onClick={linkPants}>
                <FormattedMessage id="navHidden.pants" defaultMessage="Pants" />
              </div>
              <div className="single_category" onClick={linkShoes}>
                <FormattedMessage id="navHidden.shoes" defaultMessage="Shoes" />
              </div>
            </>
          )}
          <div className="category_border"></div>
          <div className="single_category" onClick={toggleWomenSubItems}>
            <FormattedMessage id="navbarTop.women" defaultMessage="Women" />
          </div>
          {showWomenSubItems && (
            <>
              <div className="single_category" onClick={linkAll}>
                <FormattedMessage id="navHidden.all" defaultMessage="All" />
              </div>
              <div className="single_category" onClick={linkShirts}>
                <FormattedMessage id="navHidden.shirts" defaultMessage="Shirts" />
              </div>
              <div className="single_category" onClick={linkPants}>
                <FormattedMessage id="navHidden.pants" defaultMessage="Pants" />
              </div>
              <div className="single_category" onClick={linkShoes}>
                <FormattedMessage id="navHidden.shoes" defaultMessage="Shoes" />
              </div>
            </>
          )}
          <div className="category_border"></div>
          <div className="single_category">
            <Link className={mode} to="/aboutUs">
              <FormattedMessage id="navbarTop.aboutUs" defaultMessage="About Us" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBarTop;
