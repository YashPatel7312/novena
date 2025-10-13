import React from "react";
import { NavLink, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Logo from "../assets/logo.png";
import "../componets styles/bottomnav.css";

const BottomNav = () => {
  return (
    <div className="container">
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        {/* ✅ Logo Left Side */}
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Logo" className="nav-logo" />
        </Link>

        {/* ✅ Toggle Button - Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* ✅ Links Right Side */}
        <div className="collapse navbar-collapse justify-content-end" id="mainNavbar">
          <ul className="navbar-nav align-items-center flex-row flex-wrap">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services">Services</NavLink>
            </li>

            {/* Department */}
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                data-bs-toggle="dropdown"
              >
                Department
              </NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/department">Department</NavLink></li>
                <li><NavLink className="dropdown-item" to="/department-single">Department Single</NavLink></li>
              </ul>
            </li>

            {/* Doctors */}
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                data-bs-toggle="dropdown"
              >
                Doctors
              </NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/doctors">Doctors</NavLink></li>
                <li><NavLink className="dropdown-item" to="/doctor-single">Doctors Single</NavLink></li>
                <li><NavLink className="dropdown-item" to="/appointment">Appointment</NavLink></li>
              </ul>
            </li>

            {/* Blog */}
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                data-bs-toggle="dropdown"
              >
                Blog
              </NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/blog-with-sidebar">Blog With Sidebar</NavLink></li>
                <li><NavLink className="dropdown-item" to="/blog-single">Blog Single</NavLink></li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default BottomNav;
