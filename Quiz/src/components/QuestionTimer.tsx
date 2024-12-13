import { useEffect, useState } from "react";

interface QuestionTimerProps {
  timeout: number;
  onTimeout: (() => void) | null;
  mode: string;
}

export default function QuestionTimer({
  timeout,
  onTimeout,
  mode,
}: QuestionTimerProps) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("Setting timeout");
    const questionTimer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(questionTimer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("Setting interval");
    const timerInterval = setInterval(() => {
      setRemainingTime((prevRemaining) => prevRemaining - 100);
    }, 100);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      max={timeout}
      value={remainingTime}
      className={mode}
    />
  );
}
