import { getTranslation } from '@/app/i18n';
import { languages } from '@/app/i18n/config';
import { NextJsPage } from '@/app/types/pages';

export async function generateStaticParams() {
  return languages.map((language) => ({ lng: language }));
}

const Experience = async ({ params: { lng } }: NextJsPage) => {
  const { t } = await getTranslation(lng);

  return (
    <section id="experience">
      <h1>{t('experience.title')}</h1>
    </section>
  );
};

export default Experience;
