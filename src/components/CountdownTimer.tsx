
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { useCountdown } from '@/hooks/useCountdown';
import { formatTime } from '@/utils/timeFormatter';

const CountdownTimer = () => {
  const {
    time,
    isRunning,
    minutes,
    seconds,
    setMinutes,
    setSeconds,
    start,
    pause,
    reset
  } = useCountdown();

  return (
    <div className="text-center">
      <div className="text-6xl font-mono font-bold text-gorila-primary mb-4">
        {formatTime(time)}
      </div>
      <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto mb-4">
        <div>
          <Label htmlFor="minutes">Minutos</Label>
          <Input
            id="minutes"
            type="number"
            value={minutes}
            onChange={(e) => setMinutes(Number(e.target.value))}
            disabled={isRunning}
            min="0"
            max="59"
          />
        </div>
        <div>
          <Label htmlFor="seconds">Segundos</Label>
          <Input
            id="seconds"
            type="number"
            value={seconds}
            onChange={(e) => setSeconds(Number(e.target.value))}
            disabled={isRunning}
            min="0"
            max="59"
          />
        </div>
      </div>
      <div className="space-x-2">
        <Button
          onClick={start}
          disabled={isRunning}
          className="bg-green-600 hover:bg-green-700"
        >
          <Play size={16} className="mr-2" />
          Iniciar
        </Button>
        <Button
          onClick={pause}
          disabled={!isRunning}
          variant="outline"
        >
          <Pause size={16} className="mr-2" />
          Pausar
        </Button>
        <Button
          onClick={reset}
          variant="destructive"
        >
          <RotateCcw size={16} className="mr-2" />
          Resetar
        </Button>
      </div>
    </div>
  );
};

export default CountdownTimer;
