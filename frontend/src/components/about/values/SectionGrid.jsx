import React from "react";
import { coreValues } from "../../../data/aboutData";
import CardItem from "../cards/CardItem";

function SectionGrid() {
  return (
    <div className="values-grid">
      {coreValues.map((value) => {
        return (
          <CardItem
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
