import Image from "next/image";

const LifeEventMusic = () => {
  return (
    // <!-- music show section start -->
    <section className="pt-120 pb-120">
      <div className="container">
        <div className="row gy-4 justify-content-between align-items-center">
          <div className="col-xl-5 col-lg-6 order-lg-1 order-2">
            <div className="music-show-content">
              <span className="top-title">Music Show</span>
              <h2 className="section-title mb-0">Life Event Music Live Show</h2>
              <div className="section-top-line mb-4"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
                ultricies urna et imperdiet et pulvinar in ullamcorper. Cursus
                tellus tincidunt elementum feugiat sed sit ultrices. Adipiscing
                non lacinia laoreet dui pulvinar tristique.{" "}
              </p>
              <a href="radio-station.html" className="btn btn-main btn-rounded">
                Explore More
              </a>
            </div>
          </div>
          <div className="col-lg-6 order-lg-2 order-1">
            <div className="row">
              <div className="col-lg-6 d-lg-flex d-none align-items-end">
                <div className="music-thumb-one rounded-20 overflow-hidden">
                  <Image
                    width={306}
                    height={480}
                    src="/images/shows/music/8.jpg"
                    alt="image"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="music-thumb-two rounded-20 overflow-hidden d-lg-block d-none">
                  <Image
                    width={306}
                    height={413}
                    src="/images/shows/music/2.jpg"
                    alt="image"
                  />
                </div>
                <div className="music-thumb-three rounded-20 overflow-hidden">
                  <Image
                    width={305}
                    height={153}
                    src="/images/shows/music/3.jpg"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    //  <!-- music show section end -->
  );
};

export default LifeEventMusic;
