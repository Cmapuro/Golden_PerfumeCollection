import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { t } from '../../data/translations';

export default function Topbar() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div
      style={{
        background: '#1a1410',
        color: '#d4c7bd',
        padding: '10px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '11px',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        fontWeight: '600',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      <div>
        {t('freeShipping', language)}{' '}
        <span style={{ color: '#c19941' }}>300 SAR</span>{' '}
        <span style={{ margin: '0 8px', opacity: 0.5 }}>·</span>{' '}
        {t('since', language)}
      </div>
      <button
        onClick={toggleLanguage}
        style={{
          background: 'transparent',
          color: '#d4c7bd',
          border: '1px solid #c19941',
          padding: '4px 12px',
          cursor: 'pointer',
          fontSize: '11px',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          fontWeight: '600',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.target.style.background = '#c19941';
          e.target.style.color = '#1a1410';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'transparent';
          e.target.style.color = '#d4c7bd';
        }}
      >
        {language === 'en' ? 'العربية' : 'English'}
      </button>
    </div>
  );
}
