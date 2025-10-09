import React from "react";
import "./PartnersSection.css";

// 👉 તમે તમારા logo images અહીં import કરો અથવા URL આપો
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";

const partners = [logo1, logo2, logo3, logo4, logo5, logo6];

const PartnersSection = () => {
  return (
    <section className="partners-section py-5">
      <div className="container text-center">
        <h2 className="section-title fw-bold mb-2">Partners who support us</h2>
        <div className="title-underline mx-auto mb-3"></div>
        <p className="section-subtitle text-muted mb-5">
          Lets know moreel necessitatibus dolor asperiores illum possimus sint
          voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.
        </p>

        <div className="row justify-content-center g-4">
          {partners.map((logo, index) => (
            <div className="col-6 col-md-4 col-lg-2 d-flex justify-content-center" key={index}>
              <div className="partner-logo">
                <img src={logo} alt={`Partner ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
