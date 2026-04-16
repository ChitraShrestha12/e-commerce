import React from "react";
import SectionHeader from "./SectionHeader";
import SectionGrid from "./SectionGrid";
import useInView from "../../../hooks/useInView";

function InfoSection() {
  const [ref, isVisible] = useInView();
  return (
    <div
      ref={ref}
      className={`values-section ${isVisible ? "motion-fade-up" : ""}`}
      style={{ animationDelay: "0.3s" }}
    >
      <div className="container">
        <SectionHeader
          title={"Core Values That Drive Us"}
          description={
            "The principles behind every decision, every product, every interaction."
          }
        />
        <SectionGrid />
      </div>
    </div>
  );
}

export default InfoSection;
