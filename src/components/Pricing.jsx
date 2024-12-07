import React from "react";

const Pricing = () => {
  const pricing = [
    {
      title: "Cloud Computing",
      price: "$100–150/hr",
      description:
        "Cloud Setup, Cloud Administration, On-Premise to Cloud Migration",
    },
    {
      title: "iOS Development",
      price: "$25-90/hr",
      description:
        "Project Planning & Management, Native Development, JavaScript Frameworks",
    },
    {
      title: "Android Development",
      price: "$25-90/hr",
      description:
        "Project Planning & Management, Native Development, JavaScript Frameworks",
    },
    {
      title: "Web Development",
      price: "$25-90/hr",
      description:
        "Project Planning & Management, Monolithic or Microservices, WordPress or Drupal",
    },
  ];

  return (
    <div className="about">
      <h1>Pricing</h1>
      <p>
        Let's be honest…any developer that can quote you a total price without
        understanding the scope of the project is probably not worth hiring.
        When you get a basic price, you get a basic product. At JAIK, every
        product we develop is created for you, the client, and custom tailored
        to your unique business needs. Once we have looked at where you’re at,
        and talk about where you need to be, we can provide you with an accurate
        timeline and final cost. We’re happy to give you are base price for
        development, but final cost is assessed on a case-by-case basis.
      </p>
      <div className="about-grid">
        {pricing.map((service, index) => (
          <div key={index} className="about-card">
            <h2>{service.title}</h2>
            <h3>{service.price}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
