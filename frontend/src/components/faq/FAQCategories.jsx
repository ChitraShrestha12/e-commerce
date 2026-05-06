import React from "react";
import CategoryButton from "./CategoryButton";
import { faqCategories } from "./data/faqData";

function FAQCategories({setActiveCategory,activeCategory}) {
  return (
    <div className="faq-categories">
      {faqCategories.map((category) => {
        return (
          <CategoryButton
            categoryId={category.id}
            label={category.label}
            key={category.id}
            setActiveCategory={setActiveCategory}
            isActive={activeCategory===category.id}
          />
        );
      })}
    </div>
  );
}

export default FAQCategories;
