import React from "react";
import "../styles/Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaHeart,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="footer-content">
        <div className="footer-section">
          <h3>Skill Swap Hub</h3>
          <p>
            Empowering people to learn, share, and grow through skill exchange.
            Connect with others, expand your knowledge, and discover new
            passions.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/browse">Browse Skills</a>
            </li>
            <li>
              <a href="/my-skills">My Skills</a>
            </li>
            <li>
              <a href="/messages">Messages</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>123 Learning Lane, Knowledge City</span>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span>+254 799 657 824</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>support@skillswaphub.com</span>
          </div>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <p>
            Stay connected and discover more learning opportunities on our
            social platforms.
          </p>
          <div className="socials">
            <div className="tooltip">
              <a
                href="https://facebook.com/skillswaphub"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook className="social-icon" />
              </a>
              <span className="tooltiptext">Facebook</span>
            </div>
            <div className="tooltip">
              <a
                href="https://instagram.com/skillswaphub"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="social-icon" />
              </a>
              <span className="tooltiptext">Instagram</span>
            </div>
            <div className="tooltip">
              <a
                href="https://wa.me/254799657824"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="social-icon" />
              </a>
              <span className="tooltiptext">WhatsApp</span>
            </div>
            <div className="tooltip">
              <a
                href="https://x.com/skillswaphub"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter className="social-icon" />
              </a>
              <span className="tooltiptext">Twitter</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Skill Swap Hub. Built with{" "}
          <FaHeart className="heart-icon" /> by learners, for learners.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
