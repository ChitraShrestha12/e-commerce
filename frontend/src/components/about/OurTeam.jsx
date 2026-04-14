import React from "react";
import SectionHeader from "./SectionHeader";
import MemberGrid from "./MemberGrid";

function OurTeam() {
  return (
    <div className="team-section">
      <SectionHeader
        title={"Meet the Visionaries"}
        description={
          "Passionate creators, engineers, and curators behind NovaMart."
        }
      />
      <MemberGrid />
    </div>
  );
}

export default OurTeam;
