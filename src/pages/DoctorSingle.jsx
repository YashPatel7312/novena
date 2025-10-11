import React from "react";
import "../page style/DoctorsSingle.css";
import PageHero from "../components/PageHero";
import DoctorIntro from "../doctorsinglecompo/DoctorIntro";
import EducationSection from "../doctorsinglecompo/EducationSection";
import SkillsSection from "../doctorsinglecompo/SkillsSection"

const DoctorsSingle = () => {
  return (
    <div className="page">
      <PageHero title="Alexandar james" subtitle="Doctor Details" />
      <DoctorIntro />
      <EducationSection />
      <SkillsSection />
    </div>
  );
};

export default DoctorsSingle;
