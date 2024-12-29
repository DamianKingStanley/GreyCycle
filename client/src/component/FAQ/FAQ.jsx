import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./FAQ.css";

// FAQ Component Continued
const faqData = [
  {
    question: "What is GreyCycle Limited?",
    answer:
      "GreyCycle Limited is an investment platform focused on crypto trading and asset growth.",
  },
  {
    question: "How do I start investing?",
    answer: "Simply sign up, choose a plan, and deposit funds to begin.",
  },
  {
    question: "What is the risk involved?",
    answer:
      "Every investment has a risk. We ensure reliability, and profits are  guaranteed.",
  },
  {
    question: "Can I withdraw my funds at any time?",
    answer:
      "Yes, you can withdraw your funds based on the terms of your selected plan.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept bank transfers, credit/debit cards, and cryptocurrencies.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we employ advanced security measures to keep your data safe.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Yes, our support team is available 24/7 to assist you with any inquiries.",
  },
  {
    question: "What happens if I miss a payment?",
    answer:
      "You are advised to contact our support team to resolve payment issues promptly.",
  },
  {
    question: "Are there fees associated with withdrawals?",
    answer: "Yes, minimal fees may apply depending on the withdrawal method.",
  },
  {
    question: "Can I reinvest my profits?",
    answer:
      "Absolutely! You can reinvest your earnings to compound your returns.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="FAQSection">
      <div className="Container">
        <h2 className="SectionTitle">Frequently Asked Questions</h2>
        <div className="FAQList">
          {faqData.map((item, index) => (
            <div className="FAQItem" key={index}>
              <div className="FAQQuestion" onClick={() => toggleFAQ(index)}>
                <h3>{item.question}</h3>
                {openIndex === index ? (
                  <FaChevronUp className="FAQIcon" />
                ) : (
                  <FaChevronDown className="FAQIcon" />
                )}
              </div>
              {openIndex === index && (
                <div className="FAQAnswer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
