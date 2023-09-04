"use client";
import AudioPlayerWithProgressBar from "@/components/shared/AudioPlayerWithProgressBar";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
type Props = {
  image: StaticImageData;
  showName: string;
  viewNow: number;
  audio: string;
  radio: string;
};

const SingleAudioPlayer = ({
  image,
  showName,
  viewNow,
  audio,
  radio,
}: Props) => {
  const [active, setActive] = useState(false);

  return (
    <div className="single-audio-player style-two style-sm">
      <div className="single-audio-thumb rounded-30">
        <Image width={120} height={120} src={image} alt="image" />
      </div>
      <div className="single-audio-content">
        <div className="single-audio-content-top">
          <h4 className="title">{showName}</h4>
          <span className="text-base fs[24px] me-4">{radio}</span>
          <span className="me-4">
            <i className="far fa-eye text-base me-1"></i> {viewNow}K
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
        <AudioPlayerWithProgressBar audio={audio} />
      </div>
    </div>
  );
};

export default SingleAudioPlayer;
