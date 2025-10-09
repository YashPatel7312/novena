import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./TestimonialsSection.css";

// image for cards
import f1 from "../assets/f1.jpg";
import f2 from "../assets/f2.jpg";
import f3 from "../assets/f3.jpg";
import f4 from "../assets/f4.jpg";
import f5 from "../assets/f5.jpg";
import f6 from "../assets/f6.jpg";

const testimonials = [
  {
    name: "John Partho",
    title: "Amazing service!",
    text: "They provide great service facility consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.",
    image: f6,
  },
  {
    name: "Mullar Sarth",
    title: "Expert doctors!",
    text: "They provide great service facility consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.",
    image: f5,
  },
  {
    name: "Amelia Watson",
    title: "Great support!",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, voluptatum.",
    image: f4,
  },
  {
    name: "Michael Carter",
    title: "Highly recommend",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, aliquid!",
    image: f3,
  },
  {
    name: "Sophia Turner",
    title: "Friendly staff",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptatem.",
    image: f1,
  },
  {
    name: "David Wilson",
    title: "Quick service",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, blanditiis!",
    image: f2,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section py-5">
      <div className="container text-center">
        <h2 className="section-title fw-bold mb-2">We served over 5000+ Patients</h2>
        <div className="title-underline mx-auto mb-3"></div>
        <p className="section-subtitle text-muted mb-5">
          Lets know moreel necessitatibus dolor asperiores illum possimus sint
          voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <div className="testimonial-header d-flex align-items-center mb-3">
                  <img src={item.image} alt={item.name} className="testimonial-img me-3" />
                  <div className="text-start">
                    <h6 className="fw-bold mb-0">{item.title}</h6>
                    <small className="text-muted">{item.name}</small>
                  </div>
                </div>
                <p className="testimonial-text">{item.text}</p>
                <i className="bi bi-quote testimonial-quote"></i>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
