import React, { useState, MouseEvent } from "react";
import language from "../../assets/languages.png";
import "./languageSelector.scss";

interface LanguageSelectorProps {
  locale: string;
  changeLanguage: (language: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  changeLanguage,
}) => {
  const [openSelect, setOpenSelect] = useState<boolean>(false);
  
  

  const handleButtonClick = () => {
    setOpenSelect(!openSelect);
  };

  const handleLanguageClick = (e: MouseEvent<HTMLLIElement>) => {
    const selectedLanguage = e.currentTarget.getAttribute("value");
    if (selectedLanguage) {
      changeLanguage(selectedLanguage);
      setOpenSelect(false);
    }
  };

  return (
    <div className="lang-select-container">
      <button onClick={handleButtonClick}>
        <img src={language} alt="language image" />
      </button>

      {openSelect && (
        <ul className="lang-options">
          <li value="it" onClick={handleLanguageClick}>
            Italian
          </li>
          <li value="en" onClick={handleLanguageClick}>
            English
          </li>
          <li value="fr" onClick={handleLanguageClick}>
            French
          </li>
          <li value="es" onClick={handleLanguageClick}>
            Spanish
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
