import { reviews } from "../../utils/constants.js";
import "./Testimonials.css";
export default function Testimonials() {
  return (
    <section
      className="testimonials section"
      id="reviews"
      aria-labelledby="reviews-title"
    >
      <div className="layout">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Customer feedback</p>
            <h2 id="reviews-title">In their own words.</h2>
          </div>
        </div>
        <div className="testimonials__grid">
          {reviews.map((review) => (
            <figure className="testimonials__card" key={review.name}>
              <span className="testimonials__quote-mark" aria-hidden="true">
                “
              </span>
              <blockquote className="testimonials__quote">
                <p>{review.quote}</p>
              </blockquote>
              <figcaption className="testimonials__author">
                {review.profile ? (
                  <a
                    href={review.profile}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${review.name} — Facebook profile (new tab)`}
                  >
                    {review.name} <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <span>{review.name}</span>
                )}
                {review.context && (
                  <span className="testimonials__context">
                    {review.context}
                  </span>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="testimonials__note">
          Individual customer experiences. Contact Samco for current pricing and
          availability.
        </p>
      </div>
    </section>
  );
}
