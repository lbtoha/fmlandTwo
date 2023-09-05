"use client";
import testimonialData from "@/../public/data/testimonialData";
import NextArrow from "@/components/shared/NextArrow";
import PrevArrow from "@/components/shared/PrevArrow";
import { MouseEvent } from "react";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const setting = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: (
      <PrevArrow
        currentSlide={0}
        slideCount={0}
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          console.log("clicked");
        }}
      />
    ),
    nextArrow: (
      <NextArrow
        currentSlide={0}
        slideCount={0}
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          console.log("clicked");
        }}
      />
    ),
    autoplay: false,
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
    speed: 1000,
    autoplaySpeed: 500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    // <!-- testimonial section start -->
    <section
      className="pt-120 pb-120 multi-section-bg overflow-hidden"
      style={{ backgroundImage: "url('/images/bg/testimonial2.png')" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="section-top">
              <span className="top-title">Testimonial</span>
              <h2 className="section-title">Our Users Love</h2>
              <div className="section-top-line"></div>
            </div>
          </div>
        </div>
        {/* <!-- row end --> */}
        <Slider {...setting} className="testimonial-slider-three">
          {testimonialData.map(({ id, ...props }) => (
            <TestimonialCard key={id} {...props} />
          ))}
        </Slider>
      </div>
    </section>

    // <!-- testimonial section end --> */}
  );
};

export default Testimonial;
