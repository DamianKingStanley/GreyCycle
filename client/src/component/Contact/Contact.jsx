import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="ContactSection">
      <div className="Container">
        <h2 className="SectionTitle">Get in Touch</h2>
        <p className="ContactDescription">
          Have questions? Reach out to us via any of the methods below, and
          we'll be happy to assist you.
        </p>
        <div className="ContactGrid">
          <div className="ContactCard">
            <FaEnvelope className="ContactIcon" />
            <h3>Email Us</h3>
            <p>support@greycycle.com</p>
          </div>
          <div className="ContactCard">
            <FaPhone className="ContactIcon" />
            <h3>Call Us</h3>
            <p>+123 456 7890</p>
          </div>
          <div className="ContactCard">
            <FaMapMarkerAlt className="ContactIcon" />
            <h3>Visit Us</h3>
            <p>123 Blockchain Avenue, Crypto City</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
