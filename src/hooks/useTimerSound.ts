
import { useRef } from 'react';

export const useTimerSound = () => {
  const audioContextRef = useRef<AudioContext | null>(null);

  const createBeepSound = (frequency: number = 800, duration: number = 500) => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }

    const ctx = audioContextRef.current;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration / 1000);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + duration / 1000);
  };

  const playStartSound = () => {
    createBeepSound(600, 300); // Som mais grave para início
  };

  const playEndSound = () => {
    // Som duplo para finalização
    createBeepSound(800, 200);
    setTimeout(() => createBeepSound(1000, 300), 250);
  };

  const playPhaseChangeSound = () => {
    createBeepSound(700, 200); // Som médio para mudança de fase
  };

  return {
    playStartSound,
    playEndSound,
    playPhaseChangeSound
  };
};
