import React from "react";
import "../singledepartcompo/DepartmentDetails.css";

const DepartmentDetails = () => {
    return (
        <section className="department-details-section container my-5">
            <div className="row">
                {/* Left Content */}
                <div className="col-12 col-lg-8">
                    <div className="department-content">
                        <h2 className="section-title">Medecine and Health</h2>
                        <div className="title-underline"></div>
                        <p className="intro-text">
                            Age forming covered you entered the examine. Blessing scarcely confined her contempt wondered shy.
                            Dashwoods contented sportsmen at up no convinced cordially affection.
                        </p>
                        <p className="description-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum recusandae dolor autem laudantium, quaerat
                            vel dignissimos. Magnam sint suscipit omnis eaque unde eos aliquam distinctio, quisquam iste, itaque
                            possimus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet alias modi eaque, ratione
                            recusandae cupiditate dolorum repellendus iure eius rerum hic minus ipsa at, corporis nesciunt tempore
                            vero voluptas. Tempore.
                        </p>
                    </div>
                </div>

                {/* Right Time Schedule Card - ✅ Always visible */}
                <div className="col-12 col-lg-4">
                    <div className="time-card">
                        <h5 className="time-title">Time Schedule</h5>
                        <div className="title-underline"></div>
                        <ul className="time-list">
                            <li>
                                <span>Monday - Friday</span>
                                <span>9:00 - 17:00</span>
                            </li>
                            <li>
                                <span>Saturday</span>
                                <span>9:00 - 16:00</span>
                            </li>
                            <li>
                                <span>Sunday</span>
                                <span>Closed</span>
                            </li>
                        </ul>
                        <div className="urgent">
                            <p>Need Urgent Help?</p>
                            <h4>+23-4565-65768</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DepartmentDetails;
