import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DoctorsPage.css";
import f2 from "../assets/f2.jpg";
import f6 from "../assets/f6.jpg";
import f3 from "../assets/f3.jpg";
import f1 from "../assets/f1.jpg";

// ✅ Doctor Data (ID 1–11)
const doctorsData = [
  { id: 1, name: "Thomas Henry", specialty: "Cardiology", image: f2 },
  { id: 2, name: "Harrison Samuel", specialty: "Radiology", image: f6 },
  { id: 3, name: "Alexandar James", specialty: "Dental", image: f3 },
  { id: 4, name: "Edward John", specialty: "Pediatrics", image: f1 },
  { id: 5, name: "Thomas Henry", specialty: "Neurology", image: f2 },
  { id: 6, name: "Henry Samuel", specialty: "Pulmonology", image: f3 },
  { id: 7, name: "Thomas Alexandar", specialty: "Medicine", image: f2 },
  { id: 8, name: "Harisston Thomas", specialty: "Traumatology", image: f3 },
  { id: 9, name: "Jonas Thomson", specialty: "Cardiology", image: f1 },
  { id: 10, name: "Henry Forth", specialty: "Hematology", image: f3 },
  { id: 11, name: "Thomas Henry", specialty: "Dental", image: f1 },
];

// ✅ Category → ID Mapping
const categoryMap = {
  "All Department": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  Cardiology: [1, 8, 10],
  Dental: [1, 2, 9, 11],
  Neurology: [3, 4],
  Medicine: [4, 7],
  Pediatric: [5, 8, 10],
  Traumatology: [6, 8, 10],
};

// ✅ List of Categories for Filter Menu
const categories = [
  "All Department",
  "Cardiology",
  "Dental",
  "Neurology",
  "Medicine",
  "Pediatric",
  "Traumatology",
];

const DoctorsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All Department");

  // ✅ Filter doctors based on selected category IDs
  const filteredDoctors = doctorsData.filter((doc) =>
    categoryMap[activeCategory].includes(doc.id)
  );

  return (
    <section className="doctors-section container my-5">
      {/* Section Header */}
      <div className="text-center mb-4">
        <h2 className="section-title">Doctors</h2>
        <div className="title-underline mx-auto"></div>
        <p className="subtitle">
          We provide a wide range of creative services adipisicing elit.
           Autem maxime rem modi eaque, voluptate. Beatae officiis neque
        </p>
      </div>

      {/* Filter Menu */}
      <div className="filter-menu text-center mb-5">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Doctor Cards Grid */}
      <div className="row">
        {filteredDoctors.map((doctor) => (
          <div key={doctor.id} className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="doctor-card">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="img-fluid doctor-image"
              />
              <div className="doctor-info">
                <Link to={"/doctor-single"} className="doctor-name-link">
                  {doctor.name}
                </Link>
                <p className="doctor-specialty">{doctor.specialty}</p>
              </div>
            </div>
          </div>
        ))}

        {filteredDoctors.length === 0 && (
          <div className="col-12 text-center">
            <p>No doctors available for this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default DoctorsPage;
