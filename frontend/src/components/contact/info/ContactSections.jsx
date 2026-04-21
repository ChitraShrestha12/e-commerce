import React from 'react'
import ContactInfoGrid from './ContactInfoGrid'
import ContactFormSection from '../form/ContactFormSection'
import OfficeMapCard from '../map/OfficeMapCard'
import FaqSection from '../faq/FaqSection'
import CTASection from '../cta/CTASection'
import useInView from '../../../hooks/useInView'

function ContactSections() {
     const [ref, isVisible] = useInView();
  return (
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
        <CTASection/>
      </div>
  )
}

export default ContactSections