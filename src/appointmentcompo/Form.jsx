import React, { useState } from "react";
import "./Form.css";
import { FaHeadphones } from "react-icons/fa"; // Emergency icon

const Form = () => {
  const [formData, setFormData] = useState({
    department: "",
    doctor: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally send to backend here
    setIsSubmitted(true);
  };

  return (
    <section className="appointment-section">
      <div className="appointment-container">
        {isSubmitted ? (
          // ✅ THANK YOU SCREEN
          <div className="thankyou-container">
            <div className="thankyou-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#e12454"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h2>Thank you for your appointment</h2>
            <p>We will contact with you soon.</p>
          </div>
        ) : (
          <>
            {/* LEFT: Emergency Info */}
            <div className="appointment-left">
              <FaHeadphones className="emergency-icon" />
              <h3>Call for an Emergency Service!</h3>
              <p className="emergency-number">+84 789 1256</p>
            </div>

            {/* RIGHT: Booking Form */}
            <div className="appointment-right">
              <h2 className="form-title">Book an appointment</h2>
              <p className="form-desc">
                Mollitia dicta commodi est recusandae iste, natus eum asperiores corrupti
                qui velit. Iste dolorum atque similique praesentium soluta.
              </p>

              <form className="appointment-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose Department</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Orthopedic">Orthopedic</option>
                    <option value="Neurology">Neurology</option>
                  </select>

                  <select
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Doctors</option>
                    <option value="Dr. John">Dr. John</option>
                    <option value="Dr. Smith">Dr. Smith</option>
                    <option value="Dr. Emily">Dr. Emily</option>
                  </select>
                </div>

                <div className="form-row">
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>

                <button type="submit" className="appointment-btn">
                  MAKE APPOINTMENT
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Form;
