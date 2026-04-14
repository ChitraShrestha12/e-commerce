import React from "react";
import SectionHeader from "./SectionHeader";
import SectionGrid from "./SectionGrid";
import { coreValues } from "../../data/aboutData";

function InfoSection() {
  return (
    <div className="values-section">
      <div className="container">
        <SectionHeader title={"Core Values That Drive Us"} description={"The principles behind every decision, every product, every interaction."}/>
        <SectionGrid/>
      </div>
    </div>
  );
}

export default InfoSection;
