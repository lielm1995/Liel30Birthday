import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import English translations
import enCard from './translations/en/card.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      card: enCard,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  ns: ['card'],
  defaultNS: 'card',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
