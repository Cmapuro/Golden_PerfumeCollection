export default function MobileMenu({ onClose }) {
  return (
    <div className="mobile-menu">
      <a href="/" onClick={onClose}>Perfumes</a>
      <a href="/oud" onClick={onClose}>Oud</a>
      <a href="/oils" onClick={onClose}>Oils</a>
      <a href="/about" onClick={onClose}>About</a>
    </div>
  );
}