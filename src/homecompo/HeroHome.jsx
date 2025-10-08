import React from "react";
import { Link } from "react-router-dom";
import "../homecompo/HeroHome.css"; // Ensure the path is correct

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container hero-inner">
        <div className="row align-items-center w-100">
          {/* Left Text */}
          <div className="col-lg-6">
            <span className="text-uppercase small text-muted fw-semibold letter-space">
              Total Health Care Solution
            </span>
            <h1 className="display-5 fw-bold text-dark mt-3 mb-4">
              Your Most Trusted <br /> Health Partner
            </h1>
            <p>
              A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium
              quisquam aperiam maiores sunt fugit, deserunt rem suscipit placeat.
            </p>
            <Link
              to="/appointment"
              className="btn btn-danger btn-lg rounded-pill px-4 py-2"
            >
              MAKE APPOINTMENT <span className="ms-2">&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
