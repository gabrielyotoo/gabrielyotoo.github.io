import Link from 'next/link';
import { getTranslation } from '@/app/i18n';
import { NextJsPage } from '@/app/types/pages';

interface HeaderProps {
  lng: string;
}

const Header = async ({ lng }: HeaderProps) => {
  const { t } = await getTranslation(lng);

  return (
    <header className="flex justify-center p-4 md:justify-between">
      <h1>Logo</h1>
      <nav className="hidden md:flex">
        <Link href="#experience">{t('experience.title')}</Link>
        <Link href="#">{t('about.title')}</Link>
        <Link href="#">{t('blog.title')}</Link>
        <Link href="#">{t('contact.title')}</Link>
      </nav>
    </header>
  );
};

export default Header;
