// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Components
import Nav from "./components/TopNavbar";
import BottomNav from "./components/bottomnav";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

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
import DoctorsSingle from "./pages/DoctorSingle";
import AppointmentPage from "./pages/AppoinmentPage";
import BlogWithSidebar from "./pages/BlogWithSidebar";
import BlogSingle from "./pages/BlogSingle";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      {/* ✅ Scroll to top whenever the route changes */}
      <ScrollToTop />

      {/* Top Navbar */}
      <Nav />

      {/* Bottom Navbar */}
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

        {/* ✅ Default redirect to home for unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
