import React from "react";
import { useNavigate } from "react-router-dom";
import "./AppointmentCTA.css";

const AppointmentCTA = () => {
  const navigate = useNavigate();

  const handleAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <section className="appointment-cta-section">
      <div className="appointment-cta-container">
        {/* Left Content */}
        <div className="appointment-cta-left-container">
          <div className="cta-line"></div>
          <h2>
            We are pleased to offer <br />
            you the <span>chance to have the <br />healthy</span>
          </h2>
          <button className="cta-button" onClick={handleAppointmentClick}>
            GET APPOINTMENT
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppointmentCTA;
