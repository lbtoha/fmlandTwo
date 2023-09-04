"use client";
import useAudioPlayer from "@/hooks/useAudioPlayer";

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
  return (
    <div className={`maudio ${playToggle && "playing"}`}>
      <audio onTimeUpdate={handleProgress} ref={audioRef} src={audio}></audio>
      <div className="audio-control">
        <a
          onClick={handleFastReverse}
          href="javascript:;"
          className="fast-reverse"
        ></a>
        <a onClick={handlePlayToggle} href="javascript:;" className="play"></a>
        <a
          href="javascript:;"
          onClick={handleFastForward}
          className="fast-forward"
        ></a>
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
      </div>
    </div>
  );
};

export default AudioPlayerWithProgressBar;
