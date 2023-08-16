import { InitOptions } from 'i18next';

import en from './locales/en';
import pt from './locales/pt';

export const fallbackLng = 'en';
export const languages = [fallbackLng, 'pt'];

export const getOptions = (lng = fallbackLng): InitOptions => ({
  supportedLngs: languages,
  fallbackLng,
  lng,
  resources: {
    en: { translation: en },
    pt: { translation: pt },
  },
});
