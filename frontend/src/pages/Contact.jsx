import "../components/contact/contact.css";
import CTASection from "../components/contact/cta/CTASection";
import FaqSection from "../components/contact/faq/FaqSection";
import ContactFormSection from "../components/contact/form/ContactFormSection";
import ContactInfoGrid from "../components/contact/info/ContactInfoGrid";
import OfficeMapCard from "../components/contact/map/OfficeMapCard";
import {
  contactHeroLeftData,
  contactHeroRightData,
  contactHeroStats,
} from "../components/shared/hero/heroData";
import HeroLeftContent from "../components/shared/hero/HeroLeftContent";
import HeroRightContent from "../components/shared/hero/HeroRightContent";
import useInView from "../hooks/useInView";

function Contact() {
  const [ref, isVisible] = useInView();
  return (
    <>
      <section className="contact-hero">
        <div className="hero-split">
          <HeroLeftContent
            title={contactHeroLeftData.title}
            description={contactHeroLeftData.description}
            stats={contactHeroStats}
          />
          <HeroRightContent
            image={contactHeroRightData.image}
            alt={contactHeroRightData.alt}
            badge={contactHeroRightData.badge}
          />
        </div>
      </section>

      <div className="container">
        <ContactInfoGrid/>
        <div
          ref={ref}
          className={`contact-form-section ${isVisible ? "motion-fade-up" : ""}`}
          style={{ animationDelay: "0.4s" }}
        >
          <ContactFormSection/>
          <OfficeMapCard/>
        </div>
        <FaqSection/>
        <CTASection />
      </div>
    </>
  );
}

export default Contact;
