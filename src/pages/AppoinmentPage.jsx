import React from "react";
import PageHero from "../components/PageHero";
import Form from "../appointmentcompo/Form";

const AppointmentPage = () => {
  return (
    <>
      <PageHero title="Appoinment" subtitle="Book your Seat" />
      <Form />
    </>
  );
};

export default AppointmentPage;
