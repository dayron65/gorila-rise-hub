
import { useState, useEffect, useRef } from 'react';

export const useIntervalTimer = () => {
  const [workMinutes, setWorkMinutes] = useState(1);
  const [workSeconds, setWorkSeconds] = useState(30);
  const [restMinutes, setRestMinutes] = useState(0);
  const [restSeconds, setRestSeconds] = useState(30);
  const [currentTime, setCurrentTime] = useState(10);
  const [isRunning, setIsRunning] = useState(false);
  const [isWorkPhase, setIsWorkPhase] = useState(true);
  const [round, setRound] = useState(1);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning && currentTime > 0) {
      intervalRef.current = setInterval(() => {
        setCurrentTime(prev => {
          if (prev <= 1) {
            if (isWorkPhase) {
              setIsWorkPhase(false);
              return restMinutes * 60 + restSeconds;
            } else {
              setIsWorkPhase(true);
              setRound(round => round + 1);
              return workMinutes * 60 + workSeconds;
            }
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, currentTime, isWorkPhase, workMinutes, workSeconds, restMinutes, restSeconds]);

  const start = () => {
    if (!isRunning) {
      setCurrentTime(10);
      setIsWorkPhase(true);
      setRound(1);
    }
    setIsRunning(true);
  };

  const pause = () => setIsRunning(false);
  const reset = () => {
    setIsRunning(false);
    setCurrentTime(10);
    setIsWorkPhase(true);
    setRound(1);
  };

  return {
    workMinutes,
    workSeconds,
    restMinutes,
    restSeconds,
    currentTime,
    isRunning,
    isWorkPhase,
    round,
    setWorkMinutes,
    setWorkSeconds,
    setRestMinutes,
    setRestSeconds,
    start,
    pause,
    reset
  };
};
