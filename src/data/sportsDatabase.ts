
export interface SportDrill {
  id: string;
  nome: string;
  esporte: string;
  descricao: string;
  equipamentos: string[];
  dificuldade: 'Iniciante' | 'Intermediário' | 'Avançado';
  duracao: string;
  instrucoes: string[];
  objetivos: string[];
}

export const sportsDatabase: SportDrill[] = [
  // ATLETISMO
  {
    id: 'ladder-drills',
    nome: 'Ladder Drills (Agilidade)',
    esporte: 'Atletismo',
    descricao: 'Icky Shuffle → Lateral In-Out',
    equipamentos: ['Escada de agilidade'],
    dificuldade: 'Iniciante',
    duracao: '10-15 minutos',
    instrucoes: [
      'Configure a escada no chão',
      'Execute Icky Shuffle: dentro-fora-dentro com cada pé',
      'Progride para Lateral In-Out',
      'Mantenha velocidade controlada'
    ],
    objetivos: ['Agilidade', 'Coordenação', 'Velocidade dos pés']
  },
  {
    id: 'block-starts-resistance',
    nome: 'Block Starts + Resistance',
    esporte: 'Atletismo',
    descricao: 'Saídas com elástico para potência',
    equipamentos: ['Bloco de partida', 'Elástico de resistência'],
    dificuldade: 'Intermediário',
    duracao: '20-30 minutos',
    instrucoes: [
      'Posicione-se no bloco de partida',
      'Conecte o elástico ao corpo',
      'Execute saída explosiva contra resistência',
      'Foque na primeira passada'
    ],
    objetivos: ['Potência de partida', 'Aceleração', 'Força explosiva']
  },
  {
    id: 'plyometric-circuit',
    nome: 'Plyometric Circuit',
    esporte: 'Atletismo',
    descricao: 'Box jumps → depth jumps → bounding',
    equipamentos: ['Caixas pliométricas', 'Espaço amplo'],
    dificuldade: 'Avançado',
    duracao: '25-35 minutos',
    instrucoes: [
      'Station 1: Box jumps - 3 séries de 8',
      'Station 2: Depth jumps - 3 séries de 6',
      'Station 3: Bounding - 3 séries de 10 passadas',
      'Descanso de 2 minutos entre estações'
    ],
    objetivos: ['Potência', 'Explosão', 'Força reativa']
  },

  // BOXE
  {
    id: 'shadow-boxing-levels',
    nome: 'Shadow Boxing Levels',
    esporte: 'Boxe',
    descricao: 'Combinações básicas → avançadas com deslocamento',
    equipamentos: ['Espelho (opcional)'],
    dificuldade: 'Iniciante',
    duracao: '15-20 minutos',
    instrucoes: [
      'Nível 1: Jab-direto básico (2 min)',
      'Nível 2: Adicionar cruzado (2 min)',
      'Nível 3: Combinações com movimento (3 min)',
      'Foque na técnica e fluidez'
    ],
    objetivos: ['Técnica', 'Condicionamento', 'Visualização']
  },
  {
    id: 'heavy-bag-power',
    nome: 'Heavy Bag Power Series',
    esporte: 'Boxe',
    descricao: 'Socos em sequência (jab-direto-cruzado)',
    equipamentos: ['Saco pesado', 'Luvas de boxe'],
    dificuldade: 'Intermediário',
    duracao: '20-25 minutos',
    instrucoes: [
      'Aquecimento: jabs leves (2 min)',
      'Série 1: Jab-direto (3x1 min)',
      'Série 2: Jab-direto-cruzado (3x1 min)',
      'Finalize com uppercuts (2 min)'
    ],
    objetivos: ['Potência', 'Precisão', 'Resistência muscular']
  },

  // BASQUETEBOL
  {
    id: 'form-shooting',
    nome: 'Form Shooting (Iniciante)',
    esporte: 'Basquetebol',
    descricao: 'Arremesso estático com foco na mecânica',
    equipamentos: ['Bola de basquete', 'Cesta'],
    dificuldade: 'Iniciante',
    duracao: '15-20 minutos',
    instrucoes: [
      'Posicione-se a 1m da cesta',
      'Foque na mecânica: BEEF (Balance, Eyes, Elbow, Follow-through)',
      'Execute 50 arremessos próximos',
      'Aumente distância gradualmente'
    ],
    objetivos: ['Mecânica de arremesso', 'Precisão', 'Confiança']
  },
  {
    id: 'mikan-drill',
    nome: 'Mikan Drill Progression',
    esporte: 'Basquetebol',
    descricao: 'Finalização com ambas as mãos → adicionar giro → com defensor',
    equipamentos: ['Bola de basquete', 'Cesta'],
    dificuldade: 'Intermediário',
    duracao: '10-15 minutos',
    instrucoes: [
      'Posicione-se do lado da cesta',
      'Finalize alternando mãos',
      'Adicione giros no ar',
      'Inclua defensor passivo'
    ],
    objetivos: ['Ambidestria', 'Finalização próxima', 'Coordenação']
  },

  // CHEERLEADING
  {
    id: 'stunt-progressions',
    nome: 'Stunt Progressions',
    esporte: 'Cheerleading',
    descricao: 'Thigh stand → elevator → extension',
    equipamentos: ['Colchonetes', 'Spotter'],
    dificuldade: 'Intermediário',
    duracao: '30-45 minutos',
    instrucoes: [
      'Inicie com thigh stand (coxa)',
      'Progride para elevator (ombro)',
      'Finalize com extension (braços estendidos)',
      'Sempre com spotter presente'
    ],
    objetivos: ['Confiança', 'Força', 'Coordenação de equipe']
  },
  {
    id: 'tumbling-safety',
    nome: 'Tumbling Safety Drills',
    esporte: 'Cheerleading',
    descricao: 'Rolamentos → estrelas → flic-flac com spotter',
    equipamentos: ['Colchonetes', 'Cintos de segurança'],
    dificuldade: 'Iniciante',
    duracao: '25-30 minutos',
    instrucoes: [
      'Aquecimento com rolamentos',
      'Pratique estrelas com perfeição',
      'Flic-flac sempre com spotter',
      'Progressão gradual'
    ],
    objetivos: ['Segurança', 'Progressão técnica', 'Confiança']
  },

  // NATAÇÃO
  {
    id: 'kickboard-progressions',
    nome: 'Kickboard Progressions',
    esporte: 'Natação',
    descricao: 'Pernada crawl → borboleta com snorkel',
    equipamentos: ['Prancha', 'Snorkel'],
    dificuldade: 'Iniciante',
    duracao: '20-25 minutos',
    instrucoes: [
      '4x50m pernada crawl com prancha',
      '4x25m pernada borboleta',
      'Use snorkel para foco na técnica',
      'Mantenha ritmo constante'
    ],
    objetivos: ['Técnica de pernada', 'Força de pernas', 'Resistência']
  },
  {
    id: 'flip-turn-efficiency',
    nome: 'Flip Turn Efficiency',
    esporte: 'Natação',
    descricao: 'Viradas na parede com cronômetro',
    equipamentos: ['Cronômetro', 'Piscina'],
    dificuldade: 'Intermediário',
    duracao: '15-20 minutos',
    instrucoes: [
      'Pratique aproximação da parede',
      'Execute virada sem respirar',
      'Cronometre saída submersa',
      'Melhore tempo progressivamente'
    ],
    objetivos: ['Eficiência', 'Velocidade de virada', 'Técnica']
  }
];

export const getDrillsBySport = (esporte: string): SportDrill[] => {
  return sportsDatabase.filter(drill => drill.esporte === esporte);
};

export const getAllSports = (): string[] => {
  return [...new Set(sportsDatabase.map(drill => drill.esporte))];
};

export const getDrillById = (id: string): SportDrill | undefined => {
  return sportsDatabase.find(drill => drill.id === id);
};
