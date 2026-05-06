import React from "react";
import { faqList } from "../data/contactData";
import AccordionItem from "../../shared/AccordionItem";

function FaqList() {
  return (
    <div className="faq-grid">
      {faqList.map((fap, i) => {
        return <AccordionItem faq={fap} key={i} />;
      })}
    </div>
  );
}

export default FaqList;
