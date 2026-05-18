export default function SectionTitle({ subtitle, title }) {
  return (
    <div className="section-title">
      <span className="subtitle">{subtitle}</span>
      <h2>{title}</h2>
    </div>
  );
}