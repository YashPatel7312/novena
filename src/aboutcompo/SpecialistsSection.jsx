import React from "react";
import "./SpecialistsSection.css";

// Sample images — replace with your actual images
import doc1 from "../assets/f5.jpg";
import doc2 from "../assets/f6.jpg";
import doc3 from "../assets/f3.jpg";
import doc4 from "../assets/f1.jpg";

const specialists = [
  {
    name: "John Marshal",
    title: "Internist, Emergency Physician",
    image: doc1,
  },
  {
    name: "Marshall Root",
    title: "Surgeon, Cardiologist",
    image: doc2,
  },
  {
    name: "Siamon John",
    title: "Internist, General Practitioner",
    image: doc3,
  },
  {
    name: "Rishat Ahmed",
    title: "Orthopedic Surgeon",
    image: doc4,
  },
];

const SpecialistsSection = () => {
  return (
    <section className="specialists-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Meet Our Specialist</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Today’s users expect effortless experiences. Don’t let essential
            people and processes stay stuck in the past. Speed it up, skip the
            hassles
          </p>
        </div>

        <div className="specialists-grid">
          {specialists.map((item, index) => (
            <div className="specialist-card" key={index}>
              <div className="specialist-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="specialist-info">
                <h5>{item.name}</h5>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialistsSection;
