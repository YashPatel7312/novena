// Hero.jsx
import React from "react";
import "../componets styles/HeroHome.css";  // styling file — tame CSS, SCSS ya Tailwind etc use kari sako cho

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content container">
          <div className="text-area">
            <h1>Your Most Trusted Health Partner</h1>
            <p>We provide compassionate care and modern medical solutions for your health needs.</p>
            <button className="btn hero-btn">Make Appointment</button>
          </div>
          <div className="image-area">
            <img
              src="/images/hero-image.jpg"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
