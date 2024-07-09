// src/components/Footer.js
import React from 'react';
import './footer.css'; // We'll create this CSS file later

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <h3>LINKS</h3>
          <p><a href="/home">Home</a></p>
          <p><a href="/products">Products</a></p>
          <p><a href="/about">About</a></p>
          <p><a href="/contact">Contact</a></p>
        </div>
        <div className="footer-links">
          <h3>Useful Links</h3>
          <p><a href="/terms">Terms & Conditions</a></p>
          <p><a href="/privacy">Privacy Policy</a></p>
          <p><a href="/shipping">Shipping Policy</a></p>
          <p><a href="/refund">Refund Policy</a></p>
        </div>
        <div className="footer-about">
          <h3>Contact Us</h3>
          <p>Email: info@mysite.com</p>
          <p>Tel: 123-456-7890</p>
          <p>500 Terry Francine Street, San Francisco, CA 94158</p>
        </div>
        <div className="hero">
          <h3>SOCIAL</h3>
          <div className="social-icons">
            <a href="https://facebook.com" className="social-icon facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" className="social-icon twitter"><i className="fab fa-twitter"></i></a>
            <a href="https://linkedin.com" className="social-icon linkedin"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://instagram.com" className="social-icon instagram"><i className="fab fa-instagram"></i></a>
            <a href="mailto:info@example.com" className="social-icon email"><i className="fas fa-envelope"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-copy">
        <h4>Copyright &copy; Shreeji International&trade;</h4>
      </div>
    </footer>
  );
}

export default Footer;
