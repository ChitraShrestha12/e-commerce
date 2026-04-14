import React from "react";

function SectionHeader({title,description}) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <p>
        {description}
      </p>
    </div>
  );
}

export default SectionHeader;
