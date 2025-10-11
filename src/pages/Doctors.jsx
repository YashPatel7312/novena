import React from "react";
import PageHero from "../components/PageHero";
import DoctorsPage from "../doctorcompo/DoctorsPage";
import AppointmentCTA from "../servicecompo/AppointmentCTA";

const Doctors = () => {
  return (
    <div className="page">
      <PageHero title="Specalized doctors" subtitle="All Doctors" />
      <DoctorsPage />
      <AppointmentCTA />
    </div>
  );
};

export default Doctors;
