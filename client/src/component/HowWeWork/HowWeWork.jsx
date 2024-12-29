import React from "react";
import { FaUser, FaBusinessTime, FaDollarSign, FaRedo } from "react-icons/fa";
import "./HowWeWork.css";

const HowWeWork = () => {
  return (
    <section className="HowWeWorkSection">
      <div className="Container">
        <h2 className="SectionTitle">How We Work</h2>

        <div className="WorkStep">
          <FaUser className="Icon" />
          <h3>Investors</h3>
          <p>
            We collaborate with investors who are ready to put their money to
            work. Ataash Limited ensures a seamless experience for all
            investors.
          </p>
        </div>

        <div className="WorkStep">
          <FaBusinessTime className="Icon" />
          <h3>We Invest</h3>
          <p>
            We allocate funds into reliable and thoroughly vetted businesses to
            maximize returns and minimize risks.
          </p>
        </div>

        <div className="WorkStep">
          <FaDollarSign className="Icon" />
          <h3>Earnings</h3>
          <p>
            Earnings are distributed based on the duration of the investment and
            the agreed percentage, ensuring a fair return for every investor.
          </p>
        </div>

        <div className="WorkStep">
          <FaRedo className="Icon" />
          <h3>Withdraw and Reinvest</h3>
          <p>
            After the earnings are allocated, investors can withdraw their funds
            or choose to reinvest for further growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
