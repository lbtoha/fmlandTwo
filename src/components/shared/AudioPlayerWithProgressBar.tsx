"use client";
import useAudioPlayer from "@/hooks/useAudioPlayer";
import Link from "next/link";
import { useEffect, useState } from "react";

const AudioPlayerWithProgressBar = ({
  audio = "/audio/main.mp3",
}: {
  audio: string;
}) => {
  const {
    playToggle,
    audioRef,
    progressBarRef,
    progress,
    duration,
    currentTime,
    handlePlayToggle,
    handleFastReverse,
    handleFastForward,
    handleProgressBarMouseDown,
    handleProgressBarMouseUp,
    handleProgressBarMouseLeave,
    handleProgressBarInteraction,
    handleProgressBarMouseMove,
    handleProgress,
  } = useAudioPlayer();

  // formate the duration in second
  const [durationInMin, setDurationInMin] = useState("");

  useEffect(() => {
    const minutes: number = Math.floor(duration / 60);
    const remainingSeconds: number = Math.floor(duration % 60);
    const newDuration = `${minutes}:${remainingSeconds} `.replace(
      /:0(\d) min$/,
      ":$1 min"
    );
    setDurationInMin(newDuration);
  }, [duration, audio]);

  return (
    <div className={`maudio ${playToggle && "playing"}`}>
      <audio onTimeUpdate={handleProgress} ref={audioRef} src={audio}></audio>
      <div className="audio-control">
        <Link
          onClick={handleFastReverse}
          href="javascript:;"
          className="fast-reverse"
        ></Link>
        <Link
          onClick={handlePlayToggle}
          href="javascript:;"
          className="play"
        ></Link>
        <Link
          href="javascript:;"
          onClick={handleFastForward}
          className="fast-forward"
        ></Link>
        <div
          className="progress-bar"
          ref={progressBarRef}
          onClick={handleProgressBarInteraction}
          onMouseDown={handleProgressBarMouseDown}
          onMouseUp={handleProgressBarMouseUp}
          onMouseMove={handleProgressBarMouseMove}
          onMouseLeave={handleProgressBarMouseLeave}
        >
          <div
            className="progress-pass"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="time-keep">
          {" "}
          <span className="current-time">{currentTime}</span> /{" "}
          <span className="duration">{durationInMin}</span>{" "}
        </div>
      </div>
    </div>
  );
};

export default AudioPlayerWithProgressBar;
