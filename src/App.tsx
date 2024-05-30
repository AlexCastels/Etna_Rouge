import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IntlProvider } from "react-intl";
import Cart from "./components/cart/Cart.tsx";
import { PayForm } from "./components/payment/PayForm.tsx";
import { CreditCardForm } from "./components/payment/CreditCardForm.tsx";
import { SelectPayment } from "./components/payment/SelectPayment.tsx";
import { ThankYouPageCard } from "./components/payment/ThankYouPageCard.tsx";
import { ThankYouPageDelivery } from "./components/payment/ThankYouPageDelivery.tsx";
import { Plp } from "./components/plp/Plp.tsx";
import Pdp from "./components/pdp/Pdp.tsx";
import AboutUs from "./components/aboutUs/aboutUs.tsx";
import Switcher from "./components/darkmode/Switcher.tsx";
import ErrorPage from "./components/errorPage/ErrorPage.tsx";
import LandingPage from "./components/landingPage/LandingPage.tsx";
import DiscoverContent from "./components/landingPage/discoverMore/DiscoverContent.tsx";
import { useLanguageContext } from "./components/languageSelector/LanguageContext.tsx";

interface Messages {
  [key: string]: any;
}

function App() {
  const {locale, messages} = useLanguageContext()
  

  return (
    <>
      <Switcher />
      <IntlProvider locale={locale} messages={messages}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/discover" element={<DiscoverContent />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/plp/:gender" element={<Plp />} />
            <Route path="/plp/:gender/:category" element={<Plp />} />
            <Route path="/pdp/:id" element={<Pdp />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/deliveryForm" element={<PayForm />} />
            <Route path="/selectPayment" element={<SelectPayment />} />
            <Route path="/creditCardForm" element={<CreditCardForm />} />
            <Route path="/thankYouCard" element={<ThankYouPageCard />} />
            <Route path="/thankYouDelivery" element={<ThankYouPageDelivery />}/>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </IntlProvider>
    </>
  );
}

export default App;
