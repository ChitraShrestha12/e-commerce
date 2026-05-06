import { faqList } from "./data/faqData";
import FAQItem from "./FAQItem";

function FAQList({ activeCategory }) {
  const filterCategory =
    activeCategory === "all"
      ? faqList
      : faqList.filter((faq) => faq.category === activeCategory);
  return (
    <div className="faq-grid">
      {filterCategory.map((faq, i) => {
        return <FAQItem key={i} faq={faq} />;
      })}
    </div>
  );
}

export default FAQList;
