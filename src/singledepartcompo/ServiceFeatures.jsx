import React from "react";
import "./ServiceFeatures.css";

const ServiceFeatures = () => {
  return (
    <section className="service-features-section container my-5">
      <div className="row">
        <div className="col-12 col-md-8 col-lg-6">
          <h3 className="service-title">Services features</h3>
          <div className="title-underline"></div>

          <ul className="service-list">
            <li>International Drug Database</li>
            <li>Stretchers and Stretcher Accessories</li>
            <li>Cushions and Mattresses</li>
            <li>Cholesterol and lipid tests</li>
            <li>Critical Care Medicine Specialists</li>
            <li>Emergency Assistance</li>
          </ul>

          <button className="appointment-btn">MAKE AN APPOINTMENT</button>
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
