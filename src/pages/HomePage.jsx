import React from "react";
import HeroHome from "../home compo/HeroHome";
import InfoCards from "../home compo/InfoCards";
import HomePc from "../home compo/HomePc";
import CounterPc from "../home compo/CounterPc";
import PatientCareSection from "../home compo/PatientCareSection";
import AppointmentSection from "../home compo/AppointmentSection";

const HomePage = () => {
  return (
    <>
      <HeroHome />
      <InfoCards />
      <HomePc />
      <CounterPc />
      <PatientCareSection />
      <AppointmentSection />
    </>
  );
};

export default HomePage;
