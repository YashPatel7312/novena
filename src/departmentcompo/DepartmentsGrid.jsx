import React from "react";
import { useNavigate } from "react-router-dom";
import "./DepartmentsGrid.css";
import ss1 from "../assets/ss1.jpg";
import ss2 from "../assets/ss2.jpg";
import ss3 from "../assets/ss3.jpg";
import ss4 from "../assets/ss4.jpg";
import ss5 from "../assets/ss5.jpg";
import ss6 from "../assets/ss6.jpg";


const departments = [
  {
    title: "Ophthalmology",
    description: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
    image: ss1
  },
  {
    title: "Cardiology",
    description: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
    image: ss2
  },
  {
    title: "Dental Care",
    description: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
    image: ss3
  },
  {
    title: "Joint Replacement",
    description: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
    image: ss4
  },
  {
    title: "Examination & Diagnosis",
    description: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
    image: ss5
  },
  {
    title: "Alzheimer's Disease",
    description: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
    image: ss6
  },
];

const DepartmentsGrid = () => {
  const navigate = useNavigate();

  const handleLearnMore = (departmentTitle) => {
    // Navigate to department single page — you can pass the title as a param if needed
    navigate("/department-single", { state: { department: departmentTitle } });
  };

  return (
    <section className="departments-section">
      <div className="departments-container">
        {departments.map((dept, index) => (
          <div className="department-card" key={index}>
            <div className="department-image">
              <img src={dept.image} alt={dept.title} />
            </div>
            <div className="department-content">
              <h3>{dept.title}</h3>
              <p>{dept.description}</p>
              <button
                className="learn-more-btn"
                onClick={() => handleLearnMore(dept.title)}
              >
                Learn More <span>›</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DepartmentsGrid;
