import React from "react";
import PageHero from "../components/PageHero";
import ImageSection from "../singledepartcompo/ImageSection";
import DepartmentDetails from "../singledepartcompo/DepartmentDetails";
import ServiceFeatures from "../singledepartcompo/ServiceFeatures";

const DepartmentSingle = () => {
  return (
    <div className="page">
      <PageHero title="Single Department" subtitle="Department Details" />
      <ImageSection />
      <DepartmentDetails />
      <ServiceFeatures />
    </div>
  );
};

export default DepartmentSingle;
