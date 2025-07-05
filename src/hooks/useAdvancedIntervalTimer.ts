
import { useState, useEffect, useRef } from 'react';
import { useTimerSound } from './useTimerSound';

export interface IntervalConfig {
  id: string;
  tempoA: { minutos: number; segundos: number };
  tempoB: { minutos: number; segundos: number };
}

export const useAdvancedIntervalTimer = () => {
  const [intervalos, setIntervalos] = useState<IntervalConfig[]>([
    {
      id: '1',
      tempoA: { minutos: 1, segundos: 30 },
      tempoB: { minutos: 0, segundos: 30 }
    }
  ]);
  const [rounds, setRounds] = useState(3);
  const [currentTime, setCurrentTime] = useState(10);
  const [isRunning, setIsRunning] = useState(false);
  const [currentPhase, setCurrentPhase] = useState<'start' | 'tempoA' | 'tempoB'>('start');
  const [currentRound, setCurrentRound] = useState(1);
  const [currentInterval, setCurrentInterval] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { playStartSound, playEndSound, playPhaseChangeSound } = useTimerSound();

  useEffect(() => {
    if (isRunning && currentTime > 0) {
      intervalRef.current = setInterval(() => {
        setCurrentTime(prev => {
          if (prev <= 1) {
            return handlePhaseTransition();
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
  }, [isRunning, currentTime, currentPhase, currentRound, currentInterval, intervalos, rounds]);

  const handlePhaseTransition = () => {
    if (currentPhase === 'start') {
      setCurrentPhase('tempoA');
      playPhaseChangeSound();
      const tempoA = intervalos[currentInterval].tempoA;
      return tempoA.minutos * 60 + tempoA.segundos;
    } else if (currentPhase === 'tempoA') {
      setCurrentPhase('tempoB');
      playPhaseChangeSound();
      const tempoB = intervalos[currentInterval].tempoB;
      return tempoB.minutos * 60 + tempoB.segundos;
    } else if (currentPhase === 'tempoB') {
      // Próximo intervalo ou próximo round
      if (currentInterval < intervalos.length - 1) {
        setCurrentInterval(prev => prev + 1);
        setCurrentPhase('tempoA');
        playPhaseChangeSound();
        const tempoA = intervalos[currentInterval + 1].tempoA;
        return tempoA.minutos * 60 + tempoA.segundos;
      } else if (currentRound < rounds) {
        setCurrentRound(prev => prev + 1);
        setCurrentInterval(0);
        setCurrentPhase('tempoA');
        playPhaseChangeSound();
        const tempoA = intervalos[0].tempoA;
        return tempoA.minutos * 60 + tempoA.segundos;
      } else {
        // Fim do treino
        setIsRunning(false);
        playEndSound();
        return 0;
      }
    }
    return 0;
  };

  const start = () => {
    if (!isRunning) {
      setCurrentTime(10);
      setCurrentPhase('start');
      setCurrentRound(1);
      setCurrentInterval(0);
    }
    setIsRunning(true);
    playStartSound();
  };

  const pause = () => {
    setIsRunning(false);
    playEndSound();
  };

  const reset = () => {
    setIsRunning(false);
    setCurrentTime(10);
    setCurrentPhase('start');
    setCurrentRound(1);
    setCurrentInterval(0);
  };

  const addInterval = () => {
    const newInterval: IntervalConfig = {
      id: Date.now().toString(),
      tempoA: { minutos: 1, segundos: 0 },
      tempoB: { minutos: 0, segundos: 30 }
    };
    setIntervalos(prev => [...prev, newInterval]);
  };

  const removeInterval = (id: string) => {
    if (intervalos.length > 1) {
      setIntervalos(prev => prev.filter(interval => interval.id !== id));
    }
  };

  const updateInterval = (id: string, updates: Partial<IntervalConfig>) => {
    setIntervalos(prev => prev.map(interval => 
      interval.id === id ? { ...interval, ...updates } : interval
    ));
  };

  return {
    intervalos,
    rounds,
    currentTime,
    isRunning,
    currentPhase,
    currentRound,
    currentInterval,
    setRounds,
    start,
    pause,
    reset,
    addInterval,
    removeInterval,
    updateInterval
  };
};
