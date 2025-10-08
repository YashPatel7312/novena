import React from "react";
import "../componets styles/PageHero.css";

const PageHero = ({ title, subtitle }) => {
  return (
    <section className="page-hero">
      <div className="page-hero-overlay">
        <div className="container text-center">
          {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
          <h1 className="page-hero-title">{title}</h1>
        </div>
      </div>
    </section>
  );
};

export default PageHero;