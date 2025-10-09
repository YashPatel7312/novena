import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./PartnersSection.css";

import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";

const partners = [logo1, logo2, logo3, logo4, logo5, logo6];

const PartnersSection = () => {
  return (
    <section className="partners-section">
      <div className="container text-center">
        <h2 className="section-title fw-bold mb-2">Partners who support us</h2>
        <div className="title-underline mx-auto mb-3"></div>
        <p className="section-subtitle text-muted mb-5">
          Lets know moreel necessitatibus dolor asperiores illum possimus sint
          voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.
        </p>
      </div>

      <div className="partners-slider-wrapper container">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 0,             // no pause between slides
            disableOnInteraction: false,
          }}
          speed={3000}            // smooth continuous speed
          slidesPerView={4}       // desktop default
          spaceBetween={40}
          breakpoints={{
            0: {
              slidesPerView: 2,   // mobile
              spaceBetween: 20,
            },
            576: {
              slidesPerView: 3,   // tablet
              spaceBetween: 30,
            },
            992: {
              slidesPerView: 4,   // desktop
              spaceBetween: 40,
            },
          }}
        >
          {partners.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="partner-logo" >
                <img src={logo} alt={`Partner ${index + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PartnersSection;
