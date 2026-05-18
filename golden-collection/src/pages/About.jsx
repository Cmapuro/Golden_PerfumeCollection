import { useContext } from 'react';
import BrandStory from '../components/sections/BrandStory';
import { LanguageContext } from '../context/LanguageContext';
import { t } from '../data/translations';

export default function About() {
  const { language } = useContext(LanguageContext);

  return (
    <main>
      <h1>{t('aboutGoldenCollection', language)}</h1>
      <BrandStory />
    </main>
  );
}
