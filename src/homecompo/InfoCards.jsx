import React from "react";
import { Link } from "react-router-dom";
import "./InfoCards.css";
import 'bootstrap-icons/font/bootstrap-icons.css';


const InfoCards = () => {
  return (
    <section className="info-section">
      <div className="container">
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-lg-4 col-md-6">
            <div className="info-card">
              <div className="info-icon">
                <i className="bi bi-briefcase-medical"></i>
              </div>
              <h6 className="text-muted mb-1">24 Hours Service</h6>
              <h4 className="fw-bold mb-3">Online Appointment</h4>
              <p className="mb-4">
                Get ALL time support for emergency. We have introduced the principle of family medicine.
              </p>
              <Link to="/appointment" className="btn btn-primary rounded-pill px-4 py-2">
                MAKE A APPOINTMENT
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-4 col-md-6">
            <div className="info-card">
              <div className="info-icon">
                <i className="bi bi-clock"></i>
              </div>
              <h6 className="text-muted mb-1">Timing schedule</h6>
              <h4 className="fw-bold mb-3">Working Hours</h4>
              <ul className="working-hours list-unstyled mb-0">
                <li><span>Sun - Wed :</span> <span>8:00 - 17:00</span></li>
                <li><span>Thu - Fri :</span> <span>9:00 - 17:00</span></li>
                <li><span>Sat - Sun :</span> <span>10:00 - 17:00</span></li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-4 col-md-12">
            <div className="info-card">
              <div className="info-icon">
                <i className="bi bi-headset"></i>
              </div>
              <h6 className="text-muted mb-1">Emergency Cases</h6>
              <h4 className="fw-bold mb-3">1-800-700-6200</h4>
              <p className="mb-0">
                Get ALL time support for emergency. We have introduced the principle of family medicine. Get connected with us for any urgency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
