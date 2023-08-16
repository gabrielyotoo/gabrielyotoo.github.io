import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { getOptions } from './config';

const initI18next = async (language: string) => {
  return (
    createInstance()
      .use(initReactI18next)
      // .use(resourcesToBackend((lng: string) => import(`./locales/${lng}.json`)))
      .init(getOptions(language))
  );
};

export async function getTranslation(language: string) {
  const i18nextInstance = await initI18next(language);

  return {
    t: i18nextInstance,
  };
}
