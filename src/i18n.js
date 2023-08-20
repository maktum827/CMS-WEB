import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json';
import bnTranslation from './locales/bn.json';
import arTranslation from './locales/ar.json';

const resources = {
    en: {
        translation: enTranslation
    },
    bn: {
        translation: bnTranslation
    },
    ar: {
        translation: arTranslation
    }
};

// Retrieve stored language or default to 'en'
const storedLanguage = localStorage.getItem('language') || 'en';

i18n.use(initReactI18next).init({
    resources,
    lng: storedLanguage, // Use stored language or default
    fallbackLng: 'en', // Fallback language
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
