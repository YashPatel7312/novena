import React from "react";
import "../componets styles/Footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* ===== ABOUT ===== */}
        <div className="footer-about">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p>
            Tempora dolorem voluptatum nam vero assumenda voluptate, facilis ad eos obcaecati
            tenetur veritatis eveniet distinctio possimus.
          </p>
          <div className="footer-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* ===== DEPARTMENT ===== */}
        <div className="footer-links">
          <h4>Department</h4>
          <ul>
            <li><a href="#">Surgery</a></li>
            <li><a href="#">Women's Health</a></li>
            <li><a href="#">Radiology</a></li>
            <li><a href="#">Cardioc</a></li>
            <li><a href="#">Medicine</a></li>
          </ul>
        </div>

        {/* ===== SUPPORT ===== */}
        <div className="footer-links">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Company Support</a></li>
            <li><a href="#">FAQ Questions</a></li>
            <li><a href="#">Company Licence</a></li>
          </ul>
        </div>

        {/* ===== CONTACT ===== */}
        <div className="footer-contact">
          <h4>Get In Touch</h4>
          <p>Support Available for 24/7</p>
          <p><strong>Support@email.com</strong></p>
          <p>Mon to Fri : 08:30 - 18:00</p>
          <p><strong>+23-456-6588</strong></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright © 2025, Designed & Developed by{" "}
          <span className="theme">Themefisher</span>
        </p>

        <div className="footer-subscribe">
          <input type="email" placeholder="Your Email address" />
          <button>SUBSCRIBE</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
