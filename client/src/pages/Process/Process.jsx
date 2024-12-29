import React from "react";
import {
  FaClipboardCheck,
  FaCogs,
  FaChartBar,
  FaCheckCircle,
} from "react-icons/fa";
import "./Process.css";
import HeroSection from "../../component/HeroSection/HeroSection";

const steps = [
  {
    icon: <FaClipboardCheck className="StepIcon" />,
    title: "Sign Up",
    description: "Create your account to start your investment journey.",
  },
  {
    icon: <FaCogs className="StepIcon" />,
    title: "Choose Plan",
    description: "Select the investment plan that best suits your goals.",
  },
  {
    icon: <FaChartBar className="StepIcon" />,
    title: "Track Progress",
    description: "Monitor your investment growth through our dashboard.",
  },
  {
    icon: <FaCheckCircle className="StepIcon" />,
    title: "Reap Rewards",
    description: "Withdraw your earnings or reinvest to grow even further.",
  },
];

const Process = () => {
  return (
    <div>
      <HeroSection />

      <section className="ProcessSection">
        <div className="Container">
          <h2 className="SectionTitle">Our Process</h2>
          <div className="ProcessGrid">
            {steps.map((step, index) => (
              <div className="ProcessStep" key={index}>
                {step.icon}
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
