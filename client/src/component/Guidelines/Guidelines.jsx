import React from "react";
import "./Guidelines.css";

const guidelines = [
  "Invest only what you can afford to lose.",
  "Understand the risks of investment",
  "Monitor your investments regularly through our dashboard.",
  "Contact support for any clarifications or issues.",
];

const Guidelines = () => {
  return (
    <section className="GuidelinesSection">
      <div className="Container">
        <h2 className="SectionTitle">Investment Guidelines</h2>
        <ul className="GuidelinesList">
          {guidelines.map((guideline, index) => (
            <li key={index} className="GuidelineItem">
              {guideline}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Guidelines;
