import AudioPlayerWithProgressBar from "@/components/shared/AudioPlayerWithProgressBar";
import Image from "next/image";

const Player = () => {
  return (
    <div className="radio-details-player">
      <div className="thumb-area">
        <Image
          width={117}
          height={117}
          src="/images/icons/multi-shows/b1.png"
          alt="image"
        />
        <h4 className="mt-4">FM Open</h4>
        <p className="mt-2">Radio 86.5</p>
        <span className="radio-status">Live</span>
      </div>
      <div className="content-area">
        <h3>“The Music Of Love”</h3>
        <p className="mt-30">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mauris,
          auctor risus, cursus eu ut diam porttitor volutpat. Magna ac massa
          velit dui aliquet elit lorem id.
        </p>

        <div className="single-audio-player style-two style-sm">
          <div className="single-audio-content">
            <div className="single-audio-content-top">
              <span className="me-4">10:00-11:45PM</span>
              <span className="me-4">
                <i className="far fa-eye text-base me-1"></i> 24.2K
              </span>
            </div>
            <AudioPlayerWithProgressBar audio="/audio/main.mp3" />
          </div>
        </div>
        {/* <!-- single-audio-player end --> */}
      </div>
    </div>
  );
};

export default Player;
