import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext';
import { AuthContext } from '../../context/AuthContext';
import LoginModal from '../common/LoginModal';
import { t } from '../../data/translations';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);
  const { user, setShowAuthModal, logout, successMessage } =
    useContext(AuthContext);

  const isActive = (path) => location.pathname === path;

  const handleNavClick = (path) => {
    navigate(path);
  };

  return (
    <>
      {successMessage && (
        <div
          style={{
            background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
            color: '#fff',
            padding: '12px 24px',
            textAlign: 'center',
            fontSize: '12px',
            fontWeight: 'bold',
            letterSpacing: '0.5px',
            animation: 'slideDown 0.4s ease',
          }}
        >
          <style>{`
            @keyframes slideDown {
              from { transform: translateY(-100%); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
          `}</style>
          ✓ {successMessage}
        </div>
      )}
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
            <button
              onClick={() => handleNavClick('/')}
              style={{
                background: 'transparent',
                border: 'none',
                textDecoration: 'none',
                color: isActive('/') ? '#c19941' : '#555',
                fontSize: '12px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                paddingBottom: '4px',
                borderBottom: isActive('/')
                  ? '2px solid #c19941'
                  : '2px solid transparent',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                if (!isActive('/')) {
                  e.target.style.color = '#c19941';
                  e.target.style.borderBottomColor = '#c19941';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive('/')) {
                  e.target.style.color = '#555';
                  e.target.style.borderBottomColor = 'transparent';
                }
              }}
            >
              {t('home', language)}
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick('/shop')}
              style={{
                background: 'transparent',
                border: 'none',
                textDecoration: 'none',
                color: isActive('/shop') ? '#c19941' : '#555',
                fontSize: '12px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                paddingBottom: '4px',
                borderBottom: isActive('/shop')
                  ? '2px solid #c19941'
                  : '2px solid transparent',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                if (!isActive('/shop')) {
                  e.target.style.color = '#c19941';
                  e.target.style.borderBottomColor = '#c19941';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive('/shop')) {
                  e.target.style.color = '#555';
                  e.target.style.borderBottomColor = 'transparent';
                }
              }}
            >
              {t('shop', language)}
            </button>
          </li>
        </ul>
        {/* RIGHT: Utility Icons (Search, Cart, Login) */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '24px',
            alignItems: 'center',
          }}
        >
          <button
            onClick={() => handleNavClick('/search')}
            style={{
              background: 'transparent',
              border: 'none',
              textDecoration: 'none',
              color: '#1a1410',
              fontSize: '18px',
              cursor: 'pointer',
              padding: 0,
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#c19941')}
            onMouseLeave={(e) => (e.target.style.color = '#1a1410')}
          >
            {t('search', language)}
          </button>
          <button
            onClick={() => handleNavClick('/cart')}
            style={{
              background: 'transparent',
              border: 'none',
              textDecoration: 'none',
              color: '#1a1410',
              fontSize: '18px',
              cursor: 'pointer',
              padding: 0,
              position: 'relative',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#c19941')}
            onMouseLeave={(e) => (e.target.style.color = '#1a1410')}
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
          </button>

          {/* Login/Profile Button */}
          {user ? (
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <button
                onClick={() => handleNavClick('/profile')}
                style={{
                  color: isActive('/profile') ? '#fff' : '#c19941',
                  background: isActive('/profile')
                    ? 'linear-gradient(135deg, #c19941 0%, #a17a2f 100%)'
                    : 'transparent',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  border: isActive('/profile') ? 'none' : '1px solid #c19941',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  if (!isActive('/profile')) {
                    e.target.style.background = 'rgba(193, 153, 65, 0.1)';
                    e.target.style.color = '#a17a2f';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive('/profile')) {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#c19941';
                  }
                }}
              >
                👤 {user.name}
              </button>
              <button
                onClick={logout}
                style={{
                  background: '#c19941',
                  color: '#fff',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  fontSize: '11px',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#a17a2f';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#c19941';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowAuthModal(true)}
              style={{
                background: 'linear-gradient(135deg, #c19941 0%, #a17a2f 100%)',
                color: '#fff',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '4px',
                fontSize: '11px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 14px rgba(193, 153, 65, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(193, 153, 65, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 14px rgba(193, 153, 65, 0.3)';
              }}
            >
              Login
            </button>
          )}
        </div>

        <LoginModal />
      </nav>
    </>
  );
}
