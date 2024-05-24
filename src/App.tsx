import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IntlProvider } from "react-intl";
import LandingPage from "./components/landingPage/LandingPage.tsx";
import DiscoverMore from "./components/discoverMore/DiscoverMore.tsx";
import Cart from "./components/cart/Cart.tsx";
import { PayForm } from "./components/payment/PayForm.tsx";
import { CreditCardForm } from "./components/payment/CreditCardForm.tsx";
import  Pdp  from "./components/pdp/Pdp.tsx";
import { SelectPayment } from "./components/payment/SelectPayment.tsx";
import { ThankYouPageCard } from "./components/payment/ThankYouPageCard.tsx";
import { ThankYouPageDelivery } from "./components/payment/ThankYouPageDelivery.tsx";
import LanguageSelector from "./components/languageSelector/LanguageSelector";
import Switcher from "./components/darkmode/Switcher";
import enText from "./utils/languages/english.json";
import itText from "./utils/languages/italian.json";
import esText from "./utils/languages/espanol.json";
import frText from "./utils/languages/french.json";
import { Plp } from "./components/plp/Plp.tsx";
import NavBarBottom from "./components/navbar/NavbarBottom.tsx";
import "./style.scss";

function App() {
  const [locale, setLocale] = useState("en");

  interface Messages {
    [key: string]: any;
  }

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
      <IntlProvider locale={locale} messages={messages[locale]}>
        <LanguageSelector locale={locale} changeLanguage={changeLanguage} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            {/* <Route path="/aboutUs" element={<AboutUs />} /> */}
            <Route path="/discover" element={<DiscoverMore />} />
            <Route path="/plp/men" element={<Plp />} />
            <Route path="/plp/woman" element={<Plp />} />
            <Route path="/plp/woman/shirt" element={<Plp />} />
            <Route path="/plp/woman/pants" element={<Plp />} />
            <Route path="/plp/woman/shoes" element={<Plp />} />
            <Route path="/plp/men/shirt" element={<Plp />} />
            <Route path="/plp/men/pants" element={<Plp />} />
            <Route path="/plp/men/shoes" element={<Plp />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/SelectPayment" element={<SelectPayment />} />
            <Route path="/DeliveryForm" element={<PayForm />} />
            <Route path="/CreditCardForm" element={<CreditCardForm />} />
            <Route path="/ThankYouCard" element={<ThankYouPageCard />} />
            <Route
              path="/ThankYouDelivery"
              element={<ThankYouPageDelivery />}
            />
            <Route path="/pdp/:id" element={<Pdp />} />
          </Routes>
          <NavBarBottom />
        </BrowserRouter>
      </IntlProvider>
    </>
  );
}

export default App;
