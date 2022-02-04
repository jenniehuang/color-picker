import React, { useEffect } from "react";
import { useTimer } from "react-timer-hook";

const Timer = ({ expiryTimestamp, setIsFailed, score }) => {
  const { seconds, isRunning, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  useEffect(() => {
    restart(expiryTimestamp);
  }, [score]);

  return (
    <div className="timer" style={{ fontSize: "30px" }}>
      <span>{seconds}s remaining</span>
      {isRunning ? null : setIsFailed(true)}
    </div>
  );
};

export default Timer;
