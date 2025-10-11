import React from "react";
import HeroHome from "../homecompo/HeroHome";
import InfoCards from "../homecompo/InfoCards";
import HomePc from "../homecompo/HomePc";
import CounterPc from "../homecompo/CounterPc";
import PatientCareSection from "../homecompo/PatientCareSection";
import AppointmentSection from "../homecompo/AppointmentSection";
import TestimonialsSection from "../homecompo/TestimonialsSection";
import PartnersSection from "../homecompo/PartnersSection";

const HomePage = () => {
  return (
    <>
      <HeroHome />
      <InfoCards />
      <HomePc />
      <CounterPc />
      <PatientCareSection />
      <AppointmentSection />
      <TestimonialsSection />
      <PartnersSection />
    </>
  );
};

export default HomePage;
