import React from "react";
import PageHero from "../components/PageHero";
import ServicesGrid from "../servicecompo/ServicesGrid";
import AppointmentCTA from "../servicecompo/AppointmentCTA";

const Services = () => {
  return (
    <div className="page">
      <PageHero title="What We Do" subtitle="Our services" />
      <ServicesGrid />
      <AppointmentCTA />
    </div>
  );
};

export default Services;
