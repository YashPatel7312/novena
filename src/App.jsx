// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Nav from "./components/TopNavbar";       // TopNavbar.jsx
import BottomNav from "./components/bottomnav"; // bottomnav.jsx
import Footer from "./components/Footer";       // Footer.jsx

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Services from "./pages/Services";
import Department from "./pages/Department";
import DepartmentSingle from "./pages/DepartmentSingle";
import Doctors from "./pages/Doctors";
import DoctorsSingle from "./pages/DoctorSingle"; // matches DoctorSingle.jsx
import AppointmentPage from "./pages/AppoinmentPage";
import BlogWithSidebar from "./pages/BlogWithSidebar";
import BlogSingle from "./pages/BlogSingle";
import ContactPage from "./pages/ContactPage";


function App() {
  return (
    <Router>
      {/* Top Navbar */}
      <Nav />

      {/* Optional Bottom Navigation */}
      <BottomNav />

      {/* Main Content */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/department" element={<Department />} />
          <Route path="/department-single" element={<DepartmentSingle />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctor-single" element={<DoctorsSingle />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/blog-with-sidebar" element={<BlogWithSidebar />} />
          <Route path="/blog-single" element={<BlogSingle />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
