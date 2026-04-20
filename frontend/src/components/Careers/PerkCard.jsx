import React from "react";

function PerkCard({ icon, title, description }) {
  return (
    <div class="perk-card">
      <div class="perk-icon">
        <i class={icon}></i>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default PerkCard;
