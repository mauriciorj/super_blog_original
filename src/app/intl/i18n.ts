import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import navigator from './detector/navigator';
import localStorage from './detector/localStorage';
import sessionStorage from './detector/sessionStorage';
import { ptBr } from './pt-br';
import { enUs } from './en-us';

const resources = {
  'en-US': {
    translation: {
      ...enUs,
    },
  },
  'pt-BR': {
    translation: {
      ...ptBr,
    },
  },
};

const languageDetector = new LanguageDetector();
languageDetector.addDetector(localStorage);
languageDetector.addDetector(sessionStorage);
languageDetector.addDetector(navigator);

const DETECTION_OPTIONS = {
  order: ['localStorage', 'sessionStorage', 'navigator'],
  caches: ['localStorage'],
  excludeCacheFor: ['cimode'],

  // keys or params to lookup language from
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupSessionStorage: 'i18nextLng',

  // optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: 'myDomain',
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    detection: DETECTION_OPTIONS,
    fallbackLng: 'en-us',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
