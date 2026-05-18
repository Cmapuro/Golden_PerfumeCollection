import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { t } from '../../data/translations';

export default function CartSummary({ items }) {
  const { language } = useContext(LanguageContext);
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="cart-summary">
      <h3>{t('orderSummary', language)}</h3>
      <p>
        {t('subtotal', language)}: {t('sAR', language)} {total}
      </p>
      <p>
        {t('shipping', language)}: {t('sAR', language)} 50
      </p>
      <h4>
        {t('total', language)}: {t('sAR', language)} {total + 50}
      </h4>
      <button className="checkout-btn">{t('checkout', language)}</button>
    </div>
  );
}
