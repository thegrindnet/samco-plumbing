import { business } from "../../utils/constants.js";
import "./Contact.css";
export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="contact__inner layout">
        <div>
          <p className="eyebrow">Your next step</p>
          <h2>{business.contactTitle}</h2>
          <p className="contact__intro">{business.contactText}</p>
        </div>
        <div className="contact__details">
          <p className="contact__label">Call the business</p>
          <a className="contact__phone" href={`tel:${business.tel}`}>
            {business.phone}
            <span aria-hidden="true">↗</span>
          </a>
          {business.email && (
            <>
              <p className="contact__label">Email your project details</p>
              <a className="contact__email" href={`mailto:${business.email}`}>
                {business.email}
              </a>
            </>
          )}
          <p className="contact__location">
            Based in {business.city}, Texas.
            <br />
            Confirm service coverage and availability directly.
          </p>
        </div>
      </div>
    </section>
  );
}
