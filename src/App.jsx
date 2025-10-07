// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Nav from "./components/TopNavbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Services from "./pages/Services";
import Department from "./pages/Department";
import DepartmentSingle from "./pages/DepartmentSingle";
import Submenu01 from "./pages/Submenu01";
import Submenu02 from "./pages/Submenu02";
import Doctors from "./pages/Doctors";
// import DoctorsSingle from "./pages/DoctorsSingle";
import Appoinment from "./pages/Appoinment";
import Submenu1 from "./pages/Submenu1";
import Submenu2 from "./pages/Submenu2";
import BlogWithSidebar from "./pages/BlogWithSidebar";
import BlogSingle from "./pages/BlogSingle";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <Nav /> {/* ✅ Top black info bar */}
      <Navbar /> {/* ✅ Main navigation bar */}

      <div className="container my-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/department" element={<Department />} />
          <Route path="/department-single" element={<DepartmentSingle />} />
          <Route path="/submenu01" element={<Submenu01 />} />
          <Route path="/submenu02" element={<Submenu02 />} />
          <Route path="/doctors" element={<Doctors />} />
          {/* <Route path="/doctor-single" element={<DoctorsSingle />} /> */}
          <Route path="/appoinment" element={<Appoinment />} />
          <Route path="/submenu1" element={<Submenu1 />} />
          <Route path="/submenu2" element={<Submenu2 />} />
          <Route path="/blog-with-sidebar" element={<BlogWithSidebar />} />
          <Route path="/blog-single" element={<BlogSingle />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
