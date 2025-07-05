
import { Button } from '@/components/ui/button';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { useStopwatch } from '@/hooks/useStopwatch';
import { formatTime } from '@/utils/timeFormatter';

const Stopwatch = () => {
  const { time, isRunning, start, pause, reset } = useStopwatch();

  return (
    <div className="text-center">
      <div className="text-6xl font-mono font-bold text-gorila-primary mb-4">
        {formatTime(time)}
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

export default Stopwatch;
