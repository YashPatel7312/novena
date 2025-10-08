import React from "react";
import "./PatientCareSection.css";
import 'bootstrap-icons/font/bootstrap-icons.css';


const services = [
  { icon: "bi bi-beaker", title: "Laboratory services", text: "Saepe nulla praesentium eaque omnis perferendis a doloremque." },
  { icon: "bi bi-heart-pulse", title: "Heart Disease", text: "Saepe nulla praesentium eaque omnis perferendis a doloremque." },
  { icon: "bi bi-emoji-smile", title: "Dental Care", text: "Saepe nulla praesentium eaque omnis perferendis a doloremque." },
  { icon: "bi bi-person-wheelchair", title: "Body Surgery", text: "Saepe nulla praesentium eaque omnis perferendis a doloremque." },
  { icon: "bi bi-lightbulb", title: "Neurology Sargery", text: "Saepe nulla praesentium eaque omnis perferendis a doloremque." },
  { icon: "bi bi-diagram-3", title: "Gynecology", text: "Saepe nulla praesentium eaque omnis perferendis a doloremque." },
];

const PatientCareSection = () => {
  return (
    <section className="patient-care-section py-5">
      <div className="container text-center">
        <h2 className="section-title fw-bold mb-2">Award winning patient care</h2>
        <div className="title-underline mx-auto mb-3"></div>
        <p className="section-subtitle text-muted mb-5">
          Lets know moreel necessitatibus dolor asperiores illum possimus sint
          voluptates incidunt molestias nostrum laudantium. Maiores porro cumque
          quaerat.
        </p>

        <div className="row gy-4 gx-4">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="service-card">
                <div className="d-flex align-items-start">
                  <div className="service-icon me-3">
                    <i className={service.icon}></i>
                  </div>
                  <div className="text-start">
                    <h5 className="fw-bold mb-2">{service.title}</h5>
                    <p className="text-muted mb-0">{service.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientCareSection;
