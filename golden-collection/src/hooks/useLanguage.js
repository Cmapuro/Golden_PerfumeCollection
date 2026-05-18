import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { t } from '../data/translations';

export function useLanguage() {
  const { language, setLanguage, toggleLanguage } = useContext(LanguageContext);

  const translate = (key) => t(key, language);

  return {
    language,
    setLanguage,
    toggleLanguage,
    translate,
    t: translate,
  };
}
