import React from "react";
import "./InvestingWithUs.css"; // Add the CSS for styling
import placeholderImage1 from "../../assets/invest1.jpg";
import placeholderImage2 from "../../assets/invest2.jpg";
import placeholderImage3 from "../../assets/invest3.jpg";
import placeholderImage4 from "../../assets/hero1.jpg";
import { Link } from "react-router-dom";

const InvestingWithUs = () => {
  return (
    <section className="InvestingSection">
      <div className="Container">
        <div className="TextSection">
          <h3>Investing with GreyCycle</h3>
          <p>
            At GreyCycle, we don't just invest your money; we transform it into
            opportunities. Unlike traditional investment firms that might focus
            solely on financial markets, we take a diversified approach: Your
            funds are invested directly into promising businesses across various
            sectors, from technology startups to established enterprises seeking
            expansion. This direct investment model allows us to: Support local
            and global economies by fostering business growth. Provide investors
            with exposure to unique opportunities not typically accessible
            through public markets. Potentially yield higher returns as these
            businesses grow and thrive.
          </p>
          <p>
            Our team at GreyCycle doesn't just set and forget. We: Engage with
            Investees: We work closely with the businesses we invest in,
            offering strategic advice, networking opportunities, and operational
            support to enhance their success. Dynamic Portfolio Adjustment: We
            continuously monitor market conditions, economic trends, and
            individual business performance to adjust your portfolio
            dynamically, ensuring it remains aligned with your investment goals
            and risk tolerance.
          </p>

          <Link to="/">
            <p className="ReadMore">Read More</p>
          </Link>
        </div>

        <div className="ImageSection">
          <img src={placeholderImage1} alt="Ataash Limited Overview" />
          <img src={placeholderImage2} alt="Investing Benefits" />
          <img src={placeholderImage3} alt="Crypto Strategies" />
          <img src={placeholderImage4} alt="Crypto Strategies" />
        </div>
      </div>
    </section>
  );
};

export default InvestingWithUs;
