import React from "react";

function MemberCard({icon,name,role,info}) {
  return (
    <div class="team-card">
      <div class="team-img">
        <i class={icon}></i>
      </div>
      <h4>{name}</h4>
      <p class="team-role">{role}</p>
      <span style={{fontSize:'0.8rem'}}>{info}</span>
    </div>
  );
}

export default MemberCard;
