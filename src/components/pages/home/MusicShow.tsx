import Counter from "@/components/shared/Counter";
import Image from "next/image";

const MusicShow = () => {
  return (
    //   music show section start
    <section
      className="pt-120 pb-120 section-bg"
      style={{ backgroundImage: "url('/images/bg/multi-overview.jpg')" }}
    >
      <div className="container">
        <div className="row gy-4 justify-content-between align-items-center">
          <div className="col-lg-5">
            <div className="music-single-thumb rounded-30 overflow-hidden">
              <Image
                width={526}
                height={600}
                src="/images/shows/music/4.jpg"
                alt="image"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="music-show-content">
              <span className="top-title">Music Show</span>
              <h2 className="section-title">
                Best Radio Station In Your Frequency
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
                ultricies urna et imperdiet et pulvinar in ullamcorper.
              </p>
            </div>
            <div className="row gx-sm-5 counter-item-wrapper">
              <div className="col-auto">
                <div className="counter-item style-two">
                  <h3 className="counter-amount">
                    <Counter start={0} end={24} />
                    <span>K</span>
                  </h3>
                  <h4 className="countrer-title">Listener</h4>
                </div>
              </div>
              <div className="col-auto">
                <div className="counter-item style-two">
                  <h3 className="counter-amount">
                    <Counter start={0} end={50} />+
                  </h3>
                  <h4 className="countrer-title">Radio Jockey</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // music show section end
  );
};

export default MusicShow;
