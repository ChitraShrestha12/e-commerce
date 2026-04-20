import useInView from "../../../hooks/useInView";
import SectionGrid from "./SectionGrid";
import SectionHeader from "./SectionHeader";


function InfoSection({title,description,values}) {
  const [ref, isVisible] = useInView();
  return (
    <div
      ref={ref}
      className={`values-section ${isVisible ? "motion-fade-up" : ""}`}
      style={{ animationDelay: "0.3s" }}
    >
      <div className="container">
        <SectionHeader
          title={title}
          description={description}
        />
        <SectionGrid values={values}/>
      </div>
    </div>
  );
}

export default InfoSection;
