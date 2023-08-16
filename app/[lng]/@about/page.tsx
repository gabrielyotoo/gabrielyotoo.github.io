import { getTranslation } from '@/app/i18n';
import { languages } from '@/app/i18n/config';
import { NextJsPage } from '@/app/types/pages';

export async function generateStaticParams() {
  return languages.map((language) => ({ lng: language }));
}

const About = async ({ params: { lng } }: NextJsPage) => {
  const { t } = await getTranslation(lng);

  return (
    <section>
      <h1>{t('about.title')}</h1>
    </section>
  );
};

export default About;
