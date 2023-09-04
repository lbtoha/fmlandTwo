import Image from "next/image";
import popularOnlineStation from "../../../../public/data/popularOnlineStation";
import SingleAudioPlayer from "./SingleAudioPlayer";

const PopularOnlineStation = () => {
  return (
    <section className="pt-120 pb-120 position-relative z-index2 multi-section-bg">
      <div className="bottom-left-el">
        <Image
          width={221}
          height={220}
          src="/images/elements/bottom-box-shape2.png"
          alt="image"
        />
      </div>

      <div className="multi-radio-dots">
        <Image
          width={133}
          height={287}
          src="/images/elements/multi-testimonial-left.png"
          alt="image"
        />
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="section-top">
              <span className="top-title">Radio</span>
              <h2 className="section-title">Popular Online Station</h2>
              <div className="section-top-line"></div>
            </div>
          </div>
        </div>
        {/* <!-- row end --> */}
        <div className="row">
          <div className="col-lg-12 small-player-wrapper">
            {popularOnlineStation.map(({ id, ...props }) => (
              <SingleAudioPlayer key={id} {...props} />
            ))}
            {/* <!-- single-audio-player end --> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularOnlineStation;
