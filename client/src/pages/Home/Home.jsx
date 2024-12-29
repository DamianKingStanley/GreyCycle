import React from "react";
import "./Home.css";
import HeroSection from "../../component/HeroSection/HeroSection";
import InvestingWithUs from "../../component/Invest/InvestingWithUs";
import HowWeWork from "../../component/HowWeWork/HowWeWork";
import WhyChooseUs from "../../component/WhyChooseUs/WhyChooseUs";
import WhoWeAre from "../../component/WhoWeAre/WhoWeAre";
import Guidelines from "../../component/Guidelines/Guidelines";
import Support from "../../component/Support/Support";
import FAQ from "../../component/FAQ/FAQ";

const Home = () => {
  return (
    <div className="HomepageBody">
      <HeroSection />
      <InvestingWithUs />
      <div id="WhoWeAre">
        <WhoWeAre />
      </div>
      <div id="HowWeWork">
        <HowWeWork />
      </div>
      <div id="WhyChooseUs">
        <WhyChooseUs />
      </div>

      <div id="Guidelines">
        <Guidelines />
      </div>
      <div id="Support">
        <Support />
      </div>
      <div id="faq">
        <FAQ />
      </div>
    </div>
  );
};

export default Home;
