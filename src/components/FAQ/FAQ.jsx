import { faqs } from "../../utils/constants.js";
import "./FAQ.css";
export default function FAQ() {
  return (
    <section id="questions" className="faq section">
      <div className="faq__inner layout">
        <div>
          <p className="eyebrow">Before you call</p>
          <h2>
            A few useful
            <br />
            answers.
          </h2>
        </div>
        <div className="faq__items">
          {faqs.map((item) => (
            <details className="faq__item" key={item.question}>
              <summary>
                {item.question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
