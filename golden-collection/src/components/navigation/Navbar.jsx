import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { t } from '../../data/translations';

export default function Navbar() {
  const { language } = useContext(LanguageContext);

  return (
    <nav
      style={{
        background: '#fff',
        padding: '20px 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #f0f0f0',
        boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      {/* LEFT: Navigation Links */}
      <ul
        style={{
          display: 'flex',
          gap: '32px',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          flex: 1,
        }}
      >
        <li>
          <a
            href="/"
            style={{
              textDecoration: 'none',
              color: '#555',
              fontSize: '12px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}
          >
            {t('home', language)}
          </a>
        </li>
        <li>
          <a
            href="/shop"
            style={{
              textDecoration: 'none',
              color: '#555',
              fontSize: '12px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}
          >
            {t('shop', language)}
          </a>
        </li>
      </ul>
      {/* RIGHT: Utility Icons (Search, Cart Placeholder) */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '24px',
        }}
      >
        <a
          href="/search"
          style={{ textDecoration: 'none', color: '#1a1410', fontSize: '18px' }}
        >
          {t('search', language)}
        </a>
        <a
          href="/cart"
          style={{
            textDecoration: 'none',
            color: '#1a1410',
            fontSize: '18px',
            position: 'relative',
          }}
        >
          {t('cart', language)}
          <span
            style={{
              position: 'absolute',
              top: '-4px',
              right: '-8px',
              background: '#c19941',
              color: '#fff',
              fontSize: '9px',
              fontWeight: 'bold',
              padding: '2px 6px',
              borderRadius: '10px',
            }}
          >
            0
          </span>
        </a>
      </div>
    </nav>
  );
}
