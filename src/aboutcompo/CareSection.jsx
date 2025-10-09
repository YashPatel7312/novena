import React from "react";
import "../aboutcompo/CareSection.css";
import sign from "../assets/sign.png";

const CareSection = () => {
  return (
    <section className="care-section">
      <div className="care-container">
        <div className="care-left">
          <h1>
            Personal care <br className="heading-break" />
            for your healthy <br className="heading-break" />
            living
          </h1>
        </div>

        <div className="care-right">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt,
            quod laborum alias. Vitae dolorum, officia sit! Saepe ullam facere
            at, consequatur incidunt, quae esse, quis ut reprehenderit
            dignissimos, libero delectus.
          </p>
          <img src={sign} alt="Signature" className="signature" />
        </div>
      </div>
    </section>
  );
};

export default CareSection;
