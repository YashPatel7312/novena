import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./TestimonialSection.css";

// 🖼 Import image file
import bgImage from "../assets/bg-2.jpg"; // 👈 adjust path as per your folder structure

const testimonials = [
  {
    name: "Kolis Mullar",
    title: "Good Support!",
    text: "They provide great service facility consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet nostrum nemo commodi numquam quod.",
  },
  {
    name: "John Partho",
    title: "Amazing service!",
    text: "They provide great service facility consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.",
  },
  {
    name: "Partho Sarothi",
    title: "Nice Environment!",
    text: "They provide great service facility consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.",
  },
];

function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="testimonial-wrapper">
          {/* Left Side Image */}
          <div className="testimonial-image-container">
            <img
              src={bgImage}
              alt="Doctors"
              className="testimonial-image"
            />
          </div>

          {/* Right Side Content */}
          <div className="testimonial-slider">
            <h2 className="testimonial-title">What they say about us</h2>
            <div className="testimonial-line"></div>

            <Swiper
              modules={[Pagination, Autoplay]}
              direction="vertical"
              pagination={{
                clickable: true,
              }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              className="testimonial-swiper"
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-content">
                    <h4 className="testimonial-subtitle">{item.title}</h4>
                    <p className="testimonial-name">{item.name}</p>
                    <p className="testimonial-text">{item.text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
