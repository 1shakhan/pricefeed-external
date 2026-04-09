import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json';
import kkTranslation from './locales/kk.json';
import ruTranslation from './locales/ru.json';

const storedLanguage = localStorage.getItem('language');
const browserLanguage = navigator.language.split('-')[0];
const supportedLanguages = ['ru', 'kk', 'en'];
const initialLanguage = supportedLanguages.includes(storedLanguage ?? '')
  ? storedLanguage!
  : supportedLanguages.includes(browserLanguage)
    ? browserLanguage
    : 'ru';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      ru: {
        translation: ruTranslation,
      },
      kk: {
        translation: kkTranslation,
      },
    },
    lng: initialLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

i18n.on('languageChanged', (language) => {
  localStorage.setItem('language', language);
});

export default i18n;
