export default function ProductFilter({ onFilter }) {
  return (
    <div className="filter-bar">
      <button onClick={() => onFilter('all')}>All</button>
      <button onClick={() => onFilter('women')}>Women</button>
      <button onClick={() => onFilter('men')}>Men</button>
      <button onClick={() => onFilter('unisex')}>Unisex</button>
    </div>
  );
}