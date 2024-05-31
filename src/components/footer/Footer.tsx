import { FormattedMessage } from "react-intl";
import { useDarkMode } from "../darkmode/DarkmodeContext";
import "../footer/Footer.scss";
import NewsLetterForm from "../landingPage/newsLetter/form/NewsLetterForm";
import Logo from "../logo/Logo";
import { Link } from "react-router-dom";
import { useLanguageContext } from "../languageSelector/LanguageContext";
import LanguageSelector from "../languageSelector/LanguageSelector";


const Footer = () => {
  const { mode } = useDarkMode();
  const { changeLanguage, locale } = useLanguageContext();
  

  return (
    <>
      <footer className={mode}>
        <div className={`footer-top ${mode}`}>
          <div className={`footer-logo ${mode}`}>
            <Logo />
          </div>
          <div className="footer-newsletter">
            <NewsLetterForm />
          </div>
        </div>
        <div className={`footer-bottom ${mode}`}>
          <div className="footer-section">
            <h3>
              <FormattedMessage
                id="footer.followUse"
                defaultMessage="Follow Us: "
              />
            </h3>
            <ul className={mode}>
              <li>
                <a className={mode} href="#">
                  Facebook
                </a>
              </li>
              <li>
                <a className={mode} href="#">
                  Twitter
                </a>
              </li>
              <li>
                <a className={mode} href="#">
                  Instagram
                </a>
              </li>
              <li>
                <a className={mode} href="#">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>
              <FormattedMessage
                id="footer.ourProducts"
                defaultMessage="Our Products"
              />
            </h3>
            <ul>
              <Link to={`/plp/men/}`}>
                <li>
                  <a className={mode} href="">
                    <FormattedMessage
                      id="footer.menClothes"
                      defaultMessage="Men Clothes"
                    />
                  </a>
                </li>
              </Link>
              <Link to={`/plp/woman/`}>
                <li>
                  <a className={mode} href="">
                    <FormattedMessage
                      id="footer.womenClothes"
                      defaultMessage="Women Clothes"
                    />
                  </a>
                </li>
              </Link>
              <Link to={`/plp/woman/`}>
              <li>
                <a className={mode} href="">
                  <FormattedMessage
                    id="footer.accessories"
                    defaultMessage="Accessories"
                  />{" "}
                </a>
              </li>
              </Link>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className={mode}>
              <FormattedMessage
                id="footer.clientService"
                defaultMessage="Client Service"
              />
            </h3>
            <ul>
              <li>
                <a className={mode} href="#">
                  <FormattedMessage
                    id="footer.returnsAndRefunds"
                    defaultMessage="Returns and Refunds"
                  />
                </a>
              </li>
              <li>
                <a className={mode} href="#">
                  <FormattedMessage
                    id="footer.promoAndPayment"
                    defaultMessage="Promo and Payment"
                  />
                </a>
              </li>
              <li>
                <a className={mode} href="#">
                  <FormattedMessage
                    id="footer.trackYourOrder"
                    defaultMessage="Track your order"
                  />
                </a>
              </li>
              <li>
                <a className={mode} href="#">
                  <FormattedMessage
                    id="footer.contactUs"
                    defaultMessage="Contact Us"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className={mode}>
              <FormattedMessage
                id="footer.ourService"
                defaultMessage="Our Service"
              />
            </h3>
            <ul>
              <li>
                <a className={mode} href="#">
                  {" "}
                  <FormattedMessage
                    id="footer.studentDiscount"
                    defaultMessage="Student Discount"
                  />{" "}
                </a>
              </li>
              <li>
                <a className={mode} href="#">
                  <FormattedMessage
                    id="footer.inviteAFriend"
                    defaultMessage="Invite a friend"
                  />
                </a>
              </li>
              <li>
                <LanguageSelector locale={locale} changeLanguage={changeLanguage} />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
