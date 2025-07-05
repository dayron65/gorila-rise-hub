
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Stopwatch from './Stopwatch';
import CountdownTimer from './CountdownTimer';
import AdvancedIntervalTimer from './AdvancedIntervalTimer';
import GorilaRiseLogo from './GorilaRiseLogo';

const TimerSystem = () => {
  return (
    <Card className="w-full">
      <CardHeader className="text-center">
        <div className="flex flex-col items-center space-y-4">
          <GorilaRiseLogo size="lg" />
          <CardTitle className="text-gorila-primary">Sistema de Cronometragem</CardTitle>
        </div>
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
            <AdvancedIntervalTimer />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TimerSystem;
