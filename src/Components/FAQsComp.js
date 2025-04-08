import React, { useState } from 'react';

function FaqsPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What is the best currency converter?",
      answer: "The best currency converter is the one that provides accurate and up-to-date exchange rates, user-friendly interface, and additional features like historical data and conversion charts."
    },
    {
      question: "Is the currency data real-time accurate?",
      answer: "Yes, the data is pulled from reliable sources and updated frequently to ensure high accuracy."
    },
    {
      question: "Can I access historical exchange rates?",
      answer: "Absolutely! Our API and app both support access to historical currency rates up to 10 years back."
    },
    {
      question: "Is there a mobile app version available?",
      answer: "Yes, both Android and iOS versions are available. You can download them from the respective stores."
    },
    {
      question: "Do I need to create an account to use the API?",
      answer: "Yes, creating a free account gives you access to an API key and allows you to track your usage."
    }
  ];

  const handleToggle = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="faqs-container">
      <div className="page-cover center">
        <img src="/Assets/Images/FAQs-rafiki.png" alt="FAQs" className="faq-image" />
        <div className="faqs">
          {faqs.map((faq, index) => (
            <div className="faq-holder" key={index}>
              <div 
                className="question-holder" 
                onClick={() => handleToggle(index)}
              >
                <p>
                  {faq.question} <i className="fa-solid fa-question" />
                </p>
                <i className={`fa-solid fa-arrow-down ${openFaq === index ? 'fa-rotate-180' : ''}`} />
              </div>
              <div className={`answer ${openFaq === index ? 'visible' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FaqsPage;