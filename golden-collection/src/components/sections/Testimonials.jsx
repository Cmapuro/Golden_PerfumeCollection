export default function Testimonials({ reviews }) {
  return (
    <section className="testimonials">
      <h2>What Customers Say</h2>
      <div className="review-grid">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <p>"{review.text}"</p>
            <p className="author">- {review.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}