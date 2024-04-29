import React, { useState } from "react";
import "../css/Faq.css";

function Faq() {
  return (
    <div className="faq-container">
      <h1 style={{ width: "100%", textAlign: "center" }}>
        Frequently Asked Questions
      </h1>
      <div className="faq-cards">
        <FaqCard
          question="What is the purpose of this website?"
          answer="This website is designed to help you schedule appointments with mentors."
        />
        <FaqCard
          question="What is a mentor?"
          answer="A mentor is an experienced individual who can provide guidance and advice."
        />
        <FaqCard
          question="What happens if there are no available appointments?"
          answer="You will be assigned to a wait list.  The next available appointment will be reserved for
          you."
        />
        <FaqCard
            question="How do I schedule an appointment?"
            answer="First, select a mentor from the dropdown menu. Then, select a date and time for your appointment."
        />
      </div>
    </div>
  );
}

function FaqCard({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-card ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <div className="faq-question">
        <h3>{question}</h3>
        {isOpen ? (
          <i className="material-icons">expand_less</i>
        ) : (
          <i className="material-icons">expand_more</i>
        )}
      </div>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
}

export default Faq;
