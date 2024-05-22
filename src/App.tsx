import React, { ChangeEvent, useState } from "react";
import { useDarkMode } from "./components/darkmode/DarkModeContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IntlProvider } from "react-intl";
import NavBarTop from "./components/Navbar/NavBarTop";
import LandingPage from "./components/landingPage/LandingPage";
import DiscoverMore from "./components/discoverMore/DiscoverMore";
import Cart from "./components/cart/Cart";
import Plp from "./components/plp/Plp";
import Pdp from "./components/pdp/Pdp";
import { PayForm } from "./components/payment/PayForm";
import { CreditCardForm } from "./components/payment/CreditCardForm";
import { SelectPayment } from "./components/payment/SelectPayment";
import { ThankYouPageCard } from "./components/payment/ThankYouPageCard";
import { ThankYouPageDelivery } from "./components/payment/ThankYouPageDelivery";
import enText from "./utils/languages/english.json";
import itText from "./utils/languages/italian.json";
import esText from "./utils/languages/espanol.json";
import frText from "./utils/languages/french.json";
import "./style.scss";
import "./components/pdp/Pdp.scss";
import LanguageSelector from "./components/languageSelector/LanguageSelector";

function App() {
  const [locale, setLocale] = useState("en");
  const { mode, setMode } = useDarkMode();

  console.log(mode);

  interface Messages {
    [key: string]: any;
  }

  const messages: Messages = {
    en: enText,
    it: itText,
    es: esText,
    fr: frText,
  };

  const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    setLocale(e.target.value);
  };

  return (
    <div className={`main-cont ${mode}`}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <LanguageSelector locale={locale} changeLanguage={changeLanguage} />
        <BrowserRouter>
          <NavBarTop />

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/discover" element={<DiscoverMore />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/plp" element={<Plp />} />
            <Route path="/pdp/:id" element={<Pdp />} />
            <Route path="/pay" element={<PayForm />} />
            <Route path="/credit-card" element={<CreditCardForm />} />
            <Route path="/select-payment" element={<SelectPayment />} />
            <Route path="/thank-you-card" element={<ThankYouPageCard />} />
            <Route
              path="/thank-you-delivery"
              element={<ThankYouPageDelivery />}
            />
          </Routes>
        </BrowserRouter>
        <div className="switch">
          <button onClick={() => setMode(mode === "dark" ? "light" : "dark")}>
            Switch Mode
          </button>
        </div>
      </IntlProvider>
    </div>
  );
}

export default App;
