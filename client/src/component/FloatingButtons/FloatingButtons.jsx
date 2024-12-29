import React, { useState, useEffect } from "react";
import { FaTelegramPlane, FaWhatsapp, FaArrowUp } from "react-icons/fa";
import "./FloatingButtons.css";

const FloatingButtons = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="floating-buttons">
      <a
        href="https://t.me/YourTelegramLink"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-button telegram"
      >
        <FaTelegramPlane />
      </a>

      <a
        href="https://wa.me/YourWhatsAppNumber"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-button whatsapp"
      >
        <FaWhatsapp />
      </a>

      {showScroll && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default FloatingButtons;
