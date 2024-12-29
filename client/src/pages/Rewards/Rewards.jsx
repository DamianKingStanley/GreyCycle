import React from "react";
import { FaTrophy, FaGift, FaStar } from "react-icons/fa";
import "./Rewards.css";
import HeroSection from "../../component/HeroSection/HeroSection";

const rewardsData = [
  {
    icon: <FaTrophy className="RewardIcon" />,
    title: "Achievement Bonus",
    description:
      "Receive special rewards for reaching significant investment milestones.",
  },
  {
    icon: <FaGift className="RewardIcon" />,
    title: "Referral Program",
    description:
      "Earn bonuses by referring others to join our investment platform.",
  },
  {
    icon: <FaStar className="RewardIcon" />,
    title: "Loyalty Benefits",
    description:
      "Exclusive rewards for long-term investors with consistent growth.",
  },
];

const Rewards = () => {
  return (
    <div>
      <HeroSection />

      <section className="RewardsSection">
        <div className="Container">
          <h2 className="SectionTitle">Our Rewards</h2>
          <div className="RewardsGrid">
            {rewardsData.map((reward, index) => (
              <div className="RewardCard" key={index}>
                {reward.icon}
                <h3>{reward.title}</h3>
                <p>{reward.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rewards;
