import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

//i18n configurations for multilanguage support
i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}.json', //path to JSON file of different languages
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if translation is missing
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
