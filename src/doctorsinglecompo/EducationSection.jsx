import React from "react";
import "./EducationSection.css";

const qualifications = [
  {
    year: "2005-2007",
    title: "MBBS, M.D at University of Wyoming",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi doloremque harum, mollitia, soluta maxime porro veritatis fuga autem impedit corrupti aperiam sint, architecto, error nesciunt temporibus! Vel quod, dolor aliquam!"
  },
  {
    year: "2009-2010",
    title: "MBBS, M.D at University of Japan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi doloremque harum, mollitia, soluta maxime porro veritatis fuga autem impedit corrupti aperiam sint, architecto, error nesciunt temporibus! Vel quod, dolor aliquam!"
  },
  {
    year: "2007-2009",
    title: "M.D. of Netherland Medical College",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi doloremque harum, mollitia, soluta maxime porro veritatis fuga autem impedit corrupti aperiam sint, architecto, error nesciunt temporibus! Vel quod, dolor aliquam!"
  },
  {
    year: "2010-2011",
    title: "M.D. of Canada Medical College",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi doloremque harum, mollitia, soluta maxime porro veritatis fuga autem impedit corrupti aperiam sint, architecto, error nesciunt temporibus! Vel quod, dolor aliquam!"
  }
];

const EducationSection = () => {
  return (
    <section className="education-section">
      <div className="education-container">
        <h2 className="education-title">My Educational Qualifications</h2>
        <span className="title-underline"></span>

        <div className="education-grid">
          {qualifications.map((item, index) => (
            <div className="education-item" key={index}>
              <p className="education-year">Year({item.year})</p>
              <h3 className="education-heading">{item.title}</h3>
              <p className="education-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
