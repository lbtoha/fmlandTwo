import AudioPlayerWithProgressBar from "@/components/shared/AudioPlayerWithProgressBar";
import Image, { StaticImageData } from "next/image";

type Props = {
  radioIcon: StaticImageData;
  fm: string;
  radio: string;
  showName: string;
  viewNow: number;
  audio: string;
};

const PopularRadioCard = ({
  radioIcon,
  fm,
  radio,
  showName,
  viewNow,
  audio,
}: Props) => {
  return (
    <div className="col-xl-6">
      <div className="online-radio-item single-audio-player style-two style-sm">
        <div className="online-radio-item-top">
          <div className="online-radio-item-station">
            <div className="icon">
              <Image width={24} height={40} src={radioIcon} alt="image" />
            </div>
            <div className="content">
              <h5>
                <i className="far fa-eye"></i> {fm}
              </h5>
              <p>{radio}</p>
            </div>
          </div>
          <div className="online-radio-item-status">
            <span className="me-3">
              <Image
                width={22}
                height={22}
                src="/images/icons/eye.png"
                alt="image"
              />{" "}
              {viewNow}K
            </span>
            <span className="live-radio-status">Live</span>
          </div>
        </div>
        <h5 className="online-radio-item-title">{showName}</h5>
        <div className="single-audio-content">
          <AudioPlayerWithProgressBar audio={audio} />
        </div>
      </div>
      {/* <!-- single-audio-player end --> */}
    </div>
  );
};

export default PopularRadioCard;
