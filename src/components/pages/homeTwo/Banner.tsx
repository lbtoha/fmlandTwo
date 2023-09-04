import Link from "next/link";

const Banner = () => {
  return (
    //<!-- banner section start -->
    <section
      className="banner-section multi-home-banner-two overflow-hidden"
      style={{ backgroundImage: "url('/images/bg/multi-banner2.jpg')" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <h4 className="text-base mb-4">Live Msic</h4>
            <h2 className="banner-title">Best Radio Station In A Place</h2>
            <p className="text-white fs[24px] mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
              commodo, risus maecenas
            </p>

            <Link
              href="radio-station-details"
              className="btn btn-main rounded-pill mt-5 d-inline-flex align-items-center"
            >
              <i className="ri-play-line me-1 fs-2 line-height-1"></i> Play Song
            </Link>
          </div>
        </div>
      </div>
    </section>
    // <!-- banner section end -->
  );
};

export default Banner;
