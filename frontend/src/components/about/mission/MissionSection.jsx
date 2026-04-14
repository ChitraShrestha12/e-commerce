import React from "react";
import MissionContent from "./MissionContent";
import MissionStats from "./MissionStats";
import MissionImage from "./MissionImage";


function MissionSection() {
  return (
    <>
      <div className="mission-section">
        <div className="mission-content">
          <MissionContent/>
          <MissionStats/>
        </div>
        <MissionImage/>
      </div>
    </>
  );
}

export default MissionSection;
