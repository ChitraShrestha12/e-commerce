import React from 'react'
import HeroLeftContent from '../../shared/hero/HeroLeftContent'
import HeroRightContent from '../../shared/hero/HeroRightContent'
import { aboutHeroLeftData, aboutHeroRightData, aboutHeroStats } from '../../shared/hero/heroData'

function AboutHero() {
  return (
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
  )
}

export default AboutHero