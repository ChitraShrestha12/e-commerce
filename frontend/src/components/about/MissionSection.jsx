import React from "react";
import MissionStats from "./MissionStats";
import MissionContent from "./MissionContent";
import MissionImage from "./MissionImage";

function MissionSection() {
  return (
    <>
      <div className="mission-section">
        <div className="mission-content">
          <MissionContent />
          <MissionStats />
        </div>
        <MissionImage />
      </div>
    </>
  );
}

export default MissionSection;
