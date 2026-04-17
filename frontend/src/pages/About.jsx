import "../components/about/about.css";
import CTAWidget from "../components/about/cta/CTAWidget";
import HeroLeftContent from "../components/shared/hero/HeroLeftContent";
import HeroRightContent from "../components/shared/hero/HeroRightContent";
import MissionSection from "../components/about/mission/MissionSection";
import OurTeam from "../components/about/team/OurTeam";
import TestimonialSection from "../components/about/testimonials/TestimonialSection";
import InfoSection from "../components/about/values/InfoSection";
import { aboutHeroLeftData, aboutHeroRightData, aboutHeroStats } from "../components/shared/hero/heroData";

function About() {
  return (
    <>
      <section className="about-hero">
        <div className="hero-split">
          <HeroLeftContent
            title={aboutHeroLeftData.title}
            description={aboutHeroLeftData.description}
            stats={aboutHeroStats}
          />
          <HeroRightContent
            image={aboutHeroRightData.image}
            alt={aboutHeroRightData.alt}
            badge={aboutHeroRightData.badge}
          />
        </div>
      </section>
      <div className="container">
        <MissionSection />
      </div>
      <InfoSection />
      <div className="container">
        <OurTeam />
      </div>
      <div className="testimonials">
        <TestimonialSection />
      </div>
      <div className="container">
        <CTAWidget />
      </div>
    </>
  );
}

export default About;
