import React from 'react';
import { useLanguage } from 'lib/hooks/useLanguage';
import './styles.css';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <button
        className={`language-button ${language === 'en' ? 'active' : ''}`}
        onClick={() => setLanguage('en')}
      >
        <img
          src="/images/flags/gb.svg"
          alt="English"
          width={24}
          height={24}
        />
      </button>
      <button
        className={`language-button ${language === 'pl' ? 'active' : ''}`}
        onClick={() => setLanguage('pl')}
      >
        <img
          src="/images/flags/pl.svg"
          alt="Polski"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
}

export default LanguageSwitcher;