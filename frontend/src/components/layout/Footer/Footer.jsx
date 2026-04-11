import React from 'react'

function Footer() {
  return (
    <footer>
    <div className="container">
        <div className="footer-grid">
            <div className="footer-col">
                <h4>NovaMart</h4>
                <p>Your premium destination for authentic products, fast delivery, and exceptional customer service.</p>
                <div className="social-links">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                </div>
            </div>
            
            <div className="footer-col">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#"><i className="fas fa-chevron-right"></i> About Us</a></li>
                    <li><a href="#"><i className="fas fa-chevron-right"></i> Contact Us</a></li>
                    <li><a href="#"><i className="fas fa-chevron-right"></i> Track Order</a></li>
                    <li><a href="#"><i className="fas fa-chevron-right"></i> Returns Policy</a></li>
                    <li><a href="#"><i className="fas fa-chevron-right"></i> FAQ</a></li>
                </ul>
            </div>

            <div className="footer-col">
                <h4>Categories</h4>
                <ul>
                    <li><a href="#"><i className="fas fa-chevron-right"></i> Electronics</a></li>
                    <li><a href="#"><i className="fas fa-chevron-right"></i> Men's Fashion</a></li>
                    <li><a href="#"><i className="fas fa-chevron-right"></i> Women's Wear</a></li>
                    <li><a href="#"><i className="fas fa-chevron-right"></i> Home & Living</a></li>
                    <li><a href="#"><i className="fas fa-chevron-right"></i> Sports & Outdoors</a></li>
                </ul>
            </div>
            
            <div className="footer-col">
                <h4>Stay Updated</h4>
                <ul>
                    <li><i className="fas fa-map-marker-alt"></i> 123 Commerce St, NYC</li>
                    <li><i className="fas fa-envelope"></i> hello@novamart.com</li>
                    <li><i className="fas fa-phone-alt"></i> +1 (888) 789-1234</li>
                </ul>
                <div className="newsletter">
                    <input type="email" placeholder="Your email address"/>
                    <button>Subscribe →</button>
                </div>
            </div>
        </div>
        
        <div className="footer-bottom">
            <p>&copy; 2025 NovaMart. All rights reserved. | Designed with <i className="fas fa-heart" style={{color:'#ef4444'}}></i> for modern shopping</p>
            <div className="payment-icons">
                <i className="fab fa-cc-visa"></i>
                <i className="fab fa-cc-mastercard"></i>
                <i className="fab fa-cc-amex"></i>
                <i className="fab fa-cc-paypal"></i>
                <i className="fab fa-apple-pay"></i>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer