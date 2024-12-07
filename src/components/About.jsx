import React from "react";

const About = () => {
  const about = [
    {
      title: "Cloud Computing",
      description:
        "We specialize in all technologies hosted in the Cloud. This also includes SAAS applications hosted in the Cloud. Just to do some name dropping… AWS, Microsoft Azure, Google Cloud, NetSuite (ERP).",
    },
    {
      title: "iOS Development",
      description:
        "We specialize in native iOS development using Objective-C or Swift. We also have the ability to create iOS applications using JavaScript frameworks like React Native.",
    },
    {
      title: "Android Development",
      description:
        "We specialize in native Android development using Java or Kotlin. No worries if you don’t want a native application. We also have the ability to create Android applications using JavaScript frameworks.",
    },
    {
      title: "Web Development",
      description:
        "We specialize in developing static or dynamic web applications using any web framework. Let’s do some more name dropping… Node.js, ASP.NET MVC, Ruby on Rails, PHP/Laravel, WordPress, Drupal.",
    },
  ];

  return (
    <div className="about">
      <h1>Services</h1>
      <p>
        At JAIK Solutions, we are passionate about revolutionizing the way
        people and businesses convey value through efficient technology. Founded
        in 2015, our mission is to empower individuals and businesses by
        providing creative applications that deliver positive outcomes. With a
        team of experienced developers and designers, we specializes in Cloud
        Computing, iOS Development, Android Development, and Web Development. We
        are located in several areas across the globe including Spokane and
        Seattle, WA, State College, PA, Russellville, AR, Denver, CO and Prague,
        Czech Republic.
      </p>
      <div className="about-grid">
        {about.map((service, index) => (
          <div key={index} className="about-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
