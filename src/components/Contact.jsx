import React, { useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";

const Contact = () => {
  useEffect(() => {
    // Dynamically load Bootstrap CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
    document.head.appendChild(link);

    // Cleanup function to remove Bootstrap styles when the component unmounts
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Phone</Accordion.Header>
          <Accordion.Body>+1-888-777-3664</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Email</Accordion.Header>
          <Accordion.Body>
            <a href="mailto:info@jaiksolutions.com">info@jaiksolutions.com</a>
          </Accordion.Body>
          <Accordion.Body>
            <a href="mailto:support@jaiksolutions.com">
              support@jaiksolutions.com
            </a>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Contact;
