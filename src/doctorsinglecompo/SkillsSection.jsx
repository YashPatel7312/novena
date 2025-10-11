import React from "react";
import "./SkillsSection.css";
import { FaCheck } from "react-icons/fa";

const expertiseList = [
  "International Drug Database",
  "Stretchers and Stretcher Accessories",
  "Cushions and Mattresses",
  "Cholesterol and lipid tests",
  "Critical Care Medicine Specialists",
  "Emergency Assistance",
];

const SkillsSection = () => {
  return (
    <section className="skills-section">
      <div className="skills-container">
        {/* Column 1: My skills */}
        <div className="skills-column">
          <h2 className="skills-title">My skills</h2>
          <span className="title-underline"></span>
          <p className="skills-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In architecto
            voluptatem alias, aspernatur voluptatibus corporis quisquam? Consequuntur, ad,
            doloribus, doloremque voluptatem at consectetur natus eum ipsam dolorum iste
            laudantium tenetur.
          </p>
        </div>

        {/* Column 2: Expertise Area */}
        <div className="expertise-column">
          <h3 className="expertise-title">Expertise area</h3>
          <ul className="expertise-list">
            {expertiseList.map((item, index) => (
              <li key={index}>
                <FaCheck className="check-icon" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Appointment Box */}
        <div className="appointment-box">
          <h3 className="appointment-title">Make Appointment</h3>
          <span className="title-underline"></span>
          <div className="appointment-time">
            <p>
              <span>Monday - Friday</span>
              <span>9:00 - 17:00</span>
            </p>
            <p>
              <span>Saturday</span>
              <span>9:00 - 16:00</span>
            </p>
            <p>
              <span>Sunday</span>
              <span>Closed</span>
            </p>
          </div>
          <div className="urgent-help">
            <p>Need Urgent Help?</p>
            <a href="tel:+23456565768" className="urgent-number">
              +23-4565-65768
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
