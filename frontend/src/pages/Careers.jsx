import "../components/Careers/careers.css";
import CareersHero from "../components/Careers/CareersHero";
import {
  careersValuesHeader,
  companyValues,
} from "../components/Careers/data/careersData";
import JobsSection from "../components/Careers/JobsSection";
import PerksSection from "../components/Careers/PerksSection";
import {
  careerHeroContent,
  careerHeroRightData,
  careerStats,
} from "../components/shared/hero/heroData";
import HeroLeftContent from "../components/shared/hero/HeroLeftContent";
import HeroRightContent from "../components/shared/hero/HeroRightContent";
import InfoSection from "../components/shared/values/InfoSection";
import SectionHeader from "../components/shared/values/SectionHeader";

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
