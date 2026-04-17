import "../components/contact/contact.css";
import {
  contactHeroLeftData,
  contactHeroRightData,
  contactHeroStats,
} from "../components/shared/hero/heroData";
import HeroLeftContent from "../components/shared/hero/HeroLeftContent";
import HeroRightContent from "../components/shared/hero/HeroRightContent";

function Contact() {
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
        {/* CONTACT INFO CARDS */}
        <div className="contact-info-grid">
          <div className="info-card">
            <div className="info-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3>Visit Us</h3>
            <p>
              123 Commerce Avenue
              <br />
              Suite 450, New York, NY 10001
              <br />
              United States
            </p>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h3>Call Us</h3>
            <p>
              Sales & Support: <a href="tel:+18887891234">+1 (888) 789-1234</a>
              <br />
              Mon-Fri, 9am - 8pm EST
              <br />
              Weekend: 10am - 5pm EST
            </p>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <h3>Email Us</h3>
            <p>
              <a href="mailto:hello@novamart.com">hello@novamart.com</a>
              <br />
              <a href="mailto:support@novamart.com">support@novamart.com</a>
              <br />
              Response within 24 hours
            </p>
          </div>
        </div>

        {/* CONTACT FORM + MAP */}
        <div className="contact-form-section">
          <div className="form-card">
            <h2>Send us a message</h2>
            <p>
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>

            <form>
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" placeholder="John Doe" />
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input type="email" placeholder="hello@example.com" />
              </div>

              <div className="form-group">
                <label>Subject</label>
                <select>
                  <option>General Inquiry</option>
                  <option>Order Status</option>
                  <option>Returns & Refunds</option>
                  <option>Partnership Opportunity</option>
                  <option>Technical Support</option>
                </select>
              </div>

              <div className="form-group">
                <label>Message *</label>
                <textarea rows="5" placeholder="Tell us how we can help..." />
              </div>

              <button type="button" className="submit-btn">
                Send Message →
              </button>
            </form>
          </div>

          <div className="map-card">
            <img
              src="https://picsum.photos/id/15/600/450"
              alt="Office Location Map"
            />
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="faq-section">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions</p>
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <div className="faq-question">
                <span>How long does shipping take?</span>
              </div>
              <div className="faq-answer">
                Standard shipping takes 3-5 business days. Express shipping (1-2
                days) is available at checkout. International orders may take
                7-14 days.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <span>What's your return policy?</span>
              </div>
              <div className="faq-answer">
                We offer 30-day hassle-free returns on all unused items in
                original packaging. Free returns for defective products.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <span>Do you offer international shipping?</span>
              </div>
              <div className="faq-answer">
                Yes! We ship to over 120 countries worldwide.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <span>How can I track my order?</span>
              </div>
              <div className="faq-answer">
                You will receive a tracking number via email after shipment.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <span>What payment methods do you accept?</span>
              </div>
              <div className="faq-answer">
                Visa, Mastercard, PayPal, Apple Pay, Google Pay, and more.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <span>How do I change or cancel my order?</span>
              </div>
              <div className="faq-answer">
                Contact support within 1 hour of placing your order.
              </div>
            </div>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="cta-section">
          <h2>Join the NovaMart Family</h2>
          <p>Subscribe to our newsletter for exclusive deals and updates.</p>

          <div
            style={{
              display: "flex",
              gap: "12px",
              maxWidth: "500px",
              margin: "24px auto 0",
              flexWrap: "wrap",
            }}
          >
            <input
              type="email"
              placeholder="Your email address"
              style={{
                flex: 1,
                padding: "14px 20px",
                border: "none",
                outline: "none",
              }}
            />

            <button
              className="cta-btn"
              style={{
                margin: 0,
                background: "white",
                color: "#1e40af",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
