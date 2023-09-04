"use client";
import Image from "next/image";
import Slider from "react-slick";

const Sponsor = () => {
  const settings = {
    infinite: true,
    slidesToShow: 6,
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
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    // <!-- sponsor section start -->
    <section
      className="pt-120 pb-120 multi-home-overlay"
      style={{ backgroundImage: "url('/images/bg/multi-sponsor.jpg')" }}
    >
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-4 text-center">
            <div className="section-top">
              <span className="top-title">Sponsors</span>
              <h2 className="section-title">Our Lovely Pratner</h2>
              <div className="section-top-line"></div>
            </div>
          </div>
        </div>
        {/* <!-- row end --> */}
        <Slider {...settings} className="sponsor-slider">
          <div className="single-slide">
            <div className="sponsor-item">
              <Image
                width={205}
                height={64}
                src="/images/sponsors/1.png"
                alt="image"
              />
            </div>
          </div>
          {/* <!-- single-slide end --> */}
          <div className="single-slide">
            <div className="sponsor-item">
              <Image
                width={205}
                height={64}
                src="/images/sponsors/2.png"
                alt="image"
              />
            </div>
          </div>
          {/* <!-- single-slide end --> */}
          <div className="single-slide">
            <div className="sponsor-item">
              <Image
                width={205}
                height={64}
                src="/images/sponsors/3.png"
                alt="image"
              />
            </div>
          </div>
          {/* <!-- single-slide end --> */}
          <div className="single-slide">
            <div className="sponsor-item">
              <Image
                width={205}
                height={64}
                src="/images/sponsors/4.png"
                alt="image"
              />
            </div>
          </div>
          {/* <!-- single-slide end --> */}
          <div className="single-slide">
            <div className="sponsor-item">
              <Image
                width={205}
                height={64}
                src="/images/sponsors/5.png"
                alt="image"
              />
            </div>
          </div>
          {/* <!-- single-slide end --> */}
          <div className="single-slide">
            <div className="sponsor-item">
              <Image
                width={205}
                height={64}
                src="/images/sponsors/6.png"
                alt="image"
              />
            </div>
          </div>
          {/* <!-- single-slide end --> */}
          <div className="single-slide">
            <div className="sponsor-item">
              <Image
                width={205}
                height={64}
                src="/images/sponsors/1.png"
                alt="image"
              />
            </div>
          </div>
          {/* <!-- single-slide end --> */}
          <div className="single-slide">
            <div className="sponsor-item">
              <Image
                width={205}
                height={64}
                src="/images/sponsors/2.png"
                alt="image"
              />
            </div>
          </div>
          {/* <!-- single-slide end --> */}
        </Slider>
        {/* <!-- sponsor-slider end --> */}
      </div>
    </section>

    // <!-- sponsor section end -->
  );
};

export default Sponsor;
