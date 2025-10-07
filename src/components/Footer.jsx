import React from "react";
import "../componets styles/Footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaRegClock } from "react-icons/fa6";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container my-5">
        {/* Column 1 - Logo + Description */}
        <div className="footer-about">
          <div className="footer-logo">
            <img src={Logo} alt="Novena" />
          </div>
          <p>
            Tempora dolorem voluptatum nam vero assumenda voluptate, facilis ad
            eos obcaecati tenetur veritatis eveniet distinctio possimus.
          </p>

          <div className="footer-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Column 2 - Department */}
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

        {/* Column 3 - Support */}
        <div className="footer-links">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Company Support</a></li>
            <li><a href="#">FAQestions</a></li>
            <li><a href="#">Company Licence</a></li>
          </ul>
        </div>

        {/* Column 4 - Get In Touch */}
        <div className="footer-contact">
          <h4>Get In Touch</h4>
          <p><HiOutlineMail /> Support Available for 24/7</p>
          <h5>Support@email.com</h5>
          <p><FaRegClock /> Mon to Fri : 08:30 - 18:00</p>
          <h5>+23-456-6588</h5>
        </div>
      </div>

      {/* Bottom section */}
      <div className="footer-bottom">
        <p>
          Copyright © 2025, Designed & Developed by{" "}
          <strong>YashPatel</strong>
        </p>

        <div className="footer-subscribe">
          <input type="email" placeholder="Your Email address" />
          <button>Subscribe</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
