
import { useState, useEffect, useRef } from 'react';

export const useCountdown = () => {
  const [time, setTime] = useState(0);
  const [originalTime, setOriginalTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime(prev => {
          if (prev <= 1) {
            setIsRunning(false);
            alert('Tempo esgotado!');
            return 0;
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
  }, [isRunning, time]);

  const start = () => {
    if (time === 0) {
      const totalSeconds = minutes * 60 + seconds;
      setTime(totalSeconds);
      setOriginalTime(totalSeconds);
    }
    setIsRunning(true);
  };

  const pause = () => setIsRunning(false);
  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return {
    time,
    originalTime,
    isRunning,
    minutes,
    seconds,
    setMinutes,
    setSeconds,
    start,
    pause,
    reset
  };
};
