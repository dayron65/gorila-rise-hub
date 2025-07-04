
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play, Pause, Square, RotateCcw } from 'lucide-react';

const TimerSystem = () => {
  // Cronômetro
  const [stopwatchTime, setStopwatchTime] = useState(0);
  const [isStopwatchRunning, setIsStopwatchRunning] = useState(false);
  
  // Timer regressivo
  const [countdownTime, setCountdownTime] = useState(0);
  const [originalCountdownTime, setOriginalCountdownTime] = useState(0);
  const [isCountdownRunning, setIsCountdownRunning] = useState(false);
  const [countdownMinutes, setCountdownMinutes] = useState(5);
  const [countdownSeconds, setCountdownSeconds] = useState(0);
  
  // Timer de intervalo
  const [intervalWorkTime, setIntervalWorkTime] = useState(30);
  const [intervalRestTime, setIntervalRestTime] = useState(10);
  const [currentIntervalTime, setCurrentIntervalTime] = useState(30);
  const [isIntervalRunning, setIsIntervalRunning] = useState(false);
  const [isWorkPhase, setIsWorkPhase] = useState(true);
  const [intervalRound, setIntervalRound] = useState(1);
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Formatação de tempo
  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hrs > 0) {
      return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Cronômetro
  useEffect(() => {
    if (isStopwatchRunning) {
      intervalRef.current = setInterval(() => {
        setStopwatchTime(prev => prev + 1);
      }, 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isStopwatchRunning]);

  // Timer regressivo
  useEffect(() => {
    if (isCountdownRunning && countdownTime > 0) {
      intervalRef.current = setInterval(() => {
        setCountdownTime(prev => {
          if (prev <= 1) {
            setIsCountdownRunning(false);
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
  }, [isCountdownRunning, countdownTime]);

  // Timer de intervalo
  useEffect(() => {
    if (isIntervalRunning && currentIntervalTime > 0) {
      intervalRef.current = setInterval(() => {
        setCurrentIntervalTime(prev => {
          if (prev <= 1) {
            if (isWorkPhase) {
              setIsWorkPhase(false);
              return intervalRestTime;
            } else {
              setIsWorkPhase(true);
              setIntervalRound(round => round + 1);
              return intervalWorkTime;
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
  }, [isIntervalRunning, currentIntervalTime, isWorkPhase, intervalWorkTime, intervalRestTime]);

  const startStopwatch = () => setIsStopwatchRunning(true);
  const pauseStopwatch = () => setIsStopwatchRunning(false);
  const resetStopwatch = () => {
    setIsStopwatchRunning(false);
    setStopwatchTime(0);
  };

  const startCountdown = () => {
    if (countdownTime === 0) {
      const totalSeconds = countdownMinutes * 60 + countdownSeconds;
      setCountdownTime(totalSeconds);
      setOriginalCountdownTime(totalSeconds);
    }
    setIsCountdownRunning(true);
  };

  const pauseCountdown = () => setIsCountdownRunning(false);
  const resetCountdown = () => {
    setIsCountdownRunning(false);
    setCountdownTime(0);
  };

  const startInterval = () => {
    if (!isIntervalRunning) {
      setCurrentIntervalTime(intervalWorkTime);
      setIsWorkPhase(true);
      setIntervalRound(1);
    }
    setIsIntervalRunning(true);
  };

  const pauseInterval = () => setIsIntervalRunning(false);
  const resetInterval = () => {
    setIsIntervalRunning(false);
    setCurrentIntervalTime(intervalWorkTime);
    setIsWorkPhase(true);
    setIntervalRound(1);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center">Sistema de Cronometragem</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="stopwatch" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="stopwatch">Cronômetro</TabsTrigger>
            <TabsTrigger value="countdown">Regressivo</TabsTrigger>
            <TabsTrigger value="interval">Intervalo</TabsTrigger>
          </TabsList>

          <TabsContent value="stopwatch" className="space-y-4">
            <div className="text-center">
              <div className="text-6xl font-mono font-bold text-gorila-primary mb-4">
                {formatTime(stopwatchTime)}
              </div>
              <div className="space-x-2">
                <Button
                  onClick={startStopwatch}
                  disabled={isStopwatchRunning}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Play size={16} className="mr-2" />
                  Iniciar
                </Button>
                <Button
                  onClick={pauseStopwatch}
                  disabled={!isStopwatchRunning}
                  variant="outline"
                >
                  <Pause size={16} className="mr-2" />
                  Pausar
                </Button>
                <Button
                  onClick={resetStopwatch}
                  variant="destructive"
                >
                  <RotateCcw size={16} className="mr-2" />
                  Resetar
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="countdown" className="space-y-4">
            <div className="text-center">
              <div className="text-6xl font-mono font-bold text-gorila-primary mb-4">
                {formatTime(countdownTime)}
              </div>
              <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto mb-4">
                <div>
                  <Label htmlFor="minutes">Minutos</Label>
                  <Input
                    id="minutes"
                    type="number"
                    value={countdownMinutes}
                    onChange={(e) => setCountdownMinutes(Number(e.target.value))}
                    disabled={isCountdownRunning}
                    min="0"
                    max="59"
                  />
                </div>
                <div>
                  <Label htmlFor="seconds">Segundos</Label>
                  <Input
                    id="seconds"
                    type="number"
                    value={countdownSeconds}
                    onChange={(e) => setCountdownSeconds(Number(e.target.value))}
                    disabled={isCountdownRunning}
                    min="0"
                    max="59"
                  />
                </div>
              </div>
              <div className="space-x-2">
                <Button
                  onClick={startCountdown}
                  disabled={isCountdownRunning}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Play size={16} className="mr-2" />
                  Iniciar
                </Button>
                <Button
                  onClick={pauseCountdown}
                  disabled={!isCountdownRunning}
                  variant="outline"
                >
                  <Pause size={16} className="mr-2" />
                  Pausar
                </Button>
                <Button
                  onClick={resetCountdown}
                  variant="destructive"
                >
                  <RotateCcw size={16} className="mr-2" />
                  Resetar
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="interval" className="space-y-4">
            <div className="text-center">
              <div className="mb-2">
                <span className={`text-lg font-semibold px-3 py-1 rounded ${
                  isWorkPhase ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {isWorkPhase ? 'TREINO' : 'DESCANSO'}
                </span>
              </div>
              <div className="text-6xl font-mono font-bold text-gorila-primary mb-2">
                {formatTime(currentIntervalTime)}
              </div>
              <div className="text-sm text-gray-600 mb-4">
                Round {intervalRound}
              </div>
              
              <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto mb-4">
                <div>
                  <Label htmlFor="workTime">Treino (seg)</Label>
                  <Input
                    id="workTime"
                    type="number"
                    value={intervalWorkTime}
                    onChange={(e) => setIntervalWorkTime(Number(e.target.value))}
                    disabled={isIntervalRunning}
                    min="1"
                  />
                </div>
                <div>
                  <Label htmlFor="restTime">Descanso (seg)</Label>
                  <Input
                    id="restTime"
                    type="number"
                    value={intervalRestTime}
                    onChange={(e) => setIntervalRestTime(Number(e.target.value))}
                    disabled={isIntervalRunning}
                    min="1"
                  />
                </div>
              </div>
              
              <div className="space-x-2">
                <Button
                  onClick={startInterval}
                  disabled={isIntervalRunning}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Play size={16} className="mr-2" />
                  Iniciar
                </Button>
                <Button
                  onClick={pauseInterval}
                  disabled={!isIntervalRunning}
                  variant="outline"
                >
                  <Pause size={16} className="mr-2" />
                  Pausar
                </Button>
                <Button
                  onClick={resetInterval}
                  variant="destructive"
                >
                  <RotateCcw size={16} className="mr-2" />
                  Resetar
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TimerSystem;
