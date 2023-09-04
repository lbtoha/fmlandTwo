"use client";
import Image from "next/image";
import { MutableRefObject, ReactNode, useRef } from "react";
import Slider from "react-slick";

const PopularShow = ({ children }: { children: ReactNode }) => {
  type SliderRefType = MutableRefObject<Slider | null>;

  let sliderRef: SliderRefType = useRef(null);
  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: false,
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
    speed: 1000,
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
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    // <!-- Popular section start -->
    <section className="pt-120 pb-120 multi-section-bg position-relative z-index2 overflow-hidden">
      <div className="multi-popular-left-el">
        <Image
          width={151}
          height={330}
          src="/images/elements/multi-popular-left.png"
          alt="image"
        />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-8">
            <div className="section-top">
              <span className="top-title">Shows</span>
              <h2 className="section-title">Popular Shows</h2>
              <div className="section-top-line"></div>
            </div>
          </div>
          <div className="col-md-6 col-4 text-end">
            <button
              onClick={previous}
              type="button"
              className="popular-show-prev"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button onClick={next} type="button" className="popular-show-next">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div className="popular-show-slider-wrapper">
          <Slider ref={sliderRef} {...settings} className="popular-show-slider">
            {children}
          </Slider>
          {/* <!-- popular-show-slider end --> */}
        </div>
      </div>
    </section>
  );
};

export default PopularShow;
