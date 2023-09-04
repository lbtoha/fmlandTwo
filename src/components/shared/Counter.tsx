"use client";
import CountUp from "react-countup";

const Counter = ({ start, end }: { start: number; end: number }) => {
  return (
    <CountUp start={start} end={end} enableScrollSpy>
      {({ countUpRef }) => <span ref={countUpRef} />}
    </CountUp>
  );
};

export default Counter;
