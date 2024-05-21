
import "../footer/Footer.scss"
import NewsLetterForm from "../landingPage/newsLetter/form/NewsLetterForm"

const Footer = () => {
    return(
        <>
        <footer>
    <div className="footer-top">
        <div className="footer-logo">
            <img src="../src/assets/EtnaRougeLogo.webp" alt="Logo" />
        </div>
        <div className="footer-newsletter">
            <NewsLetterForm/>     
        </div>
    </div>
    <div className="footer-bottom">
        <div className="footer-section">
            <h3>Follow Us:</h3>
            <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">LinkedIn</a></li>
            </ul>
        </div>
        <div className="footer-section">
            <h3>Our Proucts:</h3>
            <ul>
                <li><a href="#">Abbigliamento Uomo</a></li>
                <li><a href="#">Abbigliamento Donna</a></li>
                <li><a href="#">Accessori</a></li>
            </ul>
        </div>
        <div className="footer-section">
            <h3>Client Service:</h3>
            <ul>
                <li><a href="#">Resi e Rimborsi</a></li>
                <li><a href="#">Spedizioni e Spese</a></li>
                <li><a href="#">Pagamenti e Promozioni</a></li>
                <li><a href="#">Traccia il tuo ordine</a></li>
                <li><a href="#">Contattaci</a></li>
            </ul>
        </div>
        <div className="footer-section">
            <h3>Our Service:</h3>
            <ul>
                <li><a href="#">Sconto Studenti</a></li>
                <li><a href="#">Invita un amico</a></li>
                <li><a href="#">Doma</a></li>
                <li><a href="#">Sconto Studenti</a></li>
            </ul>
        </div>
        <div className="footer-section">
            <h3>Legal Area:</h3>
            <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms and Conditions</a></li>
                <li><a href="#">Credits</a></li>
            </ul>
        </div>
    </div>
</footer>
        </>
    )
}

export default Footer