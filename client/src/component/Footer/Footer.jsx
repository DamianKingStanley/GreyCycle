import React from "react";
import "./Footer.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaReddit,
  FaWhatsapp,
  FaTelegram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaVk,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h4>About GreyCycle Limited</h4>
          <p>
            To obtain higher performance, Our leaders first identify the
            critical obstacles to forward progress and then develop a coherent
            approach to overcoming them. We define your company mission and
            prioritize company objectives.
          </p>
          <div className="social-icons">
            <FaReddit />
            <FaWhatsapp />
            <FaTelegram />
            <FaPinterest />
            <FaTwitter />
            <FaYoutube />
            <FaInstagram />
            <FaFacebook />
            <FaVk />
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about-us">
              <li>About Us</li>
            </Link>
            <Link to="/contact-us">
              <li>Contact Us</li>
            </Link>
            <Link to="/register">
              <li>Registration</li>
            </Link>
            <a href="#faq">
              <li>FAQ</li>
            </a>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Policy</h4>
          <ul>
            <Link to="/privacy">
              <li>Privacy Policy</li>
            </Link>
            <Link to="/terms">
              <li>Terms of use</li>
            </Link>
            <Link to="/anti-money-laundering">
              <li>Anti Money Laundering</li>
            </Link>
            <Link to="/risk-disclaimer">
              <li>Risk Disclaimer</li>
            </Link>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Get in Touch</h4>
          <ul>
            <li>
              <FaPhoneAlt /> +44 7452 215114
            </li>
            <li>
              <FaPhoneAlt /> +44 7520 692396
            </li>
            <li>
              <FaEnvelope /> support@greycycle.com
            </li>
            <li>
              <FaMapMarkerAlt /> 55 Ludgate Hill, London EC4M 7JW, UK
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024 GreyCycle Limited. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
