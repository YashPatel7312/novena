import React from "react";
import "./ContactInfo.css";
import { FaHeadset, FaRegEnvelope } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

const ContactInfo = () => {
  return (
    <section className="contact-info-section">
      <div className="contact-info-container">
        {/* ===== Call Us ===== */}
        <div className="info-card">
          <FaHeadset className="info-icon" />
          <h4>Call Us</h4>
          <p>+823-4565-13456</p>
        </div>

        {/* ===== Email Us ===== */}
        <div className="info-card">
          <FaRegEnvelope className="info-icon" />
          <h4>Email Us</h4>
          <p>contact@mail.com</p>
        </div>

        {/* ===== Location ===== */}
        <div className="info-card">
          <GoLocation className="info-icon" />
          <h4>Location</h4>
          <p>North Main Street, Brooklyn Australia</p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
