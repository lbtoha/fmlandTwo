import Image from "next/image";

const BestRadioStation = () => {
  return (
    <section className="pt-120 pb-120 section-bg multi-about-section">
      <div
        className="multi-home-about-side-bg"
        style={{ backgroundImage: "url('/images/bg/about2.jpg')" }}
      ></div>
      <div className="container">
        <div className="row gy-4 align-items-center justify-content-between">
          <div className="col-lg-5">
            <div className="about-thumb">
              <Image
                width={527}
                height={544}
                src="/images/bg/about.jpg"
                alt="image"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-top">
              <span className="top-title">About FM Land</span>
              <h2 className="section-title">
                Best Radio Station In Your Frequency
              </h2>
              <div className="section-top-line"></div>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Adipiscing facilisi nunc massa volutpat, leo fermentum nec.
                Habitasse leo scelerisque semper eget blandit enim. Gravida
                vitae egestas convallis bibendum. Elit, porttitor et laoreet
                enim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestRadioStation;
