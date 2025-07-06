
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Dumbbell, Target, Users } from 'lucide-react';
import { movementsDatabase, getAllCategories, Movement } from '@/data/movementsDatabase';

const ExerciseList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [expandedExercise, setExpandedExercise] = useState<string | null>(null);

  const categories = getAllCategories();
  const difficulties = ['Iniciante', 'Intermediário', 'Avançado'];

  const filteredExercises = movementsDatabase.filter(exercise => {
    const matchesSearch = exercise.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exercise.categoria.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || exercise.categoria === selectedCategory;
    const matchesDifficulty = !selectedDifficulty || exercise.dificuldade === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Iniciante': return 'bg-green-500';
      case 'Intermediário': return 'bg-yellow-500';
      case 'Avançado': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'Saltos': Target,
      'Agachamento': Dumbbell,
      'Levantamento Terra': Dumbbell,
      'Peito': Dumbbell,
      'Costas': Dumbbell,
      'default': Dumbbell
    };
    
    return iconMap[category] || iconMap['default'];
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gorila-primary mb-4">Banco de Exercícios</h1>
        <p className="text-xl text-gray-600">
          Biblioteca completa de movimentos e exercícios
        </p>
      </div>

      {/* Filtros */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              placeholder="Buscar exercícios..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Todas as categorias" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Todas as categorias</SelectItem>
              {categories.map(category => (
                <SelectItem key={category} value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
            <SelectTrigger>
              <SelectValue placeholder="Todas as dificuldades" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Todas as dificuldades</SelectItem>
              {difficulties.map(difficulty => (
                <SelectItem key={difficulty} value={difficulty}>{difficulty}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button 
            variant="outline"
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('');
              setSelectedDifficulty('');
            }}
          >
            <Filter className="mr-2" size={16} />
            Limpar Filtros
          </Button>
        </div>
      </div>

      {/* Lista de Exercícios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExercises.map((exercise) => {
          const CategoryIcon = getCategoryIcon(exercise.categoria);
          const isExpanded = expandedExercise === exercise.id;
          
          return (
            <Card key={exercise.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gorila-yellow rounded-full flex items-center justify-center">
                      <CategoryIcon className="text-gorila-primary" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-gorila-primary text-lg">{exercise.nome}</CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {exercise.categoria}
                      </Badge>
                    </div>
                  </div>
                  <Badge className={`${getDifficultyColor(exercise.dificuldade)} text-white text-xs`}>
                    {exercise.dificuldade}
                  </Badge>
                </div>
                <CardDescription className="mt-2">
                  {exercise.descricao}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm text-gorila-primary mb-1">Músculos:</h4>
                    <div className="flex flex-wrap gap-1">
                      {exercise.musculos.map((musculo, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {musculo}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {exercise.equipamentos.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-sm text-gorila-primary mb-1">Equipamentos:</h4>
                      <p className="text-sm text-gray-600">
                        {exercise.equipamentos.join(', ') || 'Peso corporal'}
                      </p>
                    </div>
                  )}

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => setExpandedExercise(isExpanded ? null : exercise.id)}
                  >
                    {isExpanded ? 'Ocultar Instruções' : 'Ver Instruções'}
                  </Button>

                  {isExpanded && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-sm text-gorila-primary mb-2">Instruções:</h4>
                      <ol className="text-sm space-y-1">
                        {exercise.instrucoes.map((instrucao, index) => (
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

      {filteredExercises.length === 0 && (
        <div className="text-center py-12">
          <Users className="mx-auto text-gray-400 mb-4" size={64} />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">Nenhum exercício encontrado</h3>
          <p className="text-gray-500">Tente ajustar os filtros ou termo de busca</p>
        </div>
      )}

      {/* Estatísticas */}
      <div className="mt-12 bg-gorila-primary/5 rounded-lg p-6">
        <h3 className="text-2xl font-bold text-gorila-primary mb-4 text-center">Estatísticas do Banco</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-gorila-primary">{movementsDatabase.length}</div>
            <div className="text-sm text-gray-600">Total de Exercícios</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gorila-primary">{categories.length}</div>
            <div className="text-sm text-gray-600">Categorias</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gorila-primary">
              {movementsDatabase.filter(e => e.equipamentos.length === 0).length}
            </div>
            <div className="text-sm text-gray-600">Peso Corporal</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gorila-primary">
              {movementsDatabase.filter(e => e.dificuldade === 'Iniciante').length}
            </div>
            <div className="text-sm text-gray-600">Para Iniciantes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseList;
