import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IntlProvider } from "react-intl";
import NavBarTop from "./components/Navbar/NavBarTop.tsx";
import LandingPage from "./components/landingPage/LandingPage.tsx";
import DiscoverMore from "./components/discoverMore/DiscoverMore.tsx";
import Cart from "./components/cart/Cart.tsx";
import { PayForm } from "./components/payment/PayForm.tsx";
import { CreditCardForm } from "./components/payment/CreditCardForm.tsx";
 import Pdp from "./components/pdp/Pdp.tsx"; 
import { SelectPayment } from "./components/payment/SelectPayment.tsx";
import { ThankYouPageCard } from "./components/payment/ThankYouPageCard.tsx";
import { ThankYouPageDelivery } from "./components/payment/ThankYouPageDelivery.tsx"; 
import enText from "./utils/languages/english.json";
import itText from "./utils/languages/italian.json";
import esText from "./utils/languages/espanol.json";
import frText from "./utils/languages/french.json";
import "./style.scss";
import { Plp } from "./components/plp/Plp.tsx";
/* import "./components/PDP/Pdp.scss"; */


import AboutUs from "./components/aboutUs/aboutUs.tsx";

function App() {
  const [locale, setLocale] = useState("en");

  const messages = {
    en: enText,

    it: itText,

    es: esText,

    fr: frText,
  };

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocale(e.target.value);

    console.log(locale);
  };

  return (
    <>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <div className="select-container">
          <select
            id="languageSelect"
            className="select-lang"
            onChange={changeLanguage}
            value={locale}
          >
            <option value="en">Chose language</option>

            <option value="it">Italian</option>

            <option value="en">English</option>

            <option value="es">Spanish</option>
            
            <option value="fr">French</option>
          </select>

          <BrowserRouter>
             <NavBarTop /> 
            <Routes>
              <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/" element={<LandingPage />} />
              <Route path="/discover" element={<DiscoverMore />} />
              <Route path="/plp" element={<Plp />} /> 
              <Route path="/Cart" element={<Cart />} /> 
                <Route path="/SelectPayment" element={<SelectPayment />} />
              <Route path="/DeliveryForm" element={<PayForm />} />
              <Route path="/CreditCardForm" element={<CreditCardForm />} />
              <Route path="/ThankYouCard" element={<ThankYouPageCard />} />
              <Route path="/ThankYouDelivery"  element={<ThankYouPageDelivery />} />
            <Route path="/pdp/:id" element={<Pdp />} /> 
            </Routes>
         {/*    <NavBarBottom /> */}
          </BrowserRouter>
        </div>
      </IntlProvider>
    </>

  );
}

export default App;
