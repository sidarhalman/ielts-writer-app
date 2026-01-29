import { useEffect, useState } from "react";

export function useTimer(initialSeconds) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const timer = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [running]);

  function reset(seconds) {
    setRunning(false);
    setSecondsLeft(seconds);
  }

  return {
    secondsLeft,
    running,
    setRunning,
    reset
  };
}