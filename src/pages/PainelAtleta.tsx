import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TimerSystem from '@/components/TimerSystem';
import { 
  User, 
  FileText, 
  Calendar, 
  CreditCard, 
  Trophy, 
  Camera, 
  Clock,
  CheckCircle,
  Dumbbell,
  Target,
  LogOut
} from 'lucide-react';

const PainelAtleta = () => {
  const [user, setUser] = useState<any>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('user');
    if (!userData) {
      navigate('/login');
      return;
    }
    setUser(JSON.parse(userData));

    // Update clock every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  if (!user) {
    return null;
  }

  const menuItems = [
    { id: 'ficha', label: 'Ficha de Treino', icon: Dumbbell },
    { id: 'anamnese', label: 'Anamnese', icon: FileText },
    { id: 'checkin', label: 'Check-in', icon: CheckCircle },
    { id: 'cartao', label: 'Cartão Associado', icon: CreditCard },
    { id: 'recordes', label: 'Recordes Pessoais', icon: Trophy },
    { id: 'foto-inicial', label: 'Foto Inicial', icon: Camera },
    { id: 'foto-progresso', label: 'Foto 24 Semanas', icon: Camera },
    { id: 'cronometro', label: 'Cronômetro', icon: Clock },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Verde */}
      <header className="bg-green-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-white text-green-600 font-bold">
                  {user.name.split(' ').map((n: string) => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-xl font-bold">{user.name}</h1>
                <p className="text-green-200">Atleta Gorila Rise</p>
              </div>
            </div>
            <Button
              onClick={handleLogout}
              variant="ghost"
              className="text-white hover:bg-green-700"
            >
              <LogOut size={18} className="mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Menu */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-gorila-primary">Menu do Atleta</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <nav className="space-y-1">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-100 transition-colors"
                    >
                      <item.icon size={18} className="text-gorila-primary" />
                      <span className="text-sm">{item.label}</span>
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="dashboard" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="treinos">Treinos</TabsTrigger>
                <TabsTrigger value="progresso">Progresso</TabsTrigger>
                <TabsTrigger value="cronometro">Cronômetro</TabsTrigger>
              </TabsList>

              <TabsContent value="dashboard" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Calendar className="text-gorila-yellow" />
                        <span>Check-in Hoje</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-green-600">✓ Confirmado</p>
                      <p className="text-sm text-gray-600">Horário: 08:00 - 10:00</p>
                      <Button className="w-full mt-4 bg-gorila-primary hover:bg-gorila-dark">
                        Alterar Horário
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Target className="text-gorila-yellow" />
                        <span>Próximo Treino</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg font-semibold">Treino de Peito</p>
                      <p className="text-sm text-gray-600">4 exercícios • 45 min</p>
                      <Badge className="mt-2 bg-gorila-yellow text-gorila-primary">
                        Em andamento
                      </Badge>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Trophy className="text-gorila-yellow" />
                        <span>Último Recorde</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg font-semibold">Supino: 80kg</p>
                      <p className="text-sm text-gray-600">Batido há 3 dias</p>
                      <p className="text-xs text-green-600 mt-1">+5kg do recorde anterior</p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Relógio Atual</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-4xl font-mono font-bold text-gorila-primary mb-4">
                        {currentTime.toLocaleTimeString()}
                      </div>
                      <div className="text-lg text-gray-600 mb-6">
                        {currentTime.toLocaleDateString('pt-BR', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="treinos" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Ficha de Treino Atual</CardTitle>
                    <CardDescription>Divisão ABC - Semana 3 de 4</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold text-gorila-primary">Treino A - Peito, Ombro e Tríceps</h4>
                        <div className="mt-2 space-y-2">
                          <div className="flex justify-between items-center">
                            <span>Supino Reto</span>
                            <Badge>4x8-12</Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Inclinado com Halteres</span>
                            <Badge>3x10-15</Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Desenvolvimento</span>
                            <Badge>4x8-12</Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Tríceps Pulley</span>
                            <Badge>3x12-15</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="progresso" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Foto Inicial</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                        <Camera size={48} className="text-gray-400" />
                      </div>
                      <Button className="w-full">Upload da Foto</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Foto 24 Semanas</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                        <Camera size={48} className="text-gray-400" />
                      </div>
                      <Button className="w-full">Upload da Foto</Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="cronometro" className="space-y-6">
                <TimerSystem />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PainelAtleta;
