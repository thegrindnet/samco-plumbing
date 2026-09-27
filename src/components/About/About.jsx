import { business } from "../../utils/constants.js";
import "./About.css";
export default function About() {
  return (
    <section className="about section" id="about">
      <div className="about__inner layout">
        <div>
          <p className="eyebrow">The business</p>
          <h2>{business.aboutTitle}</h2>
        </div>
        <div className="about__copy">
          <p>{business.about}</p>
          <p>{business.aboutEnd}</p>
          <a
            className="text-link"
            href={business.profile}
            target="_blank"
            rel="noopener noreferrer"
          >
            {business.profileLabel} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
