import { business } from "../../utils/constants.js";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner layout">
        <span>
          {business.name} · {business.city}, TX
        </span>

        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
