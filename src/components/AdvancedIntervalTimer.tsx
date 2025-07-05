
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Pause, RotateCcw, Plus, Trash2 } from 'lucide-react';
import { useAdvancedIntervalTimer, IntervalConfig } from '@/hooks/useAdvancedIntervalTimer';
import { formatTime } from '@/utils/timeFormatter';

const AdvancedIntervalTimer = () => {
  const {
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
  } = useAdvancedIntervalTimer();

  const getPhaseDisplay = () => {
    switch (currentPhase) {
      case 'start':
        return 'PREPARAR';
      case 'tempoA':
        return `TEMPO A - Intervalo ${currentInterval + 1}`;
      case 'tempoB':
        return `TEMPO B - Intervalo ${currentInterval + 1}`;
      default:
        return 'PREPARAR';
    }
  };

  const getPhaseColor = () => {
    switch (currentPhase) {
      case 'start':
        return 'bg-yellow-100 text-yellow-800';
      case 'tempoA':
        return 'bg-green-100 text-green-800';
      case 'tempoB':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const updateIntervalTime = (id: string, type: 'tempoA' | 'tempoB', field: 'minutos' | 'segundos', value: number) => {
    const interval = intervalos.find(i => i.id === id);
    if (interval) {
      const updatedTime = { ...interval[type], [field]: value };
      updateInterval(id, { [type]: updatedTime });
    }
  };

  return (
    <div className="text-center space-y-6">
      {/* Display do Timer */}
      <div className="space-y-4">
        <div className={`inline-block px-4 py-2 rounded-lg font-semibold ${getPhaseColor()}`}>
          {getPhaseDisplay()}
        </div>
        <div className="text-6xl font-mono font-bold text-gorila-primary">
          {formatTime(currentTime)}
        </div>
        <div className="text-lg text-gray-600">
          Round {currentRound} de {rounds}
        </div>
      </div>

      {/* Configurações */}
      <div className="max-w-4xl mx-auto space-y-4">
        {/* Rounds */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Configurações Gerais</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="max-w-xs mx-auto">
              <Label htmlFor="rounds" className="text-sm font-semibold">Rounds</Label>
              <Input
                id="rounds"
                type="number"
                value={rounds}
                onChange={(e) => setRounds(Number(e.target.value))}
                disabled={isRunning}
                min="1"
                max="20"
                className="text-center"
              />
            </div>
          </CardContent>
        </Card>

        {/* Intervalos */}
        <div className="space-y-4">
          {intervalos.map((intervalo, index) => (
            <Card key={intervalo.id} className="relative">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Intervalo {index + 1}</CardTitle>
                  {intervalos.length > 1 && (
                    <Button
                      onClick={() => removeInterval(intervalo.id)}
                      disabled={isRunning}
                      variant="outline"
                      size="sm"
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 size={16} />
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Tempo A */}
                  <div>
                    <Label className="text-sm font-semibold text-green-800 mb-3 block">
                      TEMPO A (Treino)
                    </Label>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label className="text-xs">Minutos</Label>
                        <Input
                          type="number"
                          value={intervalo.tempoA.minutos}
                          onChange={(e) => updateIntervalTime(intervalo.id, 'tempoA', 'minutos', Number(e.target.value))}
                          disabled={isRunning}
                          min="0"
                          max="59"
                        />
                      </div>
                      <div>
                        <Label className="text-xs">Segundos</Label>
                        <Input
                          type="number"
                          value={intervalo.tempoA.segundos}
                          onChange={(e) => updateIntervalTime(intervalo.id, 'tempoA', 'segundos', Number(e.target.value))}
                          disabled={isRunning}
                          min="0"
                          max="59"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Tempo B */}
                  <div>
                    <Label className="text-sm font-semibold text-blue-800 mb-3 block">
                      TEMPO B (Descanso)
                    </Label>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label className="text-xs">Minutos</Label>
                        <Input
                          type="number"
                          value={intervalo.tempoB.minutos}
                          onChange={(e) => updateIntervalTime(intervalo.id, 'tempoB', 'minutos', Number(e.target.value))}
                          disabled={isRunning}
                          min="0"
                          max="59"
                        />
                      </div>
                      <div>
                        <Label className="text-xs">Segundos</Label>
                        <Input
                          type="number"
                          value={intervalo.tempoB.segundos}
                          onChange={(e) => updateIntervalTime(intervalo.id, 'tempoB', 'segundos', Number(e.target.value))}
                          disabled={isRunning}
                          min="0"
                          max="59"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Adicionar Intervalo */}
        <Button
          onClick={addInterval}
          disabled={isRunning}
          variant="outline"
          className="w-full max-w-xs mx-auto block"
        >
          <Plus size={16} className="mr-2" />
          Adicionar Intervalo
        </Button>
      </div>

      {/* Controles */}
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

export default AdvancedIntervalTimer;
