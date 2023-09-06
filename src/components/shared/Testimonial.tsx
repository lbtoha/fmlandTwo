"use client";
import NextArrow from "@/components/shared/NextArrow";
import PrevArrow from "@/components/shared/PrevArrow";
import Image from "next/image";
import { MouseEvent } from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: (
      <PrevArrow
        currentSlide={0}
        slideCount={0}
        onClick={(event: MouseEvent<HTMLButtonElement>) => {}}
      />
    ),
    nextArrow: (
      <NextArrow
        currentSlide={0}
        slideCount={0}
        onClick={(event: MouseEvent<HTMLButtonElement>) => {}}
      />
    ),
    autoplay: false,
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
    speed: 1000,
    autoplaySpeed: 500,
  };
  return (
    // <!-- testimonial section start -->
    <section className="pt-120 pb-120 multi-section-bg position-relative z-index-p overflow-hidden">
      <div className="multi-testimonial-left-el">
        <Image
          width={133}
          height={287}
          src="/images/elements/multi-testimonial-left.png"
          alt="image"
        />
      </div>
      <div className="multi-testimonial-right-el">
        <Image
          width={124}
          height={313}
          src="/images/elements/multi-testimonial-right.png"
          alt="image"
        />
      </div>
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
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <Slider {...settings} className="testimonial-slider-two">
              <div className="single-slide">
                <div className="testimonial-item style-four">
                  <i className="fas fa-quote-right quote-right"></i>
                  <div className="testimonial-item-thumb">
                    <Image
                      width={306}
                      height={380}
                      src="/images/testimonial/b1.jpg"
                      alt="image"
                    />
                  </div>
                  <div className="testimonial-item-content">
                    <h4>Ranio</h4>
                    <span className="designation">Music Artist</span>
                    <p>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Purus euismod lectus integer turpis aliquet consequat,
                      enim. Non quis pulvinar risus nec elit. Quis vitae dictum
                      volutpat vitae”.
                    </p>
                  </div>
                </div>
              </div>
              <div className="single-slide">
                <div className="testimonial-item style-four">
                  <i className="fas fa-quote-right quote-right"></i>
                  <div className="testimonial-item-thumb">
                    <Image
                      width={306}
                      height={380}
                      src="/images/testimonial/b1.jpg"
                      alt="image"
                    />
                  </div>
                  <div className="testimonial-item-content">
                    <h4>Ranio</h4>
                    <span className="designation">Music Artist</span>
                    <p>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Purus euismod lectus integer turpis aliquet consequat,
                      enim. Non quis pulvinar risus nec elit. Quis vitae dictum
                      volutpat vitae”.
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
    //  <!-- testimonial section end --> */}
  );
};

export default Testimonial;
