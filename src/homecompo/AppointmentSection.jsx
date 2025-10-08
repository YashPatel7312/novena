import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../homecompo/AppointmentSection.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import formimg from '../assets/formimg.jpg';

const AppointmentSection = () => {
  const [formData, setFormData] = useState({
    department: "",
    doctor: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="appointment-section">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Image */}
          <div className="col-lg-6">
            <div className="appointment-image position-relative">
              <img
                src={formimg}
                alt="Doctors"
                className="img-fluid"
              />
              <div className="appointment-phone d-flex align-items-center">
                <i className="bi bi-telephone-outbound me-2"></i>
                <span className="fw-bold fs-5">+23 345 67980</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="col-lg-6">
            <h2 className="form-title">Book appointment</h2>
            <p className="form-subtitle">
              Mollitia dicta commodi est recusandae iste, natus eum asperiores corrupti qui velit.
              Iste dolorum atque similique praesentium soluta.
            </p>

            <form className="appointment-form">
              <div className="row g-3">
                <div className="col-md-6">
                  <select
                    className="form-select"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                  >
                    <option value="">Choose Department</option>
                    <option value="Dental">Dental</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Neurology">Neurology</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <select
                    className="form-select"
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                  >
                    <option value="">Select Doctors</option>
                    <option value="Dr. Smith">Dr. Smith</option>
                    <option value="Dr. Patel">Dr. Patel</option>
                    <option value="Dr. Allen">Dr. Allen</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <input
                    type="date"
                    name="date"
                    className="form-control"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="time"
                    name="time"
                    className="form-control"
                    value={formData.time}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="Phone Number"
                    pattern="[0-9]*"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-12">
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="Your Message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="col-12 text-start mt-2">
                  <Link to="/appointment" className="appointment-btn">
                    MAKE APPOINTMENT <i className="bi bi-chevron-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
