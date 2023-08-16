import 'i18next';
import en from '@/app/i18n/locales/en';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'en-US';
    resources: {
      'en-US': typeof en;
    };
  }
}
