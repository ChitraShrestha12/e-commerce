import React from "react";
import { Link } from "react-router";

function CTAWidget() {
  return (
    <div className="container">
      <div className="cta-section">
        <h2>Ready to experience the difference?</h2>
        <p>Join thousands of happy customers and shop with confidence.</p>
        <Link to="/" className="cta-btn">
          Start Shopping →
        </Link>
      </div>
    </div>
  );
}

export default CTAWidget;
