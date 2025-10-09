import React from "react";
import PageHero from "../components/PageHero";
import CareSection from "../aboutcompo/CareSection";
import ServicesSection from "../aboutcompo/ServicesSection";
import AchievementsSection from "../aboutcompo/AchievementsSection";

const AboutPage = () => {
  return (
    <div className="page">
      <PageHero title="About Us" subtitle="About Us" />
      <CareSection />
      <ServicesSection />
      <AchievementsSection />
    </div>
  );
};

export default AboutPage;
