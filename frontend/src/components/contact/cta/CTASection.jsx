import React from "react";
import CTAHeader from "./CTAHeader";

function CTASection() {
  return (
    <div className="cta-section">
      <CTAHeader/>
      <div
        style={{
          display: "flex",
          gap: "12px",
          maxWidth: "500px",
          margin: "24px auto 0",
          flexWrap: "wrap",
        }}
      >
        <input
          type="email"
          placeholder="Your email address"
          style={{
            flex: 1,
            padding: "14px 20px",
            border: "none",
            outline: "none",
          }}
        />

        <button
          className="cta-btn"
          style={{
            margin: 0,
            background: "white",
            color: "#1e40af",
            cursor:"pointer"
          }}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default CTASection;
