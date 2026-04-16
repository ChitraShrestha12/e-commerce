import useInView from "../../../hooks/useInView";
import SectionHeader from "../values/SectionHeader";
import MemberGrid from "./MemberGrid";

function OurTeam() {
  const [ref, isVisible] = useInView();
  return (
    <div
      ref={ref}
      className={`team-section ${isVisible ? "motion-fade-up" : ""}`}
      style={{ animationDelay: "0.3s"}}
    >
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
