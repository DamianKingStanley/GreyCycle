import React from "react";
import { FaHandsHelping, FaHeadset, FaLifeRing } from "react-icons/fa";
import "./Support.css";

const supportMethods = [
  {
    icon: <FaHeadset className="SupportIcon" />,
    title: "24/7 Support",
    description: "Our team is available around the clock to assist you.",
  },
  {
    icon: <FaHandsHelping className="SupportIcon" />,
    title: "Live Chat",
    description: "Chat directly with our support agents for immediate help.",
  },
  {
    icon: <FaLifeRing className="SupportIcon" />,
    title: "Frequently Asked Qusetion",
    description: "Find answers to common questions in our FAQ",
  },
];

const Support = () => {
  return (
    <section className="SupportSection">
      <div className="Container">
        <h2 className="SectionTitle">Support</h2>
        <div className="SupportGrid">
          {supportMethods.map((method, index) => (
            <div className="SupportCard" key={index}>
              {method.icon}
              <h3>{method.title}</h3>
              <p>{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;
