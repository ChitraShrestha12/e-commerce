import "../components/about/about.css";
import CTAWidget from "../components/about/cta/CTAWidget";
import MissionSection from "../components/about/mission/MissionSection";
import OurTeam from "../components/about/team/OurTeam";
import TestimonialSection from "../components/about/testimonials/TestimonialSection";
import InfoSection from "../components/shared/values/InfoSection";
import {
  aboutValuesHeader,
  coreValues,
} from "../components/about/data/aboutData";
import AboutHero from "../components/about/hero/AboutHero";

function About() {
  return (
    <>
      <AboutHero />
      <MissionSection />
      <InfoSection
        title={aboutValuesHeader.title}
        description={aboutValuesHeader.description}
        values={coreValues}
      />
      <OurTeam />
      <TestimonialSection />
      <CTAWidget />
    </>
  );
}

export default About;
