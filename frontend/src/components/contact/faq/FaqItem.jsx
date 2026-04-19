import { useState } from "react";

function FaqItem({ faq }) {
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  function toggleFaq() {
    setIsFaqOpen((prev) => !prev);
  }
  return (
    <>
      <div
        className={`faq-item ${isFaqOpen ? "active" : ""}`}
        onClick={toggleFaq}
      >
        <div className="faq-question">
          <span>{faq.question}</span>
          <i className={faq.icon}></i>
        </div>
        <div className="faq-answer">{faq.answer}</div>
      </div>
    </>
  );
}

export default FaqItem;
