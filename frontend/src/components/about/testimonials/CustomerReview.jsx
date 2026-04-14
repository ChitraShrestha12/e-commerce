import React from "react";

function CustomerReview({text,icon,name,role}) {
  return (
    <div className="testimonial-item">
      <div className="testimonial-text">
        {text}
      </div>
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
