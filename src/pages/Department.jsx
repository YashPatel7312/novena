import React from "react";
import PageHero from "../components/PageHero";
import DepartmentsGrid from "../departmentcompo/DepartmentsGrid";

const DepartmentSingle = () => {
  return (
    <div className="page">
      <PageHero title="Care Department" subtitle="All Department" />
      <DepartmentsGrid />
    </div>
  );
};

export default DepartmentSingle;
