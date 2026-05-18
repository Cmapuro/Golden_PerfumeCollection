import CartItem from './CartItem';
import CartSummary from './CartSummary';

export default function CartDrawer({ items, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="cart-drawer">
      <div className="drawer-header">
        <h2>Your Cart</h2>
        <button onClick={onClose}>✕</button>
      </div>
      <div className="drawer-items">
        {items.length > 0 ? (
          items.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      {items.length > 0 && <CartSummary items={items} />}
    </div>
  );
}