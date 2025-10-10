import React from "react";
import PageHero from "../components/PageHero";
import CareSection from "../aboutcompo/CareSection";
import ServicesSection from "../aboutcompo/ServicesSection";
import AchievementsSection from "../aboutcompo/AchievementsSection";
import SpecialistsSection from "../aboutcompo/SpecialistsSection";
import TestimonialSection from "../aboutcompo/TestimonialSection";

const AboutPage = () => {
  return (
    <div className="page">
      <PageHero title="About Us" subtitle="About Us" />
      <CareSection />
      <ServicesSection />
      <AchievementsSection />
      <SpecialistsSection />
      <TestimonialSection />
    </div>
  );
};

export default AboutPage;
