import { useContext, useState } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { CartContext } from '../context/CartContext';
import { t } from '../data/translations';

export default function Shop() {
  const { language } = useContext(LanguageContext);
  const { addToCart } = useContext(CartContext);
  const [hoveredId, setHoveredId] = useState(null);

  const products = [
    { id: 1, name: 'Musk Al Qurashi', type: 'Body Musk · 75ml', price: 245 },
    { id: 2, name: 'Oud Royale', type: 'Eau de Parfum · 100ml', price: 680 },
    { id: 3, name: 'Safari Rose', type: 'Women EDP · 75ml', price: 395 },
    { id: 4, name: 'Khashab Al Oud', type: 'Pure Oil · 3ml', price: 890 },
  ];

  return (
    <main style={{ padding: '40px 24px' }}>
      <h1
        style={{
          textAlign: 'center',
          marginBottom: '40px',
          fontFamily: 'Georgia, serif',
        }}
      >
        {t('shopAllProducts', language)}
      </h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {products.map((product, i) => (
          <div
            key={i}
            style={{
              border: '1px solid #ddd',
              padding: '16px',
              textAlign: 'center',
              borderRadius: '8px',
            }}
          >
            <div
              style={{
                background: '#f5edda',
                height: '200px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
                fontSize: '32px',
              }}
            >
              🧴
            </div>
            <h3>{product.name}</h3>
            <p style={{ color: '#888', fontSize: '14px', margin: '8px 0' }}>
              {product.type}
            </p>
            <p
              style={{
                color: '#c19941',
                fontSize: '18px',
                fontWeight: 'bold',
                margin: '8px 0',
              }}
            >
              {t('sAR', language)} {product.price}
            </p>
            <button
              onClick={() => addToCart(product)}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                background: hoveredId === product.id ? '#a17a2f' : '#c19941',
                color: '#fff',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                width: '100%',
                transition: 'background 0.3s ease',
                transform:
                  hoveredId === product.id ? 'scale(1.05)' : 'scale(1)',
              }}
            >
              {t('addToCart', language)}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
