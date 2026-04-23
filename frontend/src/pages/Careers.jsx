import "../components/careers/careers.css";
import { careersValuesHeader, companyValues } from "../components/careers/data/careersData";
import CareersHero from "../components/careers/hero/CareersHero";
import JobsSection from "../components/careers/jobs/JobsSection";
import PerksSection from "../components/careers/perks/PerksSection";
import InfoSection from "../components/shared/values/InfoSection";

function Careers() {
  return (
    <>
      <CareersHero/>
      <JobsSection/>
      <InfoSection
        title={careersValuesHeader.title}
        description={careersValuesHeader.description}
        values={companyValues}
      />
      <PerksSection/>
    </>
  );
}

export default Careers;
