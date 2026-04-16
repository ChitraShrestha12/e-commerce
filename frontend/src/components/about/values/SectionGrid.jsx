import React from "react";
import { coreValues } from "../../../data/aboutData";
import CardItem from "../cards/CardItem";
import useInView from "../../../hooks/useInView";

function SectionGrid() {
  const [ref, isVisible] = useInView();
  return (
    <div ref={ref} className={`values-grid ${isVisible ? "motion-fade-up" : ""}`}>
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
