import enText from "../../utils/languages/english.json";
import itText from "../../utils/languages/italian.json";
import esText from "../../utils/languages/espanol.json";
import frText from "../../utils/languages/french.json";
import { ReactNode, createContext, useContext, useState } from "react";


interface LanguageContextType{
    messages: any;
    locale: string;
    setLocale: React.Dispatch<React.SetStateAction<string>>;
    changeLanguage:(language: string) => void
}


const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [locale, setLocale] = useState("en");  
    
  const messages: any = {
    en: enText,
    it: itText,
    es: esText,
    fr: frText,
    }[locale];
    
    
  const changeLanguage = (language : string) => {
    setLocale(language);
    };
    
    return ( <LanguageContext.Provider value={{locale, setLocale, messages, changeLanguage}} >
        {children}
        </LanguageContext.Provider>
    )
}


export const useLanguageContext = () => {
    const context = useContext(LanguageContext);
    
    if (!context) {
    throw new Error("useLanguageContext must be used within a LanguageContextProvider");
  }
  return context;
}

