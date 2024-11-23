import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

interface TimerChallengeProps {
  title: string;
  targetTime: number;
}
export default function TimerChallenge({
  title,
  targetTime,
}: TimerChallengeProps) {
  const timer = useRef<number>();
  const dialog = useRef<HTMLDialogElement | null>(null);
  //const [timerStarted, setTimerStared] = useState(false);
  //const [timerExpired, setTimerExpired] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const isTimerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    setTimeRemaining(targetTime * 1000);
    dialog.current?.open();
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);

    // setTimerStared(true);
  }

  function handleStop() {
    dialog.current?.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>You lost!</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={isTimerActive ? handleStop : handleStart}>
            {isTimerActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={isTimerActive ? "active" : undefined}>
          {isTimerActive ? "Time is running ..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
