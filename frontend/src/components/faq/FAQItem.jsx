import React, { useState } from "react";

function FAQItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);
  function toggle() {
    setIsOpen((prev) => !prev);
  }
  
  return (
    <div
      key={faq.id}
      className={`faq-item ${isOpen ? "active" : ""}`}
      data-category={faq.category}
      onClick={toggle}
    >
      <div className="faq-question">
        <span>{faq.question}</span>
        <i className={faq.icon}></i>
      </div>
      <div className="faq-answer">{faq.answer}</div>
    </div>
  );
}

export default FAQItem;
