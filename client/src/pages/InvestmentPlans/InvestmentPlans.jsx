import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./InvestmentPlans.css";
import HeroSection from "../../component/HeroSection/HeroSection";

const InvestmentPlans = () => {
  const plans = [
    {
      name: "Basic",
      range: "NGN1,000 - NGN5,000",
      features: [
        "10% Earning",
        "Low risk investment",
        "24/7 Support",
        "Daily returns [2-3 days]",
      ],
    },
    {
      name: "Silver",
      range: "NGN6,000 - NGN20,000",
      features: [
        "20% Earning",
        "Moderate risk investment",
        "Daily returns[5 days]",
        "24/7 Support",
        "Priority support",
      ],
    },
    {
      name: "Gold",
      range: "NGN21,000 - NGN50,000",
      features: [
        "35% Earning",
        "Weekly returns [1-2 Weeks]",
        "High potential returns",
        "24/7 Support",
        "Priority support",
        "Weekly updates",
        "Financial advisory",
      ],
    },
    {
      name: "Diamond",
      range: "NGN51,000 - Unlimited",
      features: [
        "40% Earning",
        "Monthly returns ",
        "High potential returns",
        "24/7 Support",
        "Priority support",
        "Weekly updates",
        "Financial advisory",
        "Premium risk investment",
        "Daily updates",
        "Personal account manager",
      ],
    },
  ];

  return (
    <div>
      <HeroSection />

      <section className="InvestmentPlansSection">
        <div className="Container">
          <h2 className="SectionTitle">Our Investment Plans</h2>
          <div className="PlansGrid">
            {plans.map((plan, index) => (
              <div className="PlanCard" key={index}>
                <h3 className="PlanName">{plan.name}</h3>
                <p className="PlanRange">{plan.range}</p>
                <ul className="PlanFeatures">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <FaCheckCircle className="FeatureIcon" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestmentPlans;
