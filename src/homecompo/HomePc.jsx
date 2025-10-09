import React from "react";
import { useNavigate } from "react-router-dom";
import "../homecompo/HomePc.css";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const PcSection = () => {
  const navigate = useNavigate();

  const handleServiceClick = () => {
    navigate("/services"); // ✅ Navigate to services page
  };

  return (
    <div className="container">
      <section className="pc-section">
        <div className="pc-container">
          {/* Left - Image Grid */}
          <div className="pc-images">
            <div className="pc-left">
              <img src={img1} alt="Top" className="pc-img top-img" />
              <img src={img2} alt="Bottom" className="pc-img bottom-img" />
            </div>
            <div className="pc-right">
              <img src={img3} alt="Main" className="pc-img main-img" />
            </div>
          </div>

          {/* Right - Text */}
          <div className="pc-content">
            <h1>Personal care & healthy living</h1>
            <p>
              We provide best leading medical service. Nulla perferendis veniam
              deleniti ipsum officia dolores repellat laudantium obcaecati neque.
            </p>
            <button className="pc-btn" onClick={handleServiceClick}>
              SERVICES
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PcSection;
