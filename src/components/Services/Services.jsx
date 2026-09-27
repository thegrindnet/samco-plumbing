import { business, services } from "../../utils/constants.js";
import "./Services.css";
export default function Services() {
  return (
    <section id="services" className="services section">
      <div className="layout">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Services</p>
            <h2>{business.serviceTitle}</h2>
          </div>
          <p className="section-heading__aside">
            Start with the service you need. Confirm the details directly with
            the business.
          </p>
        </div>
        <div className="services__grid">
          {services.map((service) => (
            <article className="services__card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a
                href="#contact"
                aria-label={`Ask about ${service.title.toLowerCase()}`}
              >
                Discuss this service ↗
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
