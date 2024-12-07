import React from "react";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <div className="about">
      <h1>We're here to help!</h1>
      <h3>Contact Us</h3>
      <p>
        For general inquiries, you can email{" "}
        <a href="mailto:info@jaiksolutions.com">info@jaiksolutions.com</a> or{" "}
        <a href="mailto:support@jaiksolutions.com">support@jaiksolutions.com</a>
        . Our team is available Monday to Friday, 9 AM to 5 PM (PST).
      </p>
      <p>
        For escalated assistance, please reach out to{" "}
        <a href="mailto:bret@jaiksolutions.com">bret@jaiksolutions.com</a> or
        call Bret Dickey at +1-509-981-3126.{" "}
      </p>
      <h3>Helpful Links</h3>
      <p>
        <Link to="/pricing">Pricing</Link> - To learn more about our services
        and costs.
      </p>
      <p>
        <Link to="/about">About Us</Link> - To learn more about our company and
        team.
      </p>
      <p>
        <Link to="/privacy">Privacy Policy</Link> - To learn more about how we
        handle your data.
      </p>
    </div>
  );
};

export default Help;
