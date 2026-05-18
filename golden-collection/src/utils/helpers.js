export function calculateTotal(items) {
  return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

export function getDiscount(amount) {
  if (amount > 1000) return 0.1;
  if (amount > 500) return 0.05;
  return 0;
}