import React, { useState } from "react";
import CategoryButton from "./CategoryButton";
import FAQCategories from "./FAQCategories";
import FAQList from "./FAQList";
import { Link } from "react-router";
import StillHaveQuestions from "./StillHaveQuestions";
function FAQContainer() {
  const [activeCategory, setActiveCategory] = useState("all");
  return (
    <div className="container">
      <FAQCategories
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />
      <FAQList activeCategory={activeCategory} />
      <StillHaveQuestions />
    </div>
  );
}

export default FAQContainer;
