import { useParams } from 'react-router-dom';
import ProductDetails from '../components/products/ProductDetails';
import { perfumes } from '../data/perfumes';

export default function Product() {
  const { id } = useParams();
  const product = perfumes.find(p => p.id === parseInt(id));

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <main>
      <ProductDetails product={product} />
    </main>
  );
}