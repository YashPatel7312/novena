import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Logo from "../assets/logo.png";
import "../componets styles/bottomnav.css";

const BottomNav = () => {
  // Close navbar on mobile when a link is clicked
  const handleNavLinkClick = () => {
    const navbarCollapse = document.getElementById("mainNavbar");
    if (navbarCollapse.classList.contains("show")) {
      const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, { toggle: true });
      bsCollapse.hide();
    }
  };

  // Optional: hover for submenus on desktop
  useEffect(() => {
    const dropdowns = document.querySelectorAll(".dropdown-submenu");
    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("mouseenter", () => {
        const submenu = dropdown.querySelector(".dropdown-menu");
        submenu.classList.add("show");
      });
      dropdown.addEventListener("mouseleave", () => {
        const submenu = dropdown.querySelector(".dropdown-menu");
        submenu.classList.remove("show");
      });
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg" >
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src={Logo} width="212" height="60" alt="Logo" />
        </Link>

        {/* Toggle Button */}
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

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleNavLinkClick}>Home</Link >
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={handleNavLinkClick}>About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/services" onClick={handleNavLinkClick}>Services</Link>
            </li>

            {/* Department Dropdown */}
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">
                Department
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/department" onClick={handleNavLinkClick}>Department</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/department-single" onClick={handleNavLinkClick}>Department Single</Link>
                </li>
              </ul>
            </li>

            {/* Doctors Dropdown */}
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">
                Doctors
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/doctors" onClick={handleNavLinkClick}>Doctors</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/doctor-single" onClick={handleNavLinkClick}>Doctors Single</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/appointment" onClick={handleNavLinkClick}>Appointment</Link>
                </li>
              </ul>
            </li>

            {/* Blog Dropdown */}
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">
                Blog
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/blog-with-sidebar" onClick={handleNavLinkClick}>Blog With Sidebar</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/blog-single" onClick={handleNavLinkClick}>Blog Single</Link>
                </li>
              </ul>
            </li>

            {/* Contact */}
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={handleNavLinkClick}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
