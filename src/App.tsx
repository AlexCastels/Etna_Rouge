import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IntlProvider } from "react-intl";
import NavBarTop from "./components/navbar/NavbarTop.tsx";
import LandingPage from "./components/landingPage/LandingPage.tsx";
import DiscoverMore from "./components/discoverMore/DiscoverMore.tsx";
import Cart from "./components/cart/Cart.tsx";
import { PayForm } from "./components/payment/PayForm.tsx";
import { CreditCardForm } from "./components/payment/CreditCardForm.tsx";
import { SelectPayment } from "./components/payment/SelectPayment.tsx";
import { ThankYouPageCard } from "./components/payment/ThankYouPageCard.tsx";
import { ThankYouPageDelivery } from "./components/payment/ThankYouPageDelivery.tsx";
import enText from "./utils/languages/english.json";
import itText from "./utils/languages/italian.json";
import esText from "./utils/languages/espanol.json";
import frText from "./utils/languages/french.json";
import "./style.scss";
import { Plp } from "./components/plp/Plp.tsx";
import Pdp from "./components/pdp/Pdp.tsx";
import AboutUs from "./components/aboutUs/aboutUs.tsx";
import NavBarBottom from "./components/navbar/NavbarBottom.tsx";
import Switcher from "./components/darkmode/Switcher.tsx";
import LanguageSelector from "./components/languageSelector/LanguageSelector.tsx";

interface Messages {
  [key: string]: any;
}

function App() {
  const [locale, setLocale] = useState("en");

  const messages: Messages = {
    en: enText,

    it: itText,

    es: esText,

    fr: frText,
  }[locale];

  const changeLanguage = (language: string) => {
    setLocale(language);
  };

  return (
    <>
      <Switcher /> 
      <IntlProvider locale={locale} messages={messages}>
      <LanguageSelector locale={locale} changeLanguage={changeLanguage} /> 
        <BrowserRouter>
          {/* <NavBarTop /> */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
             <Route path="/aboutUs" element={<AboutUs />} /> 
            <Route path="/discover" element={<DiscoverMore />} />
            <Route path="/plp/:gender" element={<Plp />} />
            <Route path="/plp/:gender/:category" element={<Plp />} />
            <Route path="/pdp/:id" element={<Pdp />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/DeliveryForm" element={<PayForm />} />
            <Route path="/SelectPayment" element={<SelectPayment />} />
            <Route path="/CreditCardForm" element={<CreditCardForm />} />
            <Route path="/ThankYouCard" element={<ThankYouPageCard />} />
            <Route
              path="/ThankYouDelivery"
              element={<ThankYouPageDelivery />}
            />
          </Routes>
    {/*       <NavBarBottom /> */}
        </BrowserRouter>
      </IntlProvider>
    </>
  );
}

export default App;
