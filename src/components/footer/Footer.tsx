import Logo from "../Logo/Logo";
import { useDarkMode } from "../darkmode/DarkModeContext";
import "../footer/Footer.scss";
import NewsLetterForm from "../landingPage/newsLetter/form/NewsLetterForm";


const Footer = () => {
  const { mode } = useDarkMode();
  return (
    <>
      <footer>
        <div className={`footer-top ${mode}`}>
          <div className="footer-logo">
            <Logo />
          </div>
          <div className="footer-newsletter">
            <NewsLetterForm />
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-section">
          
                      <h3 className={mode}>Follow Us:</h3>
            <ul>
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
            <h3 className={mode}>Our Proucts:</h3>
            <ul>
              <li>
                <a className={mode} href="#">
                  Abbigliamento Uomo
                </a>
              </li>
              <li>
                <a className={mode} href="#">
                  Abbigliamento Donna
                </a>
              </li>
              <li>
                <a className={mode} href="#">
                  Accessori
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className={mode}>Client Service:</h3>
            <ul>
              <li>
                <a className={mode} href="#">
                  Resi e Rimborsi
                </a>
              </li>
              <li>
                <a className={mode} href="#">
                  Spedizioni e Spese
                </a>
              </li>
              <li>
                <a className={mode} href="#">
                  Pagamenti e Promozioni
                </a>
              </li>
              <li>
                <a className={mode} href="#">
                  Traccia il tuo ordine
                </a>
              </li>
              <li>
                <a className={mode} href="#">
                  Contattaci
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className={mode}>Our Service:</h3>
            <ul>
              <li>
                <a className={mode} href="#">
                  Sconto Studenti
                </a>
              </li>
              <li>
                <a className={mode} href="#">
                  Invita un amico
                </a>
              </li>
              <li>
                <a className={mode} href="#">
                  Doma
                </a>
              </li>
              <li>
                <a className={mode} href="#">
                  Sconto Studenti
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="footer-section">
            <h3>Legal Area:</h3>
            <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms and Conditions</a></li>
                <li><a href="#">Credits</a></li>
            </ul>
        </div> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
