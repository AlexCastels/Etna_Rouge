import React, { ChangeEvent } from 'react';
import './languageSelector.scss'

interface LanguageSelectorProps {
  locale: string;
  changeLanguage: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ locale, changeLanguage }) => {
  return (
    <div className="lang-select-container">
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
    </div>
  );
};

export default LanguageSelector;
