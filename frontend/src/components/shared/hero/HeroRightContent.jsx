import React from "react";

function HeroRightContent({ image, alt, badge }) {
  return (
    <div className="hero-right">
      <img src={image} alt={alt} />
      <div className="hero-badge">
        <i className={badge.icon}></i> {badge.text}
      </div>
    </div>
  );
}

export default HeroRightContent;
