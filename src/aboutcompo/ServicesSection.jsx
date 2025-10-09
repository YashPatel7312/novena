import React from "react";
import "./ServicesSection.css";

import ss1 from "../assets/ss1.jpg";
import ss2 from "../assets/ss2.jpg";
import ss3 from "../assets/ss3.jpg";
import ss4 from "../assets/ss4.jpg";

const ServicesSection = () => {
  const services = [
    {
      img: ss1,
      title: "Healthcare for Kids",
      desc: "Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium.",
    },
    {
      img: ss2,
      title: "Medical Counseling",
      desc: "Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium.",
    },
    {
      img: ss3,
      title: "Modern Equipments",
      desc: "Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium.",
    },
    {
      img: ss4
    ,
      title: "Qualified Doctors",
      desc: "Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium.",
    },
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        {services.map((item, index) => (
          <div className="service-card" key={index}>
            <div className="service-image">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="service-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
