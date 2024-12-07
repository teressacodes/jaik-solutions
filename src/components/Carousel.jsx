import React, { useState, useEffect } from "react";

const Carousel = () => {
  const slides = [
    {
      heading1: "A Creative App & SAAS Development Company",
      heading2: "Let Us Worry About Your Technology Needs",
      paragraph:
        "JAIK Solutions Inc specializes in Cloud computing and the development of iOS, Android, and Web applications.",
    },
    {
      heading1: "Cloud Computing",
      heading2:
        "Need help migrating all or some of your on-premise infrastructure to the Cloud?",
      paragraph:
        "JAIK Solutions Inc has a team of experts that can perform the migration for you or assist your team through the migration process.",
    },
    {
      heading1: "Mobile Development",
      heading2: "Do you need a mobile application for your business?",
      paragraph:
        "JAIK Solutions Inc has a team of developers that can create amazing iOS or Android applications.",
    },
    {
      heading1: "Web Development",
      heading2: "Do you need a web application for your business?",
      paragraph:
        "JAIK Solutions Inc has a team of developers that can create a monolithic or microservice web application in the language of your choice.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer); // Cleanup on unmount
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="homecarousel">
      <button className="homecarousel-button prev" onClick={prevSlide}>
        &#8249;
      </button>
      <div className="homecarousel-slide">
        <div className="homecarousel-content">
          <h1 className="fade">{slides[currentSlide].heading1}</h1>
          <h2 className="fade">{slides[currentSlide].heading2}</h2>
          <p className="fade">{slides[currentSlide].paragraph}</p>
        </div>
      </div>
      <button className="homecarousel-button next" onClick={nextSlide}>
        &#8250;
      </button>
      <div className="homecarousel-indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`indicator ${currentSlide === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
