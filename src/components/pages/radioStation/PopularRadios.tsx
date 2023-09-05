"use client";
import popularRadioSliderData from "@/../public/data/popularRadioSliderData";
import NextArrow from "@/components/shared/NextArrow";
import PrevArrow from "@/components/shared/PrevArrow";
import { MouseEvent } from "react";
import Slider from "react-slick";
import PopularRadiosCard from "./PopularRadiosCard";

const PopularRadios = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 2,
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
    speed: 600,
    autoplaySpeed: 500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
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
          slidesToShow: 2,
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
    //   <!-- radio station section start -->
    <section
      className="pt-120 pb-120"
      style={{ backgroundImage: "url('/images/bg/multi-radio-station.jpg')" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-top text-center">
              <span className="top-title">Radio</span>
              <h2 className="section-title">Popular Radio Station</h2>
              <div className="section-top-line"></div>
            </div>
          </div>
        </div>
        <Slider {...settings} className="multi-radio-station-slider">
          {popularRadioSliderData.map(({ id, ...props }) => (
            <PopularRadiosCard key={id} {...props} />
          ))}
        </Slider>
      </div>
    </section>
    //  <!-- radio station section end -->
  );
};

export default PopularRadios;
