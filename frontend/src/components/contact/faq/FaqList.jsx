import React from "react";
import FaqItem from "./FaqItem";
import { faqList } from "../data/contactData";

function FaqList() {
  return (
    <div className="faq-grid">
      {faqList.map((fap,i) => {
        return <FaqItem faq={fap} key={i}/>;
      })}
    </div>
  );
}

export default FaqList;
