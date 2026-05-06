import React from "react";
import { Link } from "react-router";
import { scrollToTopSmooth } from "../../utils/utils";

function StillHaveQuestions() {
  return (
    <div className="still-questions">
      <div className="questions-content">
        <i className="fas fa-comments"></i>
        <h3>Still have questions?</h3>
        <p>
          Our customer support team is available 24/7 to help you with anything
          you need.
        </p>
        <div className="questions-buttons">
          <Link
            to="/contact"
            className="btn-primary"
            onClick={scrollToTopSmooth}
          >
            Contact Support
          </Link>
          <Link
            to="/contact"
            className="btn-secondary"
            onClick={scrollToTopSmooth}
          >
            Live Chat
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StillHaveQuestions;
