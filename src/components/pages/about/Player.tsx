"use client";
import AudioPlayerWithProgressBar from "@/components/shared/AudioPlayerWithProgressBar";
import Image from "next/image";
import { useState } from "react";

const Player = () => {
  const [active, setActive] = useState(false);
  return (
    //  <!-- player section start -->
    <section
      className="pt-120 pb-120 multi-home-overlay-two"
      style={{ backgroundImage: "url('/images/bg/player.jpg')" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="single-player-wrapper">
              <div className="single-audio-player style-two style-sm">
                <div className="single-audio-thumb rounded-30">
                  <Image
                    width={280}
                    height={280}
                    src="/images/bg/signle-player.jpg"
                    alt="image"
                  />
                </div>
                <div className="single-audio-content">
                  <div className="single-audio-content-top">
                    <h4 className="title">“The Live Love”</h4>
                    <span className="text-base fs[24px] me-4">Radio 96.5</span>
                    <span className="me-4">
                      <i className="far fa-eye text-base me-1"></i> 24.2K
                    </span>
                    <span className="live-status live">Live</span>
                    <button
                      onClick={() => setActive(!active)}
                      type="button"
                      className={`bookmark-icon ${active && "active"}`}
                    >
                      <i className="far fa-heart"></i>
                    </button>
                  </div>
                  <p className="details">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquet tempus elementum proin sit id. Malesuada morbi
                    suspendisse tortor ut magna nunc urna, mauris. Nullam etiam
                    dolor lorem venenatis. Arcu, tincidunt vulputate commodo,
                    dignissim ornare elementum.
                  </p>
                  <AudioPlayerWithProgressBar audio="/audio/main.mp3" />
                </div>
              </div>
              {/* <!-- single-audio-player end --> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    //<!-- player section end -->
  );
};

export default Player;
