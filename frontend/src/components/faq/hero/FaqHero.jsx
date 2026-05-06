import React from "react";
import HeroLeftContent from "../../shared/hero/HeroLeftContent";
import { faqHeroData, faqHeroRightData } from "../../shared/hero/heroData";
import HeroRightContent from "../../shared/hero/HeroRightContent";

function FaqHero() {
  return (
    <section class="faq-hero">
      <div className="hero-split">
        <HeroLeftContent
          title={faqHeroData.title}
          description={faqHeroData.description}
          stats={faqHeroData.stats}
        />
        <HeroRightContent
          image={faqHeroRightData.image}
          alt={faqHeroRightData.alt}
          badge={faqHeroRightData.badge}
        />
      </div>
    </section>
  );
}

export default FaqHero;
