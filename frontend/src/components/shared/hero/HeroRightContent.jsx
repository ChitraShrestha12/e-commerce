import React from "react";
import Image from "../Image";

function HeroRightContent({ image, alt, badge }) {
  return (
    <div className="hero-right">
      <Image src={image} alt={alt}/>
      <div className="hero-badge ">
        <i className={badge.icon}></i> {badge.text}
      </div>
    </div>
  );
}

export default HeroRightContent;
