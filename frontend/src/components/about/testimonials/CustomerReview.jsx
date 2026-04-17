import React from "react";
import useInView from "../../../hooks/useInView";

function CustomerReview({ text, icon, name, role, index }) {
  const [ref, isVisible] = useInView();
  return (
    <div
      ref={ref}
      className={`testimonial-item ${isVisible ? "motion-fade-up" : ""}`}
      style={{ animationDelay: `${index * 0.3}s` }}
    >
      <div className="testimonial-text">{text}</div>
      <div className="testimonial-author">
        <div className="testimonial-avatar">
          <i className={icon}></i>
        </div>
        <div className="testimonial-info">
          <strong>{name}</strong>
          <span>{role}</span>
        </div>
      </div>
    </div>
  );
}

export default CustomerReview;
