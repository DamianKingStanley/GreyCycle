import React from "react";
import { FaRegHandshake, FaRocket, FaAward } from "react-icons/fa";
import "./WhoWeAre.css";

const WhoWeAre = () => {
  return (
    <section className="WhoWeAreSection">
      <div className="Container">
        <h2 className="SectionTitle">Who We Are</h2>
        <p className="Description">
          We are a trusted investment company committed to creating financial
          opportunities for individuals and organizations. With years of
          experience in blockchain, trading, and wealth management, we pave the
          way for a secure financial future.
        </p>
        <div className="FeaturesGrid">
          <div className="FeatureCard">
            <FaRegHandshake className="FeatureIcon" />
            <h3>Trusted Partnership</h3>
            <p>Building lasting relationships with our investors.</p>
          </div>
          <div className="FeatureCard">
            <FaRocket className="FeatureIcon" />
            <h3>Innovative Solutions</h3>
            <p>Leveraging the latest technologies in blockchain and finance.</p>
          </div>
          <div className="FeatureCard">
            <FaAward className="FeatureIcon" />
            <h3>Proven Excellence</h3>
            <p>Consistently delivering results for our stakeholders.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
