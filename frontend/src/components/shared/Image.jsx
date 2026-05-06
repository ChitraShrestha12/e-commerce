import React from "react";

function Image({ src, alt, className }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className || undefined}
      loading="lazy"
    />
  );
}

export default Image;
