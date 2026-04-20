import React from "react";
import { perksList } from "./data/careersData";
import PerkCard from "./PerkCard";

function PerksGrid() {
  return (
    <div class="perks-grid">
      {perksList.map((perk) => {
        return (
          <PerkCard
            icon={perk.icon}
            title={perk.title}
            description={perk.description}
          />
        );
      })}
    </div>
  );
}

export default PerksGrid;
