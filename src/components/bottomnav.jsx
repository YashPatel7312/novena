import React from "react";
import { NavLink, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Logo from "../assets/logo.png";
import "../componets styles/bottomnav.css";

const BottomNav = () => {
  // Close mobile menu when link clicked
  const handleNavLinkClick = () => {
    const navbarCollapse = document.getElementById("mainNavbar");
    if (navbarCollapse.classList.contains("show")) {
      const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, { toggle: true });
      bsCollapse.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src={Logo} width="212" height="60" alt="Logo" />
        </Link>

        {/* Toggle Button (Mobile) */}
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
              <NavLink className="nav-link" to="/" onClick={handleNavLinkClick}>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about" onClick={handleNavLinkClick}>
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/services" onClick={handleNavLinkClick}>
                Services
              </NavLink>
            </li>

            {/* Department Dropdown */}
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">
                Department
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/department" onClick={handleNavLinkClick}>
                    Department
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/department-single" onClick={handleNavLinkClick}>
                    Department Single
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* Doctors Dropdown */}
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">
                Doctors
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/doctors" onClick={handleNavLinkClick}>
                    Doctors
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/doctor-single" onClick={handleNavLinkClick}>
                    Doctors Single
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/appointment" onClick={handleNavLinkClick}>
                    Appointment
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* Blog Dropdown */}
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">
                Blog
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/blog-with-sidebar" onClick={handleNavLinkClick}>
                    Blog With Sidebar
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/blog-single" onClick={handleNavLinkClick}>
                    Blog Single
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* Contact */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" onClick={handleNavLinkClick}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
