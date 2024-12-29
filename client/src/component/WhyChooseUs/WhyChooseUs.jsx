import React from "react";
import {
  FaRegHandshake,
  FaBalanceScale,
  FaBullseye,
  FaEye,
} from "react-icons/fa";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <section className="WhyChooseUsSection">
      <div className="Container">
        <h2 className="SectionTitle">Why Choose Us</h2>
        <div className="Features">
          <div className="FeatureBox">
            <FaRegHandshake className="FeatureIcon" />
            <h3>Our Foundation</h3>
            <p>
              Built on principles of trust, integrity, and professionalism, our
              foundation empowers us to deliver exceptional financial services
              to clients worldwide.
            </p>
          </div>

          <div className="FeatureBox">
            <FaBalanceScale className="FeatureIcon" />
            <h3>Our Values</h3>
            <p>
              Transparency, accountability, and innovation drive every decision
              we make. We prioritize ethical practices and sustainable growth.
            </p>
          </div>

          <div className="FeatureBox">
            <FaBullseye className="FeatureIcon" />
            <h3>Our Mission</h3>
            <p>
              To simplify investment opportunities for everyone while maximizing
              profitability through cutting-edge technology and industry
              expertise.
            </p>
          </div>

          <div className="FeatureBox">
            <FaEye className="FeatureIcon" />
            <h3>Our Vision</h3>
            <p>
              To become a globally recognized leader in investment services by
              fostering innovation, trust, and financial empowerment for all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
