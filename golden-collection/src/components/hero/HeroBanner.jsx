import HeroContent from './HeroContent';

export default function HeroBanner() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <HeroContent />
      <div className="hero-bottle">
        <div className="bottle"></div>
      </div>
    </section>
  );
}