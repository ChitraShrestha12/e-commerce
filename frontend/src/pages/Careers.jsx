import "../components/Careers/careers.css";
import CareersHero from "../components/Careers/CareersHero";
import {
  careersValuesHeader,
  companyValues,
} from "../components/Careers/data/careersData";
import JobsSection from "../components/Careers/JobsSection";
import PerksSection from "../components/Careers/PerksSection";
import InfoSection from "../components/shared/values/InfoSection";

function Careers() {
  return (
    <>
      <CareersHero />
      <JobsSection />
      <InfoSection
        title={careersValuesHeader.title}
        description={careersValuesHeader.description}
        values={companyValues}
      />
      <PerksSection />
    </>
  );
}

export default Careers;
