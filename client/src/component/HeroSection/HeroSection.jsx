import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import banner1 from "../../assets/hero1.jpg";
import banner2 from "../../assets/hero2.PNG";
import banner3 from "../../assets/hero3.jpg";

const slides = [
  {
    title: "Invest Smart, Unlock Opportunities",
    description:
      "Start small, dream big—make every naira count with our smart investment platform.",
    image: banner1,
  },
  {
    title: "Your Money, Your Future",
    description:
      "Join thousands of Nigerians securing their future with safe, impactful investments.",
    image: banner2,
  },
  {
    title: "Grow Together, Win Together",
    description:
      "Your journey to financial independence starts here. Let’s grow wealth, one step at a time.",
    image: banner3,
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-section">
      <div
        className="slide"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
        }}
      >
        <div className="overlay"></div>
        <div className="content">
          <h1>{slides[currentSlide].title}</h1>
          <p>{slides[currentSlide].description}</p>
          <button className="HeroSectionBtn">Get Started</button>
        </div>
      </div>

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
