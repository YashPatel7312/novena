import React from "react";
import "./ServicesGrid.css";
import ss1 from "../assets/ss1.jpg";
import ss2 from "../assets/ss2.jpg";
import ss3 from "../assets/ss3.jpg";
import ss4 from "../assets/ss4.jpg";
import ss5 from "../assets/ss5.jpg";
import ss6 from "../assets/ss6.jpg";

const services = [
  {
    title: "Child care",
    description: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
    image: ss1
  },
  {
    title: "Personal Care",
    description: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
    image: ss2
  },
  {
    title: "CT scan",
    description: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
    image: ss3
  },
  {
    title: "Joint replacement",
    description: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
    image: ss4
  },
  {
    title: "Examination & Diagnosis",
    description: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
    image: ss5
  },
  {
    title: "Alzheimer's disease",
    description: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
    image: ss6
  },
];

const ServicesGrid = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
