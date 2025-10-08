import React from "react";
import "../page style/DoctorsSingle.css";
import PageHero from "../components/PageHero";

const DoctorsSingle = () => {
  return (
    <div className="page">
      <PageHero title="Alexandar james" subtitle="Doctor Details" />
      <h1>Doctor Single Page</h1>
      <p>Details of a single doctor.</p>
    </div>
  );
};

export default DoctorsSingle;
