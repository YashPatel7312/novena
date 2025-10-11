import React, { useState } from "react";
import "./CommentForm.css";

const CommentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // ❌ prevent reload
    // You could send data to API here...
    console.log("Form Submitted:", formData);

    // ✅ Clear the form fields
    setFormData({
      name: "",
      email: "",
      topic: "",
      phone: "",
      message: ""
    });
  };

  return (
    <section className="comment-section">
      <div className="comment-container">
        {/* ===== Section Title ===== */}
        <div className="comment-header">
          <h2>Contact us</h2>
          <span className="title-underline"></span>
          <p>
            Laboriosam exercitationem nesciunt eveniet beatae eos pariatur, similique,
            excepturi mollitia vel perspiciatis maiores ratione aliquam?
          </p>
        </div>

        {/* ===== FORM ===== */}
        <form className="comment-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              name="topic"
              placeholder="Your Query Topic"
              value={formData.topic}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="comment-btn">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
};

export default CommentForm;
