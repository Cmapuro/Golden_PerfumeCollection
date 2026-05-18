import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { t } from '../../data/translations';

export default function CartItem({ item, onRemove, onQuantityChange }) {
  const { language } = useContext(LanguageContext);

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="item-details">
        <h4>{item.name}</h4>
        <p>
          {t('sAR', language)} {item.price}
        </p>
      </div>
      <input
        type="number"
        value={item.quantity}
        onChange={(e) => onQuantityChange(item.id, e.target.value)}
      />
      <button onClick={() => onRemove(item.id)}>{t('remove', language)}</button>
    </div>
  );
}
