import useInView from "../../../hooks/useInView";
import { coreValues } from "../../about/data/aboutData";
import CardItem from "./CardItem";

function SectionGrid({values}) {
  const [ref, isVisible] = useInView();
  return (
    <div
      ref={ref}
      className={`values-grid ${isVisible ? "motion-fade-up" : ""}`}
    >
      {values.map((value, i) => {
        return (
          <CardItem
            key={i}
            icon={value.icon}
            title={value.title}
            description={value.description}
          />
        );
      })}
    </div>
  );
}

export default SectionGrid;
