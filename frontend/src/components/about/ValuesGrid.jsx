import React from "react";
import ValueCard from "./ValueCard";

function ValuesGrid() {
  const coreValues = [
    {
      icon: "fas fa-gem",
      title: "Radical Honesty",
      description:
        "Transparent pricing, real reviews, no hidden fees — always.",
    },
    {
      icon: "fas fa-bolt",
      title: "Blazing Speed",
      description: "Same-day dispatch, fast shipping, instant customer care.",
    },
    {
      icon: "fas fa-leaf",
      title: "Eco-Forward",
      description:
        "Carbon-neutral shipping and sustainable packaging since 2024.",
    },
    {
      icon: "fas fa-heart",
      title: "Community First",
      description: "Empowering local sellers and giving back to global causes.",
    },
  ];
  return (
    <div className="values-grid">
      {coreValues.map((coreValue) => {
        return (
          <ValueCard
            icon={coreValue.icon}
            title={coreValue.title}
            description={coreValue.description}
          />
        );
      })}
    </div>
  );
}

export default ValuesGrid;
