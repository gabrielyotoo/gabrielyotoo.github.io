import { languages } from '@/app/i18n/config';
import { NextJsPage } from '@/app/types/pages';
import Companies from './components/companies';
import { getTranslation } from '@/app/i18n';

export async function generateStaticParams() {
  return languages.map((language) => ({ lng: language }));
}

const Experience = async ({ params: { lng } }: NextJsPage) => {
  const { t } = await getTranslation(lng);

  return (
    <section id="experience" className="mx-6">
      <h2 className="">{t('experience.companies')}</h2>
      <Companies />
      <h2 className="">{t('experience.techs')}</h2>
    </section>
  );
};

export default Experience;
