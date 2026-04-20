import React from "react";
import SectionHeader from "../shared/values/SectionHeader";
import { perksHeader } from "./data/careersData";
import PerksGrid from "./PerksGrid";

function PerksSection() {
  return (
    <div class="container">
      <SectionHeader
        title={perksHeader.title}
        description={perksHeader.description}
      />
      <PerksGrid/>
    </div>
  );
}

export default PerksSection;
