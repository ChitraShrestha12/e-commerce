import React from "react";

function ValueCard({icon,title,description}) {
  return (
    <div className="value-card">
      <div className="value-icon">
        <i className={icon}></i>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ValueCard;
