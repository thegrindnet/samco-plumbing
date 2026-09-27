import { useState, useRef, useEffect } from "react";
import { navigation, business } from "../../utils/constants.js";
import "./Navigation.css";
export default function Navigation() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  const nav = useRef(null);
  useEffect(() => {
    if (!open) return;
    function close(event) {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    function outside(event) {
      if (!nav.current?.contains(event.target)) setOpen(false);
    }
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);
  return (
    <nav className="navigation" aria-label="Main navigation" ref={nav}>
      <button
        className="navigation__toggle"
        type="button"
        ref={toggle}
        aria-expanded={open}
        aria-controls="menu"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Menu"}
        <span aria-hidden="true">{open ? "×" : "≡"}</span>
      </button>
      <div
        id="menu"
        className={`navigation__links${open ? " navigation__links--open" : ""}`}
      >
        {navigation.map((item) => (
          <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a className="navigation__call" href={`tel:${business.tel}`}>
          Call {business.phone}
        </a>
      </div>
    </nav>
  );
}
