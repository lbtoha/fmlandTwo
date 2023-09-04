import Image from "next/image";

const Banner = () => {
  return (
    //  <!-- banner section start -->
    <section className="banner-section multi-home-banner overflow-hidden">
      <div
        className="multi-home-banner-right-img"
        style={{
          backgroundImage: "url('/images/bg/multi-banner-right.jpg')",
        }}
      ></div>
      <div className="multi-home-banner-left-el">
        <Image
          width={1040}
          height={810}
          src="/images/elements/mult-banner-el.png"
          alt="image"
        />
      </div>
      <div className="multi-home-banner-right-el">
        <Image
          width={419}
          height={685}
          src="/images/elements/mult-banner-el2.png"
          alt="image"
        />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="banner-title">
              Best Radio <span>Station</span> In A Place
            </h2>
            <div className="banner-sm-show">
              <div className="sm-show-thumb">
                <Image
                  width={113}
                  height={116}
                  src="/images/shows/multi-banner.jpg"
                  alt="image"
                  className="rounded-10"
                />
              </div>
              <div className="sm-show-content">
                <h4 className="sm-show-title">Let&apos;s Go The Music</h4>
                <p>Radio 94.5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    //  <!-- banner section end -->
  );
};

export default Banner;
