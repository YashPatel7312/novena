import React from "react";
import "../singledepartcompo/ImageSection.css";
import DepartmentImg from "../assets/hospital.jpg";

const DepartmentImage = () => {
  return (
    <section className="department-image-section container my-5">
      <div className="row justify-content-center">
          <img
            src={DepartmentImg}
            alt="Department"
            className="img-fluid department-image"
          />
      </div>
    </section>
  );
};

export default DepartmentImage;
