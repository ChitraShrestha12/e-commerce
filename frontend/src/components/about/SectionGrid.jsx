import React from "react";
import ValueCard from "./CardItem";
import { coreValues } from "../../data/aboutData";

function SectionGrid() {
  
  return (
    <div className="values-grid">
      {coreValues.map((value) => {
        return (
          <ValueCard
            icon={value.icon}
            title={value.title}
            description={value.description}
          />
        );
      })}
    </div>
  );
}

export default SectionGrid;
