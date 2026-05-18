import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { t } from '../../data/translations';

export default function BrandStory() {
  const { language } = useContext(LanguageContext);

  return (
    <section className="brand-story">
      <div className="story-content">
        <h2>{t('legacyOfFragrance', language)}</h2>
        <p>{t('sinceText', language)}</p>
        <div className="stats">
          <div>
            <h3>170+</h3>
            <p>{t('yearsOfHeritage', language)}</p>
          </div>
          <div>
            <h3>500+</h3>
            <p>{t('uniqueFragrances', language)}</p>
          </div>
          <div>
            <h3>40+</h3>
            <p>{t('countriesServed', language)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
