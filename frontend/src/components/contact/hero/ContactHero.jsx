import React from 'react'
import HeroLeftContent from '../../shared/hero/HeroLeftContent'
import { contactHeroLeftData, contactHeroRightData, contactHeroStats } from '../../shared/hero/heroData'
import HeroRightContent from '../../shared/hero/HeroRightContent'

function ContactHero() {
  return (
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
  )
}

export default ContactHero