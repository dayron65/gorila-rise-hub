
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Stopwatch from './Stopwatch';
import CountdownTimer from './CountdownTimer';
import IntervalTimer from './IntervalTimer';

const TimerSystem = () => {
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
            <Stopwatch />
          </TabsContent>

          <TabsContent value="countdown" className="space-y-4">
            <CountdownTimer />
          </TabsContent>

          <TabsContent value="interval" className="space-y-4">
            <IntervalTimer />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TimerSystem;
