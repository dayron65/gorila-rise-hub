
import { useState, useEffect, useRef } from 'react';
import { useTimerSound } from './useTimerSound';

export const useStopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { playStartSound, playEndSound } = useTimerSound();

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
    playStartSound();
  };

  const pause = () => {
    setIsRunning(false);
    playEndSound();
  };

  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return {
    time,
    isRunning,
    start,
    pause,
    reset
  };
};
