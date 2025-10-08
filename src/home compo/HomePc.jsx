import React from "react";
import { Link } from "react-router-dom";  // ✅ Import Link for navigation
import "../home compo/HomePc.css"; // Ensure the path is correct
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const HomePc = () => {
  return (
    <section className="pc-section container">
      <div className="pc-images">
        <div className="pc-left">
          <img src={img1} alt="Dental Care" className="pc-img top-img" />
          <img src={img2} alt="Doctors" className="pc-img bottom-img" />
        </div>
        <div className="pc-right">
          <img src={img3} alt="Doctors Team" className="pc-img main-img" />
        </div>
      </div>

      <div className="pc-content">
        <h1>
          Personal care <br /> & healthy living
        </h1>
        <p>
          We provide best leading medical service. Nulla perferendis veniam
          deleniti ipsum officia dolores repellat laudantium obcaecati neque.
        </p>

        {/* ✅ Navigate to /services when button is clicked */}
        <Link to="/services" className="pc-btn">
          SERVICES <span>&#8250;</span>
        </Link>
      </div>
    </section>
  );
};

export default HomePc;
