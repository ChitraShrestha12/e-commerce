import "../components/about/about.css";
import HeroLeftContent from "../components/about/HeroLeftContent";
import HeroRightContent from "../components/about/HeroRightContent";
import MissionSection from "../components/about/MissionSection";
import ValuesSection from "../components/category/ValuesSection";

function About() {
  return (
    <>
      <section className="about-hero">
        <div className="hero-split">
          <HeroLeftContent />
          <HeroRightContent />
        </div>
      </section>
      <div className="container">
        <MissionSection />
      </div>
      <ValuesSection />

      <div className="container">
        {/* <!-- TEAM SECTION --> */}
        <div className="team-section">
          <div className="section-title">
            <h2>Meet the Visionaries</h2>
            <p>Passionate creators, engineers, and curators behind NovaMart.</p>
          </div>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-img">
                <i className="fas fa-user-tie"></i>
              </div>
              <h4>Olivia Chen</h4>
              <p className="team-role">CEO & Founder</p>
              <span style={{ fontSize: "0.7rem" }}>
                ex-Amazon, 15yrs retail
              </span>
            </div>
            <div className="team-card">
              <div className="team-img">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h4>Marcus Wright</h4>
              <p className="team-role">CTO</p>
              <span style={{ fontSize: "0.7rem" }}>AI & logistics expert</span>
            </div>
            <div className="team-card">
              <div className="team-img">
                <i className="fas fa-palette"></i>
              </div>
              <h4>Elena Rossi</h4>
              <p className="team-role">Creative Director</p>
              <span style={{ fontSize: "0.7rem" }}>Award-winning designer</span>
            </div>
            <div className="team-card">
              <div className="team-img">
                <i className="fas fa-handshake"></i>
              </div>
              <h4>David Okafor</h4>
              <p className="team-role">Head of Operations</p>
              <span style={{ fontSize: "0.7rem" }}>Global supply chain</span>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- TESTIMONIALS - MODERN SPLIT LAYOUT, NO ROUNDED CORNERS --> */}
      <div className="testimonials">
        <div className="testimonial-split">
          <div className="testimonial-left">
            <div className="testimonial-rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <h2>Loved by shoppers worldwide</h2>
            <p>
              Real stories from our community of over 500,000 happy customers.
            </p>
            <div className="testimonial-stats">
              <div className="testimonial-stat">
                <div className="testimonial-stat-number">4.92</div>
                <div className="testimonial-stat-label">Average Rating</div>
              </div>
              <div className="testimonial-stat">
                <div className="testimonial-stat-number">15K+</div>
                <div className="testimonial-stat-label">5-Star Reviews</div>
              </div>
              <div className="testimonial-stat">
                <div className="testimonial-stat-number">98%</div>
                <div className="testimonial-stat-label">Would Recommend</div>
              </div>
            </div>
          </div>
          <div className="testimonial-right">
            <div className="testimonial-item">
              <div className="testimonial-text">
                "NovaMart completely changed how I shop online. The quality
                check is unmatched and delivery always arrives early."
              </div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  <i className="fas fa-user"></i>
                </div>
                <div className="testimonial-info">
                  <strong>Sarah K.</strong>
                  <span>Verified Buyer</span>
                </div>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-text">
                "Their customer support resolved my issue in under 2 hours.
                That's unheard of! Loyal customer for life."
              </div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  <i className="fas fa-user"></i>
                </div>
                <div className="testimonial-info">
                  <strong>James M.</strong>
                  <span>Tech Enthusiast</span>
                </div>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-text">
                "The curated collections are incredible. I've discovered so many
                unique brands I wouldn't find elsewhere."
              </div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  <i className="fas fa-user"></i>
                </div>
                <div className="testimonial-info">
                  <strong>Priya N.</strong>
                  <span>Fashion Blogger</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- CTA SECTION --> */}
      <div className="container">
        <div className="cta-section">
          <h2>Ready to experience the difference?</h2>
          <p>Join thousands of happy customers and shop with confidence.</p>
          <a href="#" className="cta-btn">
            Start Shopping →
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
