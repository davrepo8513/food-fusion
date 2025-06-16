import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <div className="footer-logo-icon">🍕</div>
              <span className="footer-logo-text">Food-Fusion</span>
            </div>
            <p className="footer-description">
              Bringing you the finest culinary experiences with fresh ingredients 
              and authentic flavors. Your satisfaction is our passion.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/menu" className="footer-link">Menu</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
              <li><Link to="/cart" className="footer-link">Cart</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-section">
            <h3 className="footer-title">Categories</h3>
            <ul className="footer-links">
              <li><Link to="/menu?category=pizza" className="footer-link">Pizza</Link></li>
              <li><Link to="/menu?category=burger" className="footer-link">Burgers</Link></li>
              <li><Link to="/menu?category=dessert" className="footer-link">Desserts</Link></li>
              <li><Link to="/menu?category=drink" className="footer-link">Beverages</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={18} />
                <span>123 Food Street, Flavor City, FC 12345</span>
              </div>
              <div className="contact-item">
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <Mail size={18} />
                <span>info@food-fusion.com</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="newsletter">
              <h4 className="newsletter-title">Subscribe to Newsletter</h4>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-btn">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2024 Food-Fusion. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <Link to="/privacy" className="footer-bottom-link">Privacy Policy</Link>
              <Link to="/terms" className="footer-bottom-link">Terms of Service</Link>
              <Link to="/cookies" className="footer-bottom-link">Cookie Policy</Link>
            </div>
            <p className="made-with-love">
              Made with <Heart size={16} className="heart-icon" /> by Food-Fusion Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;