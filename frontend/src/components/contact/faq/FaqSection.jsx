import React from "react";
import useInView from "../../../hooks/useInView";
import FaqHeader from "./FaqHeader";
import FaqList from "./FaqList";

function FaqSection() {
  const [ref, isVisible] = useInView();
  return (
    <div
      ref={ref}
      className={`faq-section ${isVisible ? "motion-fade-up" : ""}`}
      style={{ animationDelay: "0.3s" }}
    >
      <FaqHeader/>
      <FaqList/>
    </div>
  );
}

export default FaqSection;
