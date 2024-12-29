import React from "react";
import { FaMoneyBillWave, FaArrowRight, FaChartLine } from "react-icons/fa";
import "./CashFlow.css";
import HeroSection from "../../component/HeroSection/HeroSection";

const CashFlow = () => {
  return (
    <div>
      <HeroSection />

      <section className="CashFlowSection">
        <div className="Container">
          <h2 className="SectionTitle">Cash Flow</h2>
          <div className="CashFlowSteps">
            <div className="CashFlowStep">
              <FaMoneyBillWave className="StepIcon" />
              <h3>Invest</h3>
              <p>
                Start your journey by making an investment in one of our
                packages.
              </p>
            </div>
            <FaArrowRight className="ArrowIcon" />
            <div className="CashFlowStep">
              <FaChartLine className="StepIcon" />
              <h3>Grow</h3>
              <p>
                Your investment grows through our proven strategies and
                technologies.
              </p>
            </div>
            <FaArrowRight className="ArrowIcon" />
            <div className="CashFlowStep">
              <FaMoneyBillWave className="StepIcon" />
              <h3>Withdraw</h3>
              <p>Easily withdraw your earnings or reinvest for more growth.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CashFlow;
