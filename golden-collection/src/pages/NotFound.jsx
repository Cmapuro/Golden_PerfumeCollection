import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { t } from '../data/translations';

export default function NotFound() {
  const { language } = useContext(LanguageContext);

  return (
    <div
      style={{
        padding: '64px 24px',
        textAlign: 'center',
        minHeight: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>
        {t('notFound', language)}
      </h1>
      <p style={{ fontSize: '18px', color: '#666', marginBottom: '32px' }}>
        {t('pageNotFound', language)}
      </p>
      <a
        href="/"
        style={{
          color: '#c19941',
          textDecoration: 'none',
          fontSize: '16px',
          borderBottom: '1px solid #c19941',
          paddingBottom: '4px',
        }}
      >
        {t('goBackHome', language)}
      </a>
    </div>
  );
}
