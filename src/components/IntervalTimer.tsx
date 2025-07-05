
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { useIntervalTimer } from '@/hooks/useIntervalTimer';
import { formatTime } from '@/utils/timeFormatter';

const IntervalTimer = () => {
  const {
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
  } = useIntervalTimer();

  return (
    <div className="text-center">
      <div className="mb-2">
        <span className={`text-lg font-semibold px-3 py-1 rounded ${
          isWorkPhase ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
        }`}>
          {isWorkPhase ? 'TEMPO A' : 'TEMPO B'}
        </span>
      </div>
      <div className="text-6xl font-mono font-bold text-gorila-primary mb-2">
        {formatTime(currentTime)}
      </div>
      <div className="text-sm text-gray-600 mb-4">
        Round {round}
      </div>
      
      <div className="space-y-4 max-w-md mx-auto mb-4">
        <div>
          <Label className="text-sm font-semibold text-green-800 mb-2 block">TEMPO A (Treino)</Label>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label htmlFor="workMinutes" className="text-xs">Minutos</Label>
              <Input
                id="workMinutes"
                type="number"
                value={workMinutes}
                onChange={(e) => setWorkMinutes(Number(e.target.value))}
                disabled={isRunning}
                min="0"
                max="59"
              />
            </div>
            <div>
              <Label htmlFor="workSeconds" className="text-xs">Segundos</Label>
              <Input
                id="workSeconds"
                type="number"
                value={workSeconds}
                onChange={(e) => setWorkSeconds(Number(e.target.value))}
                disabled={isRunning}
                min="0"
                max="59"
              />
            </div>
          </div>
        </div>
        
        <div>
          <Label className="text-sm font-semibold text-blue-800 mb-2 block">TEMPO B (Descanso)</Label>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label htmlFor="restMinutes" className="text-xs">Minutos</Label>
              <Input
                id="restMinutes"
                type="number"
                value={restMinutes}
                onChange={(e) => setRestMinutes(Number(e.target.value))}
                disabled={isRunning}
                min="0"
                max="59"
              />
            </div>
            <div>
              <Label htmlFor="restSeconds" className="text-xs">Segundos</Label>
              <Input
                id="restSeconds"
                type="number"
                value={restSeconds}
                onChange={(e) => setRestSeconds(Number(e.target.value))}
                disabled={isRunning}
                min="0"
                max="59"
              />
            </div>
          </div>
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

export default IntervalTimer;
