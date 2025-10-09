import React from "react";
import "./AchievementsSection.css";

import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";

const AchievementsSection = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <section className="achievements-section">
      <div className="achievements-container">
        {/* Left Heading */}
        <div className="achievements-left">
          <h2>
            Our Doctors <br className="heading-break" />
            achievements
          </h2>
          <div className="underline"></div>
        </div>

        {/* Right Logos Grid */}
        <div className="achievements-right">
          {logos.map((logo, index) => (
            <div className="achievement-logo" key={index}>
              <img src={logo} alt={`Achievement ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
