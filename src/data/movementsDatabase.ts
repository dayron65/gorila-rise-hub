
export interface Movement {
  id: string;
  nome: string;
  categoria: string;
  descricao: string;
  equipamentos: string[];
  dificuldade: 'Iniciante' | 'Intermediário' | 'Avançado';
  musculos: string[];
  instrucoes: string[];
  variacoes?: string[];
}

export const movementsDatabase: Movement[] = [
  // SALTOS
  {
    id: 'salto-vertical',
    nome: 'Salto Vertical',
    categoria: 'Saltos',
    descricao: 'Salto explosivo para cima com máxima altura',
    equipamentos: [],
    dificuldade: 'Iniciante',
    musculos: ['Quadríceps', 'Glúteos', 'Panturrilhas'],
    instrucoes: [
      'Posicione-se em pé com pés afastados na largura dos ombros',
      'Flexione joelhos e quadris preparando para o salto',
      'Salte explosivamente para cima',
      'Aterrisse suavemente flexionando joelhos'
    ]
  },
  {
    id: 'salto-horizontal',
    nome: 'Salto Horizontal',
    categoria: 'Saltos',
    descricao: 'Salto explosivo para frente com máxima distância',
    equipamentos: [],
    dificuldade: 'Iniciante',
    musculos: ['Quadríceps', 'Glúteos', 'Isquiotibiais'],
    instrucoes: [
      'Posicione-se atrás da linha de partida',
      'Balance os braços para trás',
      'Salte explosivamente para frente',
      'Aterrisse com ambos os pés'
    ]
  },
  {
    id: 'salto-triplo',
    nome: 'Salto Triplo',
    categoria: 'Saltos',
    descricao: 'Sequência de três saltos consecutivos',
    equipamentos: [],
    dificuldade: 'Avançado',
    musculos: ['Quadríceps', 'Glúteos', 'Panturrilhas', 'Core'],
    instrucoes: [
      'Execute primeiro salto unilateral',
      'Aterrisse no mesmo pé',
      'Execute segundo salto alternando pés',
      'Finalize com salto bilateral'
    ]
  },
  {
    id: 'salto-unilateral',
    nome: 'Salto Unilateral',
    categoria: 'Saltos',
    descricao: 'Salto com apoio em apenas uma perna',
    equipamentos: [],
    dificuldade: 'Intermediário',
    musculos: ['Quadríceps', 'Glúteos', 'Estabilizadores'],
    instrucoes: [
      'Apoie-se em uma perna',
      'Flexione joelho e quadril',
      'Salte explosivamente',
      'Aterrisse na mesma perna'
    ]
  },

  // AGACHAMENTOS
  {
    id: 'agachamento-livre',
    nome: 'Agachamento Livre',
    categoria: 'Agachamento',
    descricao: 'Agachamento clássico com peso corporal',
    equipamentos: [],
    dificuldade: 'Iniciante',
    musculos: ['Quadríceps', 'Glúteos', 'Core'],
    instrucoes: [
      'Pés afastados na largura dos ombros',
      'Desça flexionando quadris e joelhos',
      'Mantenha o tronco ereto',
      'Suba até a posição inicial'
    ]
  },
  {
    id: 'agachamento-costa',
    nome: 'Agachamento nas Costas',
    categoria: 'Agachamento',
    descricao: 'Agachamento com barra apoiada nas costas',
    equipamentos: ['Barra', 'Rack'],
    dificuldade: 'Intermediário',
    musculos: ['Quadríceps', 'Glúteos', 'Core', 'Eretores da Espinha'],
    instrucoes: [
      'Posicione a barra no trapézio',
      'Retire a barra do suporte',
      'Desça controladamente',
      'Suba explosivamente'
    ]
  },
  {
    id: 'goblet-squat',
    nome: 'Goblet Squat',
    categoria: 'Agachamento',
    descricao: 'Agachamento segurando peso próximo ao peito',
    equipamentos: ['Kettlebell ou Halter'],
    dificuldade: 'Iniciante',
    musculos: ['Quadríceps', 'Glúteos', 'Core'],
    instrucoes: [
      'Segure o peso próximo ao peito',
      'Pés afastados na largura dos ombros',
      'Desça em agachamento',
      'Mantenha o tronco ereto'
    ]
  },

  // LEVANTAMENTO TERRA
  {
    id: 'rdl',
    nome: 'RDL (Romanian Deadlift)',
    categoria: 'Levantamento Terra',
    descricao: 'Levantamento terra romeno focado nos isquiotibiais',
    equipamentos: ['Barra'],
    dificuldade: 'Intermediário',
    musculos: ['Isquiotibiais', 'Glúteos', 'Eretores da Espinha'],
    instrucoes: [
      'Segure a barra com pegada pronada',
      'Mantenha joelhos levemente flexionados',
      'Desça a barra deslizando pelas pernas',
      'Suba contraindo glúteos e isquiotibiais'
    ]
  },
  {
    id: 'levantamento-terra-barra',
    nome: 'Levantamento Terra com Barra',
    categoria: 'Levantamento Terra',
    descricao: 'Movimento fundamental de levantamento do solo',
    equipamentos: ['Barra', 'Anilhas'],
    dificuldade: 'Intermediário',
    musculos: ['Quadríceps', 'Glúteos', 'Isquiotibiais', 'Core', 'Trapézio'],
    instrucoes: [
      'Posicione-se com barra próxima às canelas',
      'Agache e segure a barra',
      'Mantenha costas retas',
      'Levante estendendo quadris e joelhos'
    ]
  },

  // PEITO
  {
    id: 'supino-reto',
    nome: 'Supino Reto',
    categoria: 'Peito',
    descricao: 'Exercício clássico para desenvolvimento do peitoral',
    equipamentos: ['Banco', 'Barra'],
    dificuldade: 'Intermediário',
    musculos: ['Peitoral Maior', 'Tríceps', 'Deltoides Anterior'],
    instrucoes: [
      'Deite no banco com pés no chão',
      'Segure a barra com pegada média',
      'Desça a barra até o peito',
      'Empurre explosivamente para cima'
    ]
  },
  {
    id: 'flexao-braco',
    nome: 'Flexão de Braço',
    categoria: 'Peito',
    descricao: 'Exercício funcional usando peso corporal',
    equipamentos: [],
    dificuldade: 'Iniciante',
    musculos: ['Peitoral', 'Tríceps', 'Core'],
    instrucoes: [
      'Posição de prancha com mãos no chão',
      'Desça o corpo flexionando os braços',
      'Mantenha corpo alinhado',
      'Empurre para cima até extensão completa'
    ]
  },

  // COSTAS
  {
    id: 'barra-fixa',
    nome: 'Barra Fixa',
    categoria: 'Costas',
    descricao: 'Exercício de tração vertical com peso corporal',
    equipamentos: ['Barra Fixa'],
    dificuldade: 'Intermediário',
    musculos: ['Latíssimo do Dorso', 'Romboides', 'Bíceps'],
    instrucoes: [
      'Segure a barra com pegada pronada',
      'Puxe o corpo para cima',
      'Leve o queixo acima da barra',
      'Desça controladamente'
    ]
  },
  {
    id: 'remada-curvada',
    nome: 'Remada Curvada',
    categoria: 'Costas',
    descricao: 'Exercício de tração horizontal',
    equipamentos: ['Barra'],
    dificuldade: 'Intermediário',
    musculos: ['Latíssimo do Dorso', 'Romboides', 'Trapézio Médio'],
    instrucoes: [
      'Segure a barra com pegada supinada',
      'Incline o tronco para frente',
      'Puxe a barra em direção ao abdômen',
      'Contraia as escápulas'
    ]
  }
];

export const getMovementsByCategory = (categoria: string): Movement[] => {
  return movementsDatabase.filter(movement => movement.categoria === categoria);
};

export const getMovementById = (id: string): Movement | undefined => {
  return movementsDatabase.find(movement => movement.id === id);
};

export const getAllCategories = (): string[] => {
  return [...new Set(movementsDatabase.map(movement => movement.categoria))];
};
