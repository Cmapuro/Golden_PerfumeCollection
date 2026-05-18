import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <div className="product-img">
        <img src={product.image} alt={product.name} />
        {product.isNew && <span className="badge">New</span>}
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="type">{product.type}</p>
        <p className="price">SAR {product.price}</p>
        <button className="add-to-cart" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
