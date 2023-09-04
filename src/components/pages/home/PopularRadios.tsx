import Image from "next/image";

const PopularRadios = () => {
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
        <div className="row gy-4">
          <div className="col-lg-3 col-sm-6">
            <div className="station-item link-item">
              <a href="radio-station-details.html" className="full-link"></a>
              <div className="station-item-icon">
                <Image
                  width={24}
                  height={40}
                  src="/images/icons/multi-shows/1.png"
                  alt="image"
                />
              </div>
              <h4 className="station-item-title">FM Open</h4>
              <p>Radio 86.5</p>
              <a href="#0">
                Explore <i className="fas fa-long-arrow-alt-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="station-item link-item">
              <a href="radio-station-details.html" className="full-link"></a>
              <div className="station-item-icon">
                <Image
                  width={24}
                  height={40}
                  src="/images/icons/multi-shows/2.png"
                  alt="image"
                />
              </div>
              <h4 className="station-item-title">FM Open</h4>
              <p>Radio 86.5</p>
              <a href="#0">
                Explore <i className="fas fa-long-arrow-alt-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="station-item link-item">
              <a href="radio-station-details.html" className="full-link"></a>
              <div className="station-item-icon">
                <Image
                  width={24}
                  height={40}
                  src="/images/icons/multi-shows/3.png"
                  alt="image"
                />
              </div>
              <h4 className="station-item-title">FM Open</h4>
              <p>Radio 86.5</p>
              <a href="#0">
                Explore <i className="fas fa-long-arrow-alt-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="station-item link-item">
              <a href="radio-station-details.html" className="full-link"></a>
              <div className="station-item-icon">
                <Image
                  width={24}
                  height={40}
                  src="/images/icons/multi-shows/4.png"
                  alt="image"
                />
              </div>
              <h4 className="station-item-title">FM Open</h4>
              <p>Radio 86.5</p>
              <a href="#0">
                Explore <i className="fas fa-long-arrow-alt-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-60 text-center">
          <a href="radio-station" className="btn btn-rounded btn-main">
            Explore More
          </a>
        </div>
      </div>
    </section>
    //  <!-- radio station section end -->
  );
};

export default PopularRadios;
