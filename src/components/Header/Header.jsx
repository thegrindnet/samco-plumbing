import { assetUrl } from "../../utils/assetUrl.js";
import Navigation from "../Navigation/Navigation.jsx";
import { business } from "../../utils/constants.js";
import logo from "../../assets/images/samco-logo.webp";
import "./Header.css";
export default function Header() {
  return (
    <header className="header">
      <div className="header__inner layout">
        <a
          className="header__brand"
          href="#home"
          aria-label={`${business.name} home`}
        >
          <img
            className="header__logo"
            src={assetUrl(logo)}
            width="900"
            height="300"
            alt={business.name}
          />
        </a>
        <Navigation />
      </div>
    </header>
  );
}
