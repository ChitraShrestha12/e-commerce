import React from "react";

function CategoryButton({ label, categoryId, setActiveCategory, isActive }) {
  return (
    <button
      className={`category-btn ${isActive ? "active" : ""}`}
      data-category={categoryId}
      onClick={() => setActiveCategory(categoryId)}
    >
      {label}
    </button>
  );
}

export default CategoryButton;
