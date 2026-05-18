import { useContext } from 'react';
import { useCart } from '../hooks/useCart';
import { LanguageContext } from '../context/LanguageContext';
import { t } from '../data/translations';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const { language } = useContext(LanguageContext);

  return (
    <main className="cart-page">
      <h1>{t('shoppingCart', language)}</h1>
      {cart.length > 0 ? (
        <div className="cart-container">
          <div className="cart-items">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={removeFromCart}
                onQuantityChange={updateQuantity}
              />
            ))}
          </div>
          <CartSummary items={cart} />
        </div>
      ) : (
        <p>{t('yourCartIsEmpty', language)}</p>
      )}
    </main>
  );
}
