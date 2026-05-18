import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { t } from '../data/translations';

export default function Home() {
  const { language } = useContext(LanguageContext);

  const products = [
    { name: 'Musk Al Qurashi', type: 'Body Musk · 75ml', price: 245 },
    { name: 'Oud Royale', type: 'Eau de Parfum · 100ml', price: 680 },
    { name: 'Safari Rose', type: 'Women EDP · 75ml', price: 395 },
    { name: 'Khashab Al Oud', type: 'Pure Oil · 3ml', price: 890 },
  ];

  return (
    <div
      style={{
        fontFamily: 'system-ui, -apple-system, sans-serif',
        color: '#333',
      }}
    >
      {/* HERO */}
      <section
        style={{
          background: 'radial-gradient(circle, #2a221c 0%, #1a1410 100%)',
          color: '#fff',
          padding: '100px 24px',
          textAlign: 'center',
          minHeight: '70vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            fontSize: '12px',
            letterSpacing: '4px',
            color: '#c19941',
            textTransform: 'uppercase',
            marginBottom: '24px',
            fontWeight: '600',
          }}
        >
          {t('newCollection', language)}
        </span>
        <h1
          style={{
            fontSize: '56px',
            marginBottom: '24px',
            fontFamily: 'Georgia, serif',
            lineHeight: '1.1',
            fontWeight: 'normal',
          }}
        >
          {t('essenceOfArabianLuxury', language)}
        </h1>
        <p
          style={{
            fontSize: '20px',
            marginBottom: '40px',
            color: '#bbaea6',
            maxWidth: '500px',
            lineHeight: '1.5',
            fontWeight: '300',
          }}
        >
          {t('discoverCenturies', language)}
        </p>
        <button
          style={{
            background: '#c19941',
            color: '#fff',
            border: 'none',
            padding: '16px 40px',
            fontSize: '13px',
            fontWeight: 'bold',
            letterSpacing: '2px',
            borderRadius: '2px',
            textTransform: 'uppercase',
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(193, 153, 65, 0.3)',
          }}
        >
          {t('shopCollection', language)}
        </button>
      </section>

      {/* FEATURED PRODUCTS */}
      <section style={{ padding: '100px 24px', background: '#fff' }}>
        <h2
          style={{
            textAlign: 'center',
            fontSize: '36px',
            marginBottom: '16px',
            fontFamily: 'Georgia, serif',
            fontWeight: 'normal',
          }}
        >
          {t('featuredCreations', language)}
        </h2>
        <div
          style={{
            width: '40px',
            height: '2px',
            background: '#c19941',
            margin: '0 auto 60px',
          }}
        ></div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '32px',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {products.map((product, i) => (
            <div
              key={i}
              style={{
                background: '#fff',
                borderRadius: '6px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                border: '1px solid #f0f0f0',
              }}
            >
              <div
                style={{
                  background: '#fcfaf5',
                  height: '280px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '64px',
                }}
              >
                🧴
              </div>
              <div style={{ padding: '24px', textAlign: 'center' }}>
                <h3
                  style={{
                    fontSize: '18px',
                    marginBottom: '6px',
                    fontFamily: 'Georgia, serif',
                    fontWeight: 'normal',
                  }}
                >
                  {product.name}
                </h3>
                <p
                  style={{
                    color: '#a0a0a0',
                    fontSize: '11px',
                    marginBottom: '20px',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    fontWeight: '600',
                  }}
                >
                  {product.type}
                </p>
                <p
                  style={{
                    color: '#c19941',
                    fontSize: '18px',
                    fontWeight: '500',
                    marginBottom: '20px',
                  }}
                >
                  {t('sAR', language)} {product.price}
                </p>
                <button
                  style={{
                    background: 'transparent',
                    color: '#333',
                    border: '1px solid #e0e0e0',
                    padding: '12px 16px',
                    borderRadius: '2px',
                    width: '100%',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    cursor: 'pointer',
                  }}
                >
                  {t('addToCart', language)}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BRAND STORY */}
      <section
        style={{
          background: '#fcfaf5',
          padding: '100px 24px',
          textAlign: 'center',
          borderTop: '1px solid #f5edda',
        }}
      >
        <h2
          style={{
            fontSize: '36px',
            marginBottom: '24px',
            fontFamily: 'Georgia, serif',
            fontWeight: 'normal',
          }}
        >
          {t('legacyOfFragrance', language)}
        </h2>
        <p
          style={{
            fontSize: '18px',
            marginBottom: '60px',
            color: '#666',
            maxWidth: '700px',
            margin: '0 auto 60px',
            lineHeight: '1.6',
            fontWeight: '300',
          }}
        >
          {t('sinceText', language)}
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          <div>
            <h3
              style={{
                fontSize: '48px',
                color: '#c19941',
                marginBottom: '12px',
                fontFamily: 'Georgia, serif',
                fontWeight: 'normal',
              }}
            >
              170<span style={{ fontSize: '32px' }}>+</span>
            </h3>
            <p
              style={{
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: '#888',
                fontWeight: '600',
              }}
            >
              {t('yearsOfHeritage', language)}
            </p>
          </div>
          <div>
            <h3
              style={{
                fontSize: '48px',
                color: '#c19941',
                marginBottom: '12px',
                fontFamily: 'Georgia, serif',
                fontWeight: 'normal',
              }}
            >
              500<span style={{ fontSize: '32px' }}>+</span>
            </h3>
            <p
              style={{
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: '#888',
                fontWeight: '600',
              }}
            >
              {t('uniqueFragrances', language)}
            </p>
          </div>
          <div>
            <h3
              style={{
                fontSize: '48px',
                color: '#c19941',
                marginBottom: '12px',
                fontFamily: 'Georgia, serif',
                fontWeight: 'normal',
              }}
            >
              40<span style={{ fontSize: '32px' }}>+</span>
            </h3>
            <p
              style={{
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: '#888',
                fontWeight: '600',
              }}
            >
              {t('countriesServed', language)}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
