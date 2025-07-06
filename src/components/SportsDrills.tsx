
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Clock, Target, Trophy, Zap } from 'lucide-react';
import { sportsDatabase, getAllSports, SportDrill } from '@/data/sportsDatabase';

const SportsDrills = () => {
  const [selectedSport, setSelectedSport] = useState('');
  const [expandedDrill, setExpandedDrill] = useState<string | null>(null);

  const sports = getAllSports();

  const filteredDrills = selectedSport 
    ? sportsDatabase.filter(drill => drill.esporte === selectedSport)
    : sportsDatabase;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Iniciante': return 'bg-green-500';
      case 'Intermediário': return 'bg-yellow-500';
      case 'Avançado': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getSportIcon = (sport: string) => {
    const iconMap: { [key: string]: any } = {
      'Atletismo': Zap,
      'Boxe': Target,
      'Basquetebol': Trophy,
      'Cheerleading': Trophy,
      'Natação': Trophy,
      'default': Trophy
    };
    
    return iconMap[sport] || iconMap['default'];
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gorila-primary mb-4">Drills Esportivos</h1>
        <p className="text-xl text-gray-600">
          Treinamentos específicos por modalidade esportiva
        </p>
      </div>

      {/* Filtro por Esporte */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="max-w-md mx-auto">
          <Select value={selectedSport} onValueChange={setSelectedSport}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione um esporte" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Todos os esportes</SelectItem>
              {sports.map(sport => (
                <SelectItem key={sport} value={sport}>{sport}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Lista de Drills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredDrills.map((drill) => {
          const SportIcon = getSportIcon(drill.esporte);
          const isExpanded = expandedDrill === drill.id;
          
          return (
            <Card key={drill.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gorila-yellow rounded-full flex items-center justify-center">
                      <SportIcon className="text-gorila-primary" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-gorila-primary text-lg">{drill.nome}</CardTitle>
                      <Badge variant="secondary" className="text-xs mt-1">
                        {drill.esporte}
                      </Badge>
                    </div>
                  </div>
                  <Badge className={`${getDifficultyColor(drill.dificuldade)} text-white text-xs`}>
                    {drill.dificuldade}
                  </Badge>
                </div>
                <CardDescription className="mt-2">
                  {drill.descricao}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="mr-1" size={16} />
                      {drill.duracao}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-gorila-primary mb-1">Objetivos:</h4>
                    <div className="flex flex-wrap gap-1">
                      {drill.objetivos.map((objetivo, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {objetivo}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {drill.equipamentos.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-sm text-gorila-primary mb-1">Equipamentos:</h4>
                      <p className="text-sm text-gray-600">
                        {drill.equipamentos.join(', ')}
                      </p>
                    </div>
                  )}

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => setExpandedDrill(isExpanded ? null : drill.id)}
                  >
                    {isExpanded ? 'Ocultar Instruções' : 'Ver Instruções Detalhadas'}
                  </Button>

                  {isExpanded && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-sm text-gorila-primary mb-2">Instruções:</h4>
                      <ol className="text-sm space-y-1">
                        {drill.instrucoes.map((instrucao, index) => (
                          <li key={index} className="flex">
                            <span className="text-gorila-primary font-medium mr-2">{index + 1}.</span>
                            <span>{instrucao}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredDrills.length === 0 && (
        <div className="text-center py-12">
          <Trophy className="mx-auto text-gray-400 mb-4" size={64} />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">Nenhum drill encontrado</h3>
          <p className="text-gray-500">Selecione um esporte para ver os drills disponíveis</p>
        </div>
      )}

      {/* Estatísticas */}
      <div className="mt-12 bg-gorila-primary/5 rounded-lg p-6">
        <h3 className="text-2xl font-bold text-gorila-primary mb-4 text-center">Estatísticas dos Drills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-gorila-primary">{sportsDatabase.length}</div>
            <div className="text-sm text-gray-600">Total de Drills</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gorila-primary">{sports.length}</div>
            <div className="text-sm text-gray-600">Modalidades</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gorila-primary">
              {sportsDatabase.filter(d => d.dificuldade === 'Iniciante').length}
            </div>
            <div className="text-sm text-gray-600">Para Iniciantes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gorila-primary">
              {sportsDatabase.filter(d => d.dificuldade === 'Avançado').length}
            </div>
            <div className="text-sm text-gray-600">Nível Avançado</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsDrills;
