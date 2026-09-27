import { assetUrl } from "../../utils/assetUrl.js";
import { business } from "../../utils/constants.js";
import heroImage from "../../assets/images/samco-truck-equipment.webp";
import "./Hero.css";
export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__inner layout">
        <div className="hero__content">
          <p className="eyebrow">{business.eyebrow}</p>
          <h1>{business.headline}</h1>
          <p className="hero__intro">{business.intro}</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#contact">
              Talk about your project{" "}
              <span className="button__arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <a className="hero__secondary" href="#services">
              Explore services ↓
            </a>
          </div>
        </div>
        <figure className="hero__figure">
          <img
            src={assetUrl(heroImage)}
            width="720"
            height="960"
            alt="Samco service truck with plumbing equipment"
            fetchPriority="high"
          />
        </figure>
      </div>
      <div className="hero__strip">
        <div className="layout">
          <span>RESIDENTIAL & COMMERCIAL</span>
          <span>REPAIRS & INSTALLATIONS</span>
          <span>FORT WORTH, TX</span>
        </div>
      </div>
    </section>
  );
}
