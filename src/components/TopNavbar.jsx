import React from "react";
import { Container } from "react-bootstrap";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import "../componets styles/TopNavbar.css";

const TopNavbar = () => {
  return (
    <div className="top-navbar">
      <Container fluid="lg">
        <div className="top-content">
          {/* Left Side */}
          <div className="left-info">
            <div className="info-item">
              <FaEnvelope className="icon" />
              <span>support@novena.com</span>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <span>Address Ta-134/A, New York, USA</span>
            </div>
          </div>

          {/* Right Side */}
          <div className="right-info">
            <span className="call-text">Call Now:</span>
            <span className="call-number">823-4565-13456</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopNavbar;
