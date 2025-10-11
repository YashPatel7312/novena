import React from "react";
import "./DoctorIntro.css";
import { FaFacebookF, FaTwitter, FaSkype, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { useNavigate } from "react-router-dom";   // 👈 Added for navigation
import f2 from "../assets/f2.jpg";

const DoctorIntro = () => {
  const navigate = useNavigate();   // 👈 initialize navigate

  const handleAppointmentClick = () => {
    navigate("/appointment");       // 👈 navigate to appointment page
  };

  return (
    <section className="doctor-intro-section">
      <div className="doctor-intro-container">
        {/* Left: Doctor Image & Info */}
        <div className="doctor-left">
          <div className="doctor-image">
            <img src={f2} alt="Doctor" />
          </div>
          <div className="doctor-info">
            <h3>Alexandar james</h3>
            <p className="doctor-specialty">Orthopedic Surgery</p>
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaSkype /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaPinterestP /></a>
            </div>
          </div>
        </div>

        {/* Right: Intro Text */}
        <div className="doctor-right">
          <h2 className="section-title">
            Introducing to myself
            <span className="title-underline"></span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam tempore 
            cumque voluptate beatae quis inventore sapiente nemo, a eligendi nostrum 
            expedita veritatis neque incidunt ipsa doloribus provident ex, at ullam. 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, 
            perferendis officiis esse quae, nobis eius explicabo quidem? Officia 
            accusamus repudiandae ea esse non reiciendis accusantium voluptates, 
            facilis enim, corrupti eligendi?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo recusandae 
            veritatis minus optio quod obcaecati laborum temporibus, deleniti vero perferendis 
            molestias, ducimus facilis, sunt minima. Tempora, amet quasi asperiores voluptas?
          </p>
          <button className="appointment-btn" onClick={handleAppointmentClick}>
            MAKE AN APPOINTMENT
          </button>
        </div>
      </div>
    </section>
  );
};

export default DoctorIntro;
