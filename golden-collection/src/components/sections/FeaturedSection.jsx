import SectionTitle from '../common/SectionTitle';
import ProductGrid from '../products/ProductGrid';

export default function FeaturedSection({ products }) {
  return (
    <section className="featured">
      <SectionTitle subtitle="bestsellers" title="Featured Products" />
      <ProductGrid products={products} />
    </section>
  );
}