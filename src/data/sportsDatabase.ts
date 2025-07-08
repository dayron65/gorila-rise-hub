
export interface SportDrill {
  id: string;
  nome: string;
  esporte: string;
  descricao: string;
  duracao: string;
  dificuldade: 'Iniciante' | 'Intermediário' | 'Avançado';
  objetivos: string[];
  equipamentos: string[];
  instrucoes: string[];
}

export const sportsDatabase: SportDrill[] = [
  // ATLETISMO (18 drills)
  {
    id: 'ladder-drills-icky-shuffle',
    nome: 'Ladder Drills - Icky Shuffle',
    esporte: 'Atletismo',
    descricao: 'Drill de agilidade na escada com movimento lateral',
    duracao: '3-5 minutos',
    dificuldade: 'Iniciante',
    objetivos: ['Agilidade', 'Coordenação', 'Velocidade de pés'],
    equipamentos: ['Escada de agilidade'],
    instrucoes: [
      'Posicione-se ao lado da escada',
      'Entre com pé direito, depois esquerdo',
      'Saia lateralmente com pé direito',
      'Repita o padrão por toda escada'
    ]
  },
  {
    id: 'ladder-drills-lateral-in-out',
    nome: 'Ladder Drills - Lateral In-Out',
    esporte: 'Atletismo',
    descricao: 'Movimento lateral dentro e fora da escada',
    duracao: '3-5 minutos',
    dificuldade: 'Iniciante',
    objetivos: ['Agilidade lateral', 'Coordenação'],
    equipamentos: ['Escada de agilidade'],
    instrucoes: [
      'Posicione-se ao lado da escada',
      'Entre com ambos os pés',
      'Saia do outro lado com ambos os pés',
      'Continue lateralmente por toda escada'
    ]
  },
  {
    id: 'block-starts-resistance',
    nome: 'Block Starts + Resistance',
    esporte: 'Atletismo',
    descricao: 'Saídas com elástico para desenvolver potência',
    duracao: '10-15 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Potência explosiva', 'Técnica de largada'],
    equipamentos: ['Blocos de partida', 'Elástico de resistência'],
    instrucoes: [
      'Posicione-se nos blocos',
      'Prenda elástico ao corpo',
      'Execute saída explosiva contra resistência',
      'Mantenha técnica correta'
    ]
  },
  {
    id: 'plyometric-circuit',
    nome: 'Plyometric Circuit',
    esporte: 'Atletismo',
    descricao: 'Circuito pliométrico: Box jumps → depth jumps → bounding',
    duracao: '15-20 minutos',
    dificuldade: 'Avançado',
    objetivos: ['Potência', 'Força explosiva', 'Reatividade'],
    equipamentos: ['Boxes de diferentes alturas', 'Cones'],
    instrucoes: [
      'Estação 1: Box jumps - 3 séries de 8',
      'Estação 2: Depth jumps - 3 séries de 6',
      'Estação 3: Bounding - 3 séries de 20m',
      'Descanso de 90s entre estações'
    ]
  },
  {
    id: 'hurdle-technique-drills',
    nome: 'Hurdle Technique Drills',
    esporte: 'Atletismo',
    descricao: 'Treino técnico de passagem de barreiras baixas → altas',
    duracao: '20 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Técnica de barreira', 'Flexibilidade', 'Ritmo'],
    equipamentos: ['Barreiras ajustáveis'],
    instrucoes: [
      'Comece com barreiras baixas',
      'Foque na técnica da perna de ataque',
      'Trabalhe perna de balanço',
      'Aumente altura progressivamente'
    ]
  },
  {
    id: 'baton-exchange-zones',
    nome: 'Baton Exchange Zones',
    esporte: 'Atletismo',
    descricao: 'Treino de precisão de troca de bastão em velocidade máxima',
    duracao: '20-30 minutos',
    dificuldade: 'Avançado',
    objetivos: ['Precisão', 'Velocidade', 'Coordenação em equipe'],
    equipamentos: ['Bastões', 'Cones para marcar zona'],
    instrucoes: [
      'Marque zona de troca de 20m',
      'Primeiro corredor acelera',
      'Segundo corredor inicia quando primeiro atinge marca',
      'Troca bastão sem olhar para trás'
    ]
  },
  {
    id: 'race-simulation',
    nome: 'Race Simulation',
    esporte: 'Atletismo',
    descricao: 'Partidas realistas com adversários virtuais',
    duracao: '15-25 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Estratégia de corrida', 'Resistência específica'],
    equipamentos: ['Cronômetro', 'Cones'],
    instrucoes: [
      'Defina distância da prova',
      'Estabeleça ritmo-alvo por volta',
      'Simule situações de corrida',
      'Pratique sprint final'
    ]
  },
  {
    id: 'hill-sprints',
    nome: 'Hill Sprints',
    esporte: 'Atletismo',
    descricao: 'Corridas em rampa para força explosiva',
    duracao: '10-15 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Força explosiva', 'Potência', 'Técnica de corrida'],
    equipamentos: ['Rampa ou ladeira'],
    instrucoes: [
      'Encontre rampa de 30-50m',
      'Sprints de 10-15 segundos',
      'Foque na técnica de corrida',
      'Volta caminhando para recuperação'
    ]
  },
  {
    id: 'ankle-mobility-series',
    nome: 'Ankle Mobility Series',
    esporte: 'Atletismo',
    descricao: 'Saltos unilaterais + rotação de tornozelo',
    duracao: '10 minutos',
    dificuldade: 'Iniciante',
    objetivos: ['Mobilidade de tornozelo', 'Prevenção de lesões'],
    equipamentos: [],
    instrucoes: [
      'Saltos unilaterais no local',
      'Rotações de tornozelo em todas direções',
      'Alongamentos específicos',
      '30 segundos cada exercício'
    ]
  },
  {
    id: 'discus-rhythm-drills',
    nome: 'Discus Rhythm Drills',
    esporte: 'Atletismo',
    descricao: 'Giro progressivo com peso gradual',
    duracao: '20 minutos',
    dificuldade: 'Avançado',
    objetivos: ['Técnica de lançamento', 'Ritmo', 'Coordenação'],
    equipamentos: ['Discos de diferentes pesos'],
    instrucoes: [
      'Comece sem peso, apenas movimento',
      'Adicione disco leve',
      'Foque no ritmo dos giros',
      'Aumente peso progressivamente'
    ]
  },
  {
    id: 'long-jump-run-up',
    nome: 'Long Jump Run-Up',
    esporte: 'Atletismo',
    descricao: 'Aferição de passadas + salto na tábua',
    duracao: '15-20 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Precisão', 'Técnica de corrida de aproximação'],
    equipamentos: ['Tábua de salto', 'Trena'],
    instrucoes: [
      'Marque distância de corrida',
      'Conte passadas até a tábua',
      'Ajuste marca inicial',
      'Pratique aceleração progressiva'
    ]
  },
  {
    id: 'tempo-runs',
    nome: 'Tempo Runs',
    esporte: 'Atletismo',
    descricao: 'Ritmo controlado por GPS (ex: 400m em 70s)',
    duracao: '20-40 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Controle de ritmo', 'Resistência aeróbica'],
    equipamentos: ['GPS ou cronômetro'],
    instrucoes: [
      'Defina ritmo-alvo',
      'Mantenha ritmo constante',
      'Use feedback do GPS',
      'Ajuste conforme necessário'
    ]
  },
  {
    id: 'medley-relay-transitions',
    nome: 'Medley Relay Transitions',
    esporte: 'Atletismo',
    descricao: 'Troca entre estilos (ex: velocidade → resistência)',
    duracao: '25-30 minutos',
    dificuldade: 'Avançado',
    objetivos: ['Adaptação', 'Transição entre ritmos'],
    equipamentos: ['Bastões', 'Cronômetro'],
    instrucoes: [
      'Primeiro atleta: sprint 100m',
      'Segundo atleta: 200m meio-fundo',
      'Terceiro atleta: 400m resistência',
      'Quarto atleta: 800m final'
    ]
  },
  {
    id: 'core-stability',
    nome: 'Core Stability',
    esporte: 'Atletismo',
    descricao: 'Pranchas dinâmicas com movimento de braços',
    duracao: '10-15 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Estabilidade core', 'Força funcional'],
    equipamentos: ['Colchonete'],
    instrucoes: [
      'Posição de prancha',
      'Mova braços alternadamente',
      'Mantenha quadris estáveis',
      '30-60 segundos por série'
    ]
  },
  {
    id: 'cool-down-protocol',
    nome: 'Cool-Down Protocol',
    esporte: 'Atletismo',
    descricao: 'Alongamento estático + rolo de liberação miofascial',
    duracao: '15-20 minutos',
    dificuldade: 'Iniciante',
    objetivos: ['Recuperação', 'Flexibilidade', 'Prevenção de lesões'],
    equipamentos: ['Rolo de liberação miofascial'],
    instrucoes: [
      'Caminhada leve 5 minutos',
      'Alongamentos estáticos principais grupos',
      'Liberação miofascial com rolo',
      'Respiração profunda'
    ]
  },
  {
    id: 'high-altitude-simulation',
    nome: 'High-Altitude Simulation',
    esporte: 'Atletismo',
    descricao: 'Treino com máscara de resistência',
    duracao: '20-30 minutos',
    dificuldade: 'Avançado',
    objetivos: ['Capacidade pulmonar', 'Resistência'],
    equipamentos: ['Máscara de treinamento'],
    instrucoes: [
      'Use máscara durante treino',
      'Comece com intensidade menor',
      'Aumente progressivamente',
      'Monitore saturação'
    ]
  },
  {
    id: 'marathon-pacing',
    nome: 'Marathon Pacing',
    esporte: 'Atletismo',
    descricao: 'Ritmo calculado por quilômetro em esteira',
    duracao: '30-90 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Controle de ritmo', 'Resistência específica'],
    equipamentos: ['Esteira', 'Monitor cardíaco'],
    instrucoes: [
      'Calcule ritmo-alvo de maratona',
      'Mantenha ritmo constante',
      'Monitore frequência cardíaca',
      'Hidrate regularmente'
    ]
  },
  {
    id: 'javelin-release-drills',
    nome: 'Javelin Release Drills',
    esporte: 'Atletismo',
    descricao: 'Técnica de lançamento com ênfase no ângulo',
    duracao: '20-25 minutos',
    dificuldade: 'Avançado',
    objetivos: ['Técnica de lançamento', 'Ângulo ótimo'],
    equipamentos: ['Dardo', 'Cones para marcar ângulos'],
    instrucoes: [
      'Pratique movimento sem dardo',
      'Foque no ângulo de liberação',
      'Use dardo leve inicialmente',
      'Aumente distância progressivamente'
    ]
  },
  {
    id: 'injury-prevention',
    nome: 'Injury Prevention',
    esporte: 'Atletismo',
    descricao: 'Saltos em areia fofa para reduzir impacto',
    duracao: '15 minutos',
    dificuldade: 'Iniciante',
    objetivos: ['Prevenção de lesões', 'Fortalecimento'],
    equipamentos: ['Caixa de areia ou superfície macia'],
    instrucoes: [
      'Saltos verticais na areia',
      'Saltos laterais',
      'Aterrissagens controladas',
      'Exercícios proprioceptivos'
    ]
  },

  // BOXE (16 drills)
  {
    id: 'shadow-boxing-levels',
    nome: 'Shadow Boxing Levels',
    esporte: 'Boxe',
    descricao: 'Combinações básicas → avançadas com deslocamento',
    duracao: '10-15 minutos',
    dificuldade: 'Iniciante',
    objetivos: ['Técnica', 'Coordenação', 'Condicionamento'],
    equipamentos: [],
    instrucoes: [
      'Comece com jab-direto básico',
      'Adicione deslocamentos',
      'Inclua defesas',
      'Aumente complexidade das combinações'
    ]
  },
  {
    id: 'heavy-bag-power-series',
    nome: 'Heavy Bag Power Series',
    esporte: 'Boxe',
    descricao: 'Socos em sequência (jab-direto-cruzado)',
    duracao: '15-20 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Potência', 'Resistência específica'],
    equipamentos: ['Saco pesado', 'Luvas'],
    instrucoes: [
      '3 minutos de trabalho contínuo',
      'Combinações 1-2-3-6',
      '1 minuto de descanso',
      'Repetir 5 rounds'
    ]
  },
  {
    id: 'double-end-bag-timing',
    nome: 'Double-End Bag Timing',
    esporte: 'Boxe',
    descricao: 'Defesa + contra-ataque em ritmo variado',
    duracao: '10-12 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Timing', 'Precisão', 'Reflexos'],
    equipamentos: ['Double-end bag', 'Luvas'],
    instrucoes: [
      'Golpeie e esquive do retorno',
      'Varie ritmo dos golpes',
      'Adicione contra-ataques',
      'Mantenha guarda sempre ativa'
    ]
  },
  {
    id: 'focus-mitts-complex',
    nome: 'Focus Mitts Complex',
    esporte: 'Boxe',
    descricao: 'Combinações com treinador (ex: 1-2-3-6)',
    duracao: '15-20 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Precisão', 'Velocidade', 'Coordenação'],
    equipamentos: ['Luvas de foco', 'Luvas'],
    instrucoes: [
      'Treinador chama combinações',
      'Execute com precisão e velocidade',
      'Adicione movimentos de pés',
      'Inclua defesas entre combinações'
    ]
  },
  {
    id: 'sparring-controlado',
    nome: 'Sparring Controlado',
    esporte: 'Boxe',
    descricao: '30% força → 70% com foco técnico',
    duracao: '15-25 minutos',
    dificuldade: 'Avançado',
    objetivos: ['Técnica', 'Timing', 'Estratégia'],
    equipamentos: ['Proteções completas', 'Luvas'],
    instrucoes: [
      'Inicie com 30% de força',
      'Foque na técnica',
      'Aumente intensidade gradualmente',
      'Mantenha controle sempre'
    ]
  },
  {
    id: 'slip-bag-drills',
    nome: 'Slip Bag Drills',
    esporte: 'Boxe',
    descricao: 'Esquivas de cabeça em diferentes alturas',
    duracao: '8-10 minutos',
    dificuldade: 'Iniciante',
    objetivos: ['Defesa', 'Mobilidade de cabeça'],
    equipamentos: ['Slip bag'],
    instrucoes: [
      'Empurre o bag e esquive',
      'Varie altura das esquivas',
      'Adicione contra-ataques',
      'Mantenha equilíbrio'
    ]
  },
  {
    id: 'footwork-circles',
    nome: 'Footwork Circles',
    esporte: 'Boxe',
    descricao: 'Movimento em círculo com ataques pontuais',
    duracao: '10 minutos',
    dificuldade: 'Iniciante',
    objetivos: ['Movimentação', 'Ângulos de ataque'],
    equipamentos: ['Cones'],
    instrucoes: [
      'Mova-se em círculo ao redor do cone',
      'Ataque em ângulos específicos',
      'Mantenha guarda alta',
      'Alterne direções'
    ]
  },
  {
    id: 'body-sparring',
    nome: 'Body Sparring',
    esporte: 'Boxe',
    descricao: 'Golpes apenas no tronco para reduzir lesões',
    duracao: '12-15 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Técnica corporal', 'Segurança'],
    equipamentos: ['Protetor de tronco', 'Luvas'],
    instrucoes: [
      'Golpes apenas no corpo',
      'Proibido atingir cabeça',
      'Foque em ganchos e uppercuts',
      'Defesas corporais'
    ]
  },
  {
    id: 'neck-strengthening',
    nome: 'Neck Strengthening',
    esporte: 'Boxe',
    descricao: 'Resistência manual + pesos leves',
    duracao: '10 minutos',
    dificuldade: 'Iniciante',
    objetivos: ['Fortalecimento cervical', 'Prevenção de lesões'],
    equipamentos: ['Toalha', 'Peso leve'],
    instrucoes: [
      'Resistência manual em 4 direções',
      'Movimentos lentos e controlados',
      'Use peso leve se disponível',
      '10-15 repetições cada direção'
    ]
  },
  {
    id: 'counter-punching-drills',
    nome: 'Counter-Punching Drills',
    esporte: 'Boxe',
    descricao: 'Reação a ataques pré-definidos',
    duracao: '12-15 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Contra-ataque', 'Reflexos', 'Timing'],
    equipamentos: ['Luvas de foco'],
    instrucoes: [
      'Parceiro ataca com combinação definida',
      'Defenda e contra-ataque imediatamente',
      'Varie os ataques iniciais',
      'Trabalhe diferentes contra-ataques'
    ]
  },
  {
    id: 'plyometric-push-ups',
    nome: 'Plyometric Push-Ups',
    esporte: 'Boxe',
    descricao: 'Potência para socos',
    duracao: '8-10 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Potência de braços', 'Explosão'],
    equipamentos: ['Colchonete'],
    instrucoes: [
      'Flexões explosivas',
      'Mãos saem do chão',
      'Aterrissagem controlada',
      '3-5 séries de 5-8 repetições'
    ]
  },
  {
    id: 'rope-skipping-variations',
    nome: 'Rope Skipping Variations',
    esporte: 'Boxe',
    descricao: 'Pés alternados → dupla rotação → cruzado',
    duracao: '15-20 minutos',
    dificuldade: 'Iniciante',
    objetivos: ['Coordenação', 'Condicionamento', 'Ritmo'],
    equipamentos: ['Corda de pular'],
    instrucoes: [
      'Básico: pés alternados 2 min',
      'Dupla rotação: 30 seg',
      'Cruzado: 30 seg',
      'Descanso ativo entre variações'
    ]
  },
  {
    id: 'defensive-clinching',
    nome: 'Defensive Clinching',
    esporte: 'Boxe',
    descricao: 'Técnicas de agarre e desvencilhamento',
    duracao: '10-12 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Defesa no clinch', 'Controle'],
    equipamentos: [],
    instrucoes: [
      'Pratique entrada no clinch',
      'Controle dos braços do oponente',
      'Técnicas de saída',
      'Trabalhe com parceiro'
    ]
  },
  {
    id: 'tire-flip-conditioning',
    nome: 'Tire Flip Conditioning',
    esporte: 'Boxe',
    descricao: 'Força funcional com pneu',
    duracao: '10-15 minutos',
    dificuldade: 'Avançado',
    objetivos: ['Força funcional', 'Potência', 'Condicionamento'],
    equipamentos: ['Pneu grande'],
    instrucoes: [
      'Agache e segure embaixo do pneu',
      'Levante e empurre para virar',
      '20-30 metros por série',
      '3-4 séries com descanso'
    ]
  },
  {
    id: 'tactical-fatigue-drills',
    nome: 'Tactical Fatigue Drills',
    esporte: 'Boxe',
    descricao: 'Assaltos com música alta para simular stress',
    duracao: '15-20 minutos',
    dificuldade: 'Avançado',
    objetivos: ['Resistência sob stress', 'Concentração'],
    equipamentos: ['Sistema de som', 'Equipamentos de treino'],
    instrucoes: [
      'Música alta e estressante',
      'Execute técnicas sob fadiga',
      'Mantenha técnica mesmo cansado',
      'Simula ambiente de competição'
    ]
  },
  {
    id: 'cool-down-boxe',
    nome: 'Cool-Down Boxe',
    esporte: 'Boxe',
    descricao: 'Alongamento de ombros + rotação de quadril',
    duracao: '10-15 minutos',
    dificuldade: 'Iniciante',
    objetivos: ['Recuperação', 'Flexibilidade'],
    equipamentos: [],
    instrucoes: [
      'Alongamento específico de ombros',
      'Rotações de quadril',
      'Alongamento de pescoço',
      'Respiração profunda'
    ]
  },

  // BASQUETEBOL (17 drills)
  {
    id: 'form-shooting',
    nome: 'Form Shooting (Iniciante)',
    esporte: 'Basquetebol',
    descricao: 'Arremesso estático com foco na mecânica',
    duracao: '15-20 minutos',
    dificuldade: 'Iniciante',
    objetivos: ['Mecânica de arremesso', 'Precisão'],
    equipamentos: ['Bola de basquete', 'Cesta'],
    instrucoes: [
      'Posição próxima à cesta',
      'Foque na mecânica do movimento',
      'Arco alto da bola',
      'Follow-through completo'
    ]
  },
  {
    id: 'mikan-drill-progression',
    nome: 'Mikan Drill Progression',
    esporte: 'Basquetebol',
    descricao: 'Finalização com ambas as mãos → adicionar giro → com defensor',
    duracao: '15-20 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Finalização próxima', 'Ambidestria'],
    equipamentos: ['Bola de basquete', 'Cesta'],
    instrucoes: [
      'Alternadamente com cada mão',
      'Sem deixar a bola tocar o chão',
      'Adicione movimento de giro',
      'Inclua defensor passivo'
    ]
  },
  {
    id: 'suicide-sprints-ball',
    nome: 'Suicide Sprints + Ball',
    esporte: 'Basquetebol',
    descricao: 'Corridas de fundo a fundo com dribble',
    duracao: '10-12 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Condicionamento', 'Controle da bola'],
    equipamentos: ['Bola de basquete', 'Cones'],
    instrucoes: [
      'Linha de fundo até linha livre',
      'Linha livre até linha central',
      'Linha central até linha livre oposta',
      'Termina na linha de fundo oposta'
    ]
  },
  {
    id: 'cone-dribbling-series',
    nome: 'Cone Dribbling Series',
    esporte: 'Basquetebol',
    descricao: 'Zigue-zague → crossover entre cones → com defensor ativo',
    duracao: '15 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Controle da bola', 'Agilidade', 'Mudança de direção'],
    equipamentos: ['Bola de basquete', 'Cones'],
    instrucoes: [
      'Zigue-zague básico entre cones',
      'Crossover em cada cone',
      'Between the legs variations',
      'Adicione defensor ativo'
    ]
  },
  {
    id: 'shell-defense-variations',
    nome: 'Shell Defense Variations',
    esporte: 'Basquetebol',
    descricao: '4 jogadores (base) → 5v5 com rotações táticas',
    duracao: '20-25 minutos',
    dificuldade: 'Avançado',
    objetivos: ['Defesa posicional', 'Comunicação', 'Rotações'],
    equipamentos: ['Bolas de basquete', 'Coletes'],
    instrucoes: [
      'Formação defensiva em shell',
      'Passe da bola ativa rotações',
      'Comunicação constante',
      'Progressão para 5v5'
    ]
  },
  {
    id: 'pick-and-roll-reads',
    nome: 'Pick-and-Roll Reads',
    esporte: 'Basquetebol',
    descricao: 'Treino de bloqueio direto para armador e pivô',
    duracao: '20 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Leitura de jogo', 'Execução de pick and roll'],
    equipamentos: ['Bolas de basquete', 'Cones'],
    instrucoes: [
      'Armador lê defesa após o bloqueio',
      'Pivô executa roll ou pop',
      'Diferentes tipos de defesa',
      'Timing entre armador e pivô'
    ]
  },
  {
    id: 'closeout-defense',
    nome: 'Closeout Defense',
    esporte: 'Basquetebol',
    descricao: 'Reação rápida para defender arremessadores',
    duracao: '12-15 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Defesa de perímetro', 'Reação', 'Posicionamento'],
    equipamentos: ['Bolas de basquete', 'Cones'],
    instrucoes: [
      'Defensor inicia distante',
      'Atacante recebe passe',
      'Closeout controlado e equilibrado',
      'Influenciar lado mais fraco'
    ]
  },
  {
    id: 'box-out-rebounding',
    nome: 'Box-Out & Rebounding',
    esporte: 'Basquetebol',
    descricao: 'Técnica de bloqueio + salto com disputa ativa',
    duracao: '15 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Rebote', 'Posicionamento', 'Força física'],
    equipamentos: ['Bolas de basquete'],
    instrucoes: [
      'Arremesso pelo treinador',
      'Jogadores fazem box-out',
      'Disputa ativa pelo rebote',
      'Proteção da bola após rebote'
    ]
  },
  {
    id: '3-point-shooting-circuit',
    nome: '3-Point Shooting Circuit',
    esporte: 'Basquetebol',
    descricao: 'Arremessos em série de 5 pontos estratégicos',
    duracao: '15-20 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Arremesso de 3 pontos', 'Resistência'],
    equipamentos: ['Bolas de basquete', 'Cones'],
    instrucoes: [
      '5 posições ao redor da linha de 3',
      '10 arremessos por posição',
      'Movimento rápido entre posições',
      'Foco na mecânica mesmo cansado'
    ]
  },
  {
    id: 'full-court-press-break',
    nome: 'Full-Court Press Break',
    esporte: 'Basquetebol',
    descricao: 'Quebra de pressão com passes longos',
    duracao: '15-20 minutos',
    dificuldade: 'Avançado',
    objetivos: ['Quebra de pressão', 'Passes precisos', 'Tomada de decisão'],
    equipamentos: ['Bolas de basquete', 'Coletes'],
    instrucoes: [
      'Defesa aplica pressão total',
      'Ataque trabalha saída',
      'Passes rápidos e precisos',
      'Procurar homem livre'
    ]
  },
  {
    id: 'fast-break-transition',
    nome: 'Fast Break Transition',
    esporte: 'Basquetebol',
    descricao: '3v2 ou 4v3 para contra-ataque',
    duracao: '15 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Transição ofensiva', 'Finalização rápida'],
    equipamentos: ['Bolas de basquete', 'Cones'],
    instrucoes: [
      'Ataque com vantagem numérica',
      'Ocupar raias corretas',
      'Finalização em até 3 passes',
      'Defesa com posicionamento correto'
    ]
  },
  {
    id: 'passing-under-pressure',
    nome: 'Passing Under Pressure',
    esporte: 'Basquetebol',
    descricao: 'Rondos 4x1 em espaço reduzido',
    duracao: '12-15 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Passes sob pressão', 'Tomada de decisão rápida'],
    equipamentos: ['Bolas de basquete', 'Cones'],
    instrucoes: [
      '4 jogadores em quadrado',
      '1 defensor no meio',
      'Espaço limitado',
      'Passes rápidos e precisos'
    ]
  },
  {
    id: 'agility-ladder-defense',
    nome: 'Agility Ladder Defense',
    esporte: 'Basquetebol',
    descricao: 'Movimentos laterais rápidos com resposta visual',
    duracao: '10-12 minutos',
    dificuldade: 'Iniciante',
    objetivos: ['Agilidade defensiva', 'Movimentos laterais'],
    equipamentos: ['Escada de agilidade', 'Cones'],
    instrucoes: [
      'Movimentos laterais na escada',
      'Resposta a sinais visuais',
      'Manter stance defensivo',
      'Velocidade com controle'
    ]
  },
  {
    id: 'injury-prevention-basquete',
    nome: 'Injury Prevention Basquete',
    esporte: 'Basquetebol',
    descricao: 'Saltos pliométricos controlados + fortalecimento de tornozelos',
    duracao: '15 minutos',
    dificuldade: 'Iniciante',
    objetivos: ['Prevenção de lesões', 'Fortalecimento'],
    equipamentos: ['Cones', 'Elásticos'],
    instrucoes: [
      'Saltos bilaterais e unilaterais',
      'Aterrissagens controladas',
      'Fortalecimento com elásticos',
      'Exercícios proprioceptivos'
    ]
  },
  {
    id: 'tactical-set-play',
    nome: 'Tactical Set Play',
    esporte: 'Basquetebol',
    descricao: 'Execução de jogadas ensaiadas (ex: "Flex Cut")',
    duracao: '15-20 minutos',
    dificuldade: 'Avançado',
    objetivos: ['Execução tática', 'Timing', 'Movimento sem bola'],
    equipamentos: ['Bolas de basquete', 'Cones'],
    instrucoes: [
      'Ensaiar jogada lentamente',
      'Aumentar velocidade gradualmente',
      'Executar contra defesa passiva',
      'Testar contra defesa ativa'
    ]
  },
  {
    id: 'free-throw-fatigue',
    nome: 'Free Throw Fatigue',
    esporte: 'Basquetebol',
    descricao: 'Arremessos após sprints para simular final de jogo',
    duracao: '10-15 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Arremesso sob fadiga', 'Pressão psicológica'],
    equipamentos: ['Bolas de basquete'],
    instrucoes: [
      'Sprint de linha a linha',
      'Imediatamente para linha de lance livre',
      '2 tentativas como no jogo',
      'Simular situação de pressão'
    ]
  },
  {
    id: 'vision-drills',
    nome: 'Vision Drills',
    esporte: 'Basquetebol',
    descricao: 'Passe de olhos vendados para desenvolver percepção',
    duracao: '10 minutos',
    dificuldade: 'Avançado',
    objetivos: ['Visão periférica', 'Consciência espacial'],
    equipamentos: ['Bolas de basquete', 'Vendas'],
    instrucoes: [
      'Jogador vendado no meio',
      'Outros jogadores se movem ao redor',
      'Passe baseado em comunicação',
      'Desenvolve outros sentidos'
    ]
  },

  // CHEERLEADING (17 drills)
  {
    id: 'stunt-progressions',
    nome: 'Stunt Progressions',
    esporte: 'Cheerleading',
    descricao: 'Thigh stand → elevator → extension',
    duracao: '20-30 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Progressão técnica', 'Força', 'Equilíbrio'],
    equipamentos: ['Colchonetes de segurança'],
    instrucoes: [
      'Começar com thigh stand básico',
      'Progressão para elevator',
      'Finalizar com extension completa',
      'Spotters sempre presentes'
    ]
  },
  {
    id: 'tumbling-safety-drills',
    nome: 'Tumbling Safety Drills',
    esporte: 'Cheerleading',
    descricao: 'Rolamentos → estrelas → flic-flac com spotter',
    duracao: '25-30 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Progressão acrobática', 'Segurança'],
    equipamentos: ['Colchonetes', 'Trampolim'],
    instrucoes: [
      'Rolamentos para frente e trás',
      'Estrelas perfeitas',
      'Round-off preparation',
      'Back handspring com auxílio'
    ]
  },
  {
    id: 'jump-technique',
    nome: 'Jump Technique',
    esporte: 'Cheerleading',
    descricao: 'Toe touch → pike → hurdler com correção de braços',
    duracao: '15-20 minutos',
    dificuldade: 'Iniciante',
    objetivos: ['Técnica de saltos', 'Flexibilidade', 'Sincronia'],
    equipamentos: [],
    instrucoes: [
      'Aproche correto para cada salto',
      'Posição dos braços específica',
      'Altura e abertura máximas',
      'Aterrissagem controlada'
    ]
  },
  {
    id: 'pyramid-building',
    nome: 'Pyramid Building',
    esporte: 'Cheerleading',
    descricao: 'Pirâmides de 2 níveis → 3 níveis com transições',
    duracao: '25-35 minutos',
    dificuldade: 'Avançado',
    objetivos: ['Trabalho em equipe', 'Força', 'Coordenação'],
    equipamentos: ['Colchonetes de segurança'],
    instrucoes: [
      'Base sólida no nível inferior',
      'Comunicação constante',
      'Transições suaves',
      'Desmonte seguro'
    ]
  },
  {
    id: 'motion-sharpness',
    nome: 'Motion Sharpness',
    esporte: 'Cheerleading',
    descricao: 'Sincronização em câmera lenta → velocidade real',
    duracao: '15-20 minutos',
    dificuldade: 'Iniciante',
    objetivos: ['Sincronização', 'Precisão', 'Sharp motions'],
    equipamentos: ['Espelho'],
    instrucoes: [
      'Executar movimentos lentamente',
      'Todos em perfeita sincronia',
      'Aumentar velocidade gradualmente',
      'Manter precisão em velocidade real'
    ]
  },
  {
    id: 'basket-toss-drills',
    nome: 'Basket Toss Drills',
    esporte: 'Cheerleading',
    descricao: 'Lançamentos baixos → altos com aterrissagem controlada',
    duracao: '20-25 minutos',
    dificuldade: 'Avançado',
    objetivos: ['Coordenação em grupo', 'Timing', 'Segurança'],
    equipamentos: ['Colchonetes grossos'],
    instrucoes: [
      'Começar com tosses baixos',
      'Sincronização perfeita das bases',
      'Flyer mantém posição',
      'Aterrissagem em cradle'
    ]
  },
  {
    id: 'flyer-flexibility',
    nome: 'Flyer Flexibility',
    esporte: 'Cheerleading',
    descricao: 'Alongamento ativo em split aéreo',
    duracao: '15-20 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Flexibilidade específica', 'Equilíbrio aéreo'],
    equipamentos: ['Colchonetes'],
    instrucoes: [
      'Splits em diferentes direções',
      'Manter equilíbrio sem apoio',
      'Alongamento ativo',
      'Respiração controlada'
    ]
  },
  {
    id: 'base-strength',
    nome: 'Base Strength',
    esporte: 'Cheerleading',
    descricao: 'Agachamentos com peso do flyer',
    duracao: '15-20 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Força específica', 'Resistência'],
    equipamentos: ['Pesos', 'Banco'],
    instrucoes: [
      'Agachamentos com peso equivalente',
      'Exercícios de pressing',
      'Core strengthening',
      'Trabalho de grip'
    ]
  },
  {
    id: 'spotting-techniques',
    nome: 'Spotting Techniques',
    esporte: 'Cheerleading',
    descricao: 'Posicionamento para quedas (cradle drills)',
    duracao: '20 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Segurança', 'Técnica de catch'],
    equipamentos: ['Colchonetes'],
    instrucoes: [
      'Posicionamento correto do spotter',
      'Timing para catch',
      'Absorção do impacto',
      'Comunicação durante catch'
    ]
  },
  {
    id: 'endurance-circuit',
    nome: 'Endurance Circuit',
    esporte: 'Cheerleading',
    descricao: 'Rotina completa + 30s de saltos contínuos',
    duracao: '20-25 minutos',
    dificuldade: 'Avançado',
    objetivos: ['Resistência específica', 'Manutenção da qualidade'],
    equipamentos: [],
    instrucoes: [
      'Executar rotina completa',
      '30 segundos de toe touches',
      'Manter energia e sincronia',
      'Repetir circuito 3-4 vezes'
    ]
  },
  {
    id: 'voice-projection',
    nome: 'Voice Projection',
    esporte: 'Cheerleading',
    descricao: 'Cânticos com ruído branco de fundo',
    duracao: '10-15 minutos',
    dificuldade: 'Iniciante',
    objetivos: ['Projeção vocal', 'Comunicação'],
    equipamentos: ['Sistema de som'],
    instrucoes: [
      'Praticar cheers com música alta',
      'Projeção sem forçar a voz',
      'Articulação clara',
      'Sincronia vocal'
    ]
  },
  {
    id: 'injury-prevention-cheer',
    nome: 'Injury Prevention Cheer',
    esporte: 'Cheerleading',
    descricao: 'Treino de quedas com colchões',
    duracao: '15 minutos',
    dificuldade: 'Iniciante',
    objetivos: ['Prevenção de lesões', 'Técnica de queda'],
    equipamentos: ['Colchões grossos'],
    instrucoes: [
      'Técnicas de rolar ao cair',
      'Proteção de cabeça',
      'Quedas controladas',
      'Reações reflexas'
    ]
  },
  {
    id: 'coed-partner-stunts',
    nome: 'Coed Partner Stunts',
    esporte: 'Cheerleading',
    descricao: 'Adaptações para diferenças de altura/peso',
    duracao: '25-30 minutos',
    dificuldade: 'Avançado',
    objetivos: ['Stunts de parceria', 'Adaptação'],
    equipamentos: ['Colchonetes'],
    instrucoes: [
      'Ajustar para diferenças físicas',
      'Comunicação entre parceiros',
      'Técnicas específicas coed',
      'Progressão cuidadosa'
    ]
  },
  {
    id: 'dance-precision',
    nome: 'Dance Precision',
    esporte: 'Cheerleading',
    descricao: 'Coreografia marcada por sinais visuais',
    duracao: '20 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Precisão coreográfica', 'Sincronia'],
    equipamentos: ['Espelho', 'Sistema de som'],
    instrucoes: [
      'Marcar cada tempo musical',
      'Movimentos sharp e precisos',
      'Expressão facial',
      'Energia constante'
    ]
  },
  {
    id: 'tumbling-on-mats',
    nome: 'Tumbling on Mats',
    esporte: 'Cheerleading',
    descricao: 'Série de acrobacias em colchonetes',
    duracao: '20-25 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Progressão acrobática', 'Segurança'],
    equipamentos: ['Colchonetes de tumbling'],
    instrucoes: [
      'Aquecimento específico',
      'Progressão de habilidades',
      'Repetição para muscle memory',
      'Cool-down adequado'
    ]
  },
  {
    id: 'competition-simulation',
    nome: 'Competition Simulation',
    esporte: 'Cheerleading',
    descricao: 'Execução sob pressão de tempo',
    duracao: '15-20 minutos',
    dificuldade: 'Avançado',
    objetivos: ['Preparação mental', 'Execução sob pressão'],
    equipamentos: ['Cronômetro', 'Juízes simulados'],
    instrucoes: [
      'Rotina com tempo cronometrado',
      'Simular ambiente de competição',
      'Manter qualidade sob pressão',
      'Feedback imediato'
    ]
  },
  {
    id: 'recovery-cheer',
    nome: 'Recovery Cheer',
    esporte: 'Cheerleading',
    descricao: 'Liberação miofascial para ombros e costas',
    duracao: '15-20 minutos',
    dificuldade: 'Iniciante',
    objetivos: ['Recuperação', 'Prevenção de lesões'],
    equipamentos: ['Rolo de liberação', 'Bolas de massagem'],
    instrucoes: [
      'Foco em ombros e costas',
      'Liberação de pontos de tensão',
      'Alongamento estático',
      'Respiração profunda'
    ]
  },

  // NATAÇÃO (16 drills)
  {
    id: 'kickboard-progressions',
    nome: 'Kickboard Progressions',
    esporte: 'Natação',
    descricao: 'Pernada crawl → borboleta com snorkel',
    duracao: '15-20 minutos',
    dificuldade: 'Iniciante',
    objetivos: ['Técnica de pernada', 'Força de pernas'],
    equipamentos: ['Prancha', 'Snorkel'],
    instrucoes: [
      'Pernada de crawl com prancha',
      'Manter quadris altos',
      'Progressão para borboleta',
      'Usar snorkel para respiração'
    ]
  },
  {
    id: 'pull-buoy-sighting',
    nome: 'Pull Buoy Sighting',
    esporte: 'Natação',
    descricao: 'Braçada com elevação para águas abertas',
    duracao: '20-25 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Técnica de braçada', 'Sighting para águas abertas'],
    equipamentos: ['Pull buoy'],
    instrucoes: [
      'Braçada com pull buoy',
      'Elevações periódicas da cabeça',
      'Manter ritmo de braçada',
      'Simular condições de águas abertas'
    ]
  },
  {
    id: 'flip-turn-efficiency',
    nome: 'Flip Turn Efficiency',
    esporte: 'Natação',
    descricao: 'Viradas na parede com cronômetro',
    duracao: '15 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Técnica de virada', 'Velocidade'],
    equipamentos: ['Cronômetro'],
    instrucoes: [
      'Aproximação controlada à parede',
      'Flip turn explosivo',
      'Saída submersa otimizada',
      'Cronometrar tempo de virada'
    ]
  },
  {
    id: 'bilateral-breathing',
    nome: 'Bilateral Breathing',
    esporte: 'Natação',
    descricao: '3 braçadas → 5 braçadas → 7 braçadas',
    duracao: '20 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Controle respiratório', 'Simetria'],
    equipamentos: [],
    instrucoes: [
      'Respiração a cada 3 braçadas',
      'Progressão para 5 braçadas',
      'Finalizar com 7 braçadas',
      'Manter ritmo constante'
    ]
  },
  {
    id: 'underwater-dolphin-kicking',
    nome: 'Underwater Dolphin Kicking',
    esporte: 'Natação',
    descricao: 'Ondulação submersa com nadadeiras',
    duracao: '15 minutos',
    dificuldade: 'Avançado',
    objetivos: ['Técnica ondular', 'Capacidade pulmonar'],
    equipamentos: ['Nadadeiras'],
    instrucoes: [
      'Ondulação corpo inteiro',
      'Máxima distância submersa',
      'Ritmo controlado',
      'Usar nadadeiras para potência'
    ]
  },
  {
    id: 'catch-up-drill',
    nome: 'Catch-Up Drill',
    esporte: 'Natação',
    descricao: 'Braçada alternada com pausa frontal',
    duracao: '15-20 minutos',
    dificuldade: 'Iniciante',
    objetivos: ['Técnica de braçada', 'Coordenação'],
    equipamentos: [],
    instrucoes: [
      'Uma braçada por vez',
      'Aguardar braço à frente',
      'Foco na pegada da água',
      'Extensão completa'
    ]
  },
  {
    id: 'fist-swimming',
    nome: 'Fist Swimming',
    esporte: 'Natação',
    descricao: 'Crawl com mãos fechadas para sensibilidade',
    duracao: '10-15 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Sensibilidade da água', 'Técnica de braçada'],
    equipamentos: [],
    instrucoes: [
      'Nadar com punhos fechados',
      'Focar no antebraço',
      'Alternар com mãos abertas',
      'Sentir diferença na pegada'
    ]
  },
  {
    id: 'open-water-navigation',
    nome: 'Open Water Navigation',
    esporte: 'Natação',
    descricao: 'Nado com elevações de cabeça programadas',
    duracao: '25-30 minutos',
    dificuldade: 'Avançado',
    objetivos: ['Navegação', 'Orientação em águas abertas'],
    equipamentos: ['Boias de referência'],
    instrucoes: [
      'Sighting a cada 6-8 braçadas',
      'Manter curso reto',
      'Elevação mínima da cabeça',
      'Adaptação às condições'
    ]
  },
  {
    id: 'medley-transitions-natacao',
    nome: 'Medley Transitions',
    esporte: 'Natação',
    descricao: 'Mudança rápida entre estilos',
    duracao: '20-25 minutos',
    dificuldade: 'Avançado',
    objetivos: ['Transições eficientes', 'Adaptação'],
    equipamentos: [],
    instrucoes: [
      'Borboleta → costas → peito → livre',
      'Viradas específicas de cada transição',
      'Manter ritmo alto',
      'Técnica correta em cada estilo'
    ]
  },
  {
    id: 'resistance-parachute',
    nome: 'Resistance Parachute',
    esporte: 'Natação',
    descricao: 'Nado com arrasto para força',
    duracao: '15-20 minutos',
    dificuldade: 'Avançado',
    objetivos: ['Força específica', 'Potência'],
    equipamentos: ['Paraquedas de arrasto'],
    instrucoes: [
      'Prender paraquedas na cintura',
      'Manter técnica contra resistência',
      'Sprints curtos e intensos',
      'Recuperação adequada'
    ]
  },
  {
    id: 'starts-reaction',
    nome: 'Starts Reaction',
    esporte: 'Natação',
    descricao: 'Saída de bloco com sinal sonoro',
    duracao: '15 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Tempo de reação', 'Técnica de saída'],
    equipamentos: ['Blocos de partida', 'Cronômetro com sinal'],
    instrucoes: [
      'Posicionamento correto no bloco',
      'Reação rápida ao sinal',
      'Entrada limpa na água',
      'Transição para nado'
    ]
  },
  {
    id: 'hypoxic-sets',
    nome: 'Hypoxic Sets',
    esporte: 'Natação',
    descricao: 'Séries com respiração limitada',
    duracao: '15-20 minutos',
    dificuldade: 'Avançado',
    objetivos: ['Capacidade anaeróbica', 'Controle respiratório'],
    equipamentos: [],
    instrucoes: [
      'Reduzir frequência respiratória',
      'Manter velocidade alta',
      'Progressão gradual',
      'Monitorar sinais de fadiga'
    ]
  },
  {
    id: 'pacing-drills-natacao',
    nome: 'Pacing Drills',
    esporte: 'Natação',
    descricao: '100m com divisão de tempos controlada',
    duracao: '20-25 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Controle de ritmo', 'Estratégia de prova'],
    equipamentos: ['Cronômetro', 'Pacer clock'],
    instrucoes: [
      'Dividir 100m em 4x25m',
      'Tempo específico para cada 25m',
      'Negative split progression',
      'Manter consistência'
    ]
  },
  {
    id: 'sculling-drills',
    nome: 'Sculling Drills',
    esporte: 'Natação',
    descricao: 'Movimentos de mão para sustentação',
    duracao: '10-15 minutos',
    dificuldade: 'Iniciante',
    objetivos: ['Sensibilidade da água', 'Sustentação'],
    equipamentos: [],
    instrucoes: [
      'Movimentos em formato de 8',
      'Pressão constante na água',
      'Diferentes posições',
      'Manter posição corporal'
    ]
  },
  {
    id: 'shoulder-prehab',
    nome: 'Shoulder Prehab',
    esporte: 'Natação',
    descricao: 'Rotadores com elásticos',
    duracao: '10-15 minutos',
    dificuldade: 'Iniciante',
    objetivos: ['Prevenção de lesões', 'Fortalecimento'],
    equipamentos: ['Elásticos de resistência'],
    instrucoes: [
      'Rotação externa com elástico',
      'Movimentos lentos e controlados',
      'Fortalecimento de rotadores',
      '15-20 repetições por exercício'
    ]
  },
  {
    id: 'cold-water-adaptation',
    nome: 'Cold Water Adaptation',
    esporte: 'Natação',
    descricao: 'Nado em temperatura baixa controlada',
    duracao: '15-25 minutos',
    dificuldade: 'Avançado',
    objetivos: ['Adaptação térmica', 'Resistência'],
    equipamentos: ['Termômetro', 'Roupa térmica (opcional)'],
    instrucoes: [
      'Entrada gradual na água fria',
      'Manter técnica mesmo com frio',
      'Monitorar temperatura corporal',
      'Aquecimento pós-treino'
    ]
  },

  // FUTEBOL AMERICANO (18 drills)
  {
    id: 'tackling-technique',
    nome: 'Tackling Technique',
    esporte: 'Futebol Americano',
    descricao: 'Forma correta de ombro + cabeça elevada',
    duracao: '15-20 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Técnica de tackle', 'Segurança'],
    equipamentos: ['Dummy de tackle', 'Capacetes'],
    instrucoes: [
      'Aproximação baixa e controlada',
      'Ombro no alvo, cabeça de lado',
      'Wrap up com os braços',
      'Drive através do contato'
    ]
  },
  {
    id: 'route-tree-mastery',
    nome: 'Route Tree Mastery',
    esporte: 'Futebol Americano',
    descricao: 'Slant → post → corner com defensor',
    duracao: '20-25 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Precisão de rotas', 'Separação do defensor'],
    equipamentos: ['Cones', 'Bolas'],
    instrucoes: [
      'Executar cada rota com precisão',
      'Mudanças de direção explosivas',
      'Timing com quarterback',
      'Release do line of scrimmage'
    ]
  },
  {
    id: 'qb-progressions',
    nome: 'QB Progressions',
    esporte: 'Futebol Americano',
    descricao: 'Leitura rápida de cobertura → lançamento em janela',
    duracao: '20-25 minutos',
    dificuldade: 'Avançado',
    objetivos: ['Leitura de defesa', 'Tomada de decisão'],
    equipamentos: ['Bolas', 'Cones', 'Coletes'],
    instrucoes: [
      'Ler cobertura pré-snap',
      'Progressão através dos receivers',
      'Lançamento em janelas pequenas',
      'Timing e antecipação'
    ]
  },
  {
    id: 'o-line-combo-blocks',
    nome: 'O-Line Combo Blocks',
    esporte: 'Futebol Americano',
    descricao: 'Bloqueios duplos em triânsulo',
    duracao: '15-20 minutos',
    dificuldade: 'Avançado',
    objetivos: ['Coordenação de linha', 'Técnica de bloqueio'],
    equipamentos: ['Dummies de bloqueio'],
    instrucoes: [
      'Coordenação entre linemen adjacentes',
      'Double team no primeiro nível',
      'Transição para segundo nível',
      'Comunicação constante'
    ]
  },
  {
    id: 'ball-security-circuit',
    nome: 'Ball Security Circuit',
    esporte: 'Futebol Americano',
    descricao: 'Proteção contra strips + fumbles',
    duracao: '15 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Proteção da bola', 'Prevenção de fumbles'],
    equipamentos: ['Bolas', 'Faixas de strip'],
    instrucoes: [
      'High and tight carry',
      'Proteção em contato',
      'Exercícios de strip',
      'Recuperação de fumbles'
    ]
  },
  {
    id: 'man-coverage-drills',
    nome: 'Man Coverage Drills',
    esporte: 'Futebol Americano',
    descricao: 'Defesa aderente com técnica de espelho',
    duracao: '15-20 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Cobertura individual', 'Técnica defensiva'],
    equipamentos: ['Cones', 'Coletes'],
    instrucoes: [
      'Mirror technique do receiver',
      'Manter posição interna',
      'Hand fighting legal',
      'Quebra na bola'
    ]
  },
  {
    id: 'zone-defense-recognition',
    nome: 'Zone Defense Recognition',
    esporte: 'Futebol Americano',
    descricao: 'Leitura de QB pelos linebackers',
    duracao: '20 minutos',
    dificuldade: 'Avançado',
    objetivos: ['Leitura de quarterback', 'Cobertura de zona'],
    equipamentos: ['Bolas', 'Cones'],
    instrucoes: [
      'Ler olhos do quarterback',
      'Cobertura de zona designada',
      'Comunicação com secundário',
      'Break on the ball'
    ]
  },
  {
    id: 'special-teams',
    nome: 'Special Teams',
    esporte: 'Futebol Americano',
    descricao: 'Bloqueio de field goal + retornos com obstáculos',
    duracao: '20-25 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Técnicas especiais', 'Coordenação de equipe'],
    equipamentos: ['Traves', 'Cones', 'Obstáculos'],
    instrucoes: [
      'Rush coordenado no field goal',
      'Técnicas de bloqueio de chute',
      'Retornos com blocagem',
      'Coverage de kickoff'
    ]
  },
  {
    id: 'option-read-simulation',
    nome: 'Option Read Simulation',
    esporte: 'Futebol Americano',
    descricao: 'QB/RB contra defesa reagente',
    duracao: '20 minutos',
    dificuldade: 'Avançado',
    objetivos: ['Leitura de option', 'Coordenação QB/RB'],
    equipamentos: ['Bolas', 'Cones'],
    instrucoes: [
      'Ler defensive end',
      'Decisão de keep ou pitch',
      'Timing entre QB e RB',
      'Execução sob pressão'
    ]
  },
  {
    id: 'pocket-movement',
    nome: 'Pocket Movement',
    esporte: 'Futebol Americano',
    descricao: 'QB escapando de pressão em espaço reduzido',
    duracao: '15 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Mobilidade no pocket', 'Pressure escape'],
    equipamentos: ['Cones', 'Bolas'],
    instrucoes: [
      'Movimento dentro do pocket',
      'Climb the pocket vs rush',
      'Escapar mantendo olhos downfield',
      'Lançamento em movimento'
    ]
  },
  {
    id: 'tight-end-release',
    nome: 'Tight End Release',
    esporte: 'Futebol Americano',
    descricao: 'Rompimento de bloqueio para recepção',
    duracao: '15-20 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Release techniques', 'Transição bloqueio-rota'],
    equipamentos: ['Bolas', 'Dummies'],
    instrucoes: [
      'Simular bloqueio inicial',
      'Release limpo do linebacker',
      'Transição rápida para rota',
      'Hands team para recepção'
    ]
  },
  {
    id: 'red-zone-efficiency',
    nome: 'Red Zone Efficiency',
    esporte: 'Futebol Americano',
    descricao: 'Jogadas em espaço compacto (10 jardas)',
    duracao: '20 minutos',
    dificuldade: 'Avançado',
    objetivos: ['Eficiência em red zone', 'Execução precisa'],
    equipamentos: ['Cones', 'Bolas', 'End zone'],
    instrucoes: [
      'Espaço limitado para rotas',
      'Precisão nos lançamentos',
      'Proteção de bola em goal line',
      'Fade routes e slants'
    ]
  },
  {
    id: 'two-minute-drill',
    nome: 'Two-Minute Drill',
    esporte: 'Futebol Americano',
    descricao: 'Contra-relógio sem huddle',
    duracao: '10-15 minutos',
    dificuldade: 'Avançado',
    objetivos: ['Administração do tempo', 'Execução sob pressão'],
    equipamentos: ['Cronômetro', 'Bolas'],
    instrucoes: [
      'No huddle offense',
      'Clock management',
      'Spike para parar relógio',
      'Timeout usage'
    ]
  },
  {
    id: 'injury-prevention-football',
    nome: 'Injury Prevention Football',
    esporte: 'Futebol Americano',
    descricao: 'Técnica de queda segura + fortalecimento de joelhos',
    duracao: '15 minutos',
    dificuldade: 'Iniciante',
    objetivos: ['Prevenção de lesões', 'Técnicas seguras'],
    equipamentos: ['Colchonetes'],
    instrucoes: [
      'Rolling techniques em tackles',
      'Aterrissagem segura',
      'Fortalecimento de joelhos',
      'Propriocepção'
    ]
  },
  {
    id: 'sled-drive',
    nome: 'Sled Drive',
    esporte: 'Futebol Americano',
    descricao: 'Blocos de explosão com trenó',
    duracao: '15 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Força explosiva', 'Técnica de bloqueio'],
    equipamentos: ['Trenó de bloqueio'],
    instrucoes: [
      'Posição baixa de saída',
      'Explosão dos quadris',
      'Drive com as pernas',
      'Manter contato baixo'
    ]
  },
  {
    id: 'db-ball-drills',
    nome: 'DB Ball Drills',
    esporte: 'Futebol Americano',
    descricao: 'Interceptações com salto vertical',
    duracao: '15 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Habilidades de interceptação', 'Ball skills'],
    equipamentos: ['Bolas', 'Escada'],
    instrucoes: [
      'High point da bola',
      'Hands team techniques',
      'Body positioning',
      'Secure catch e tuck'
    ]
  },
  {
    id: 'wildcat-formation',
    nome: 'Wildcat Formation',
    esporte: 'Futebol Americano',
    descricao: 'Treino de jogadas diretas com RB',
    duracao: '15-20 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Formação especial', 'Direct snap'],
    equipamentos: ['Bolas'],
    instrucoes: [
      'RB recebe snap direto',
      'Options de corrida',
      'Play action possibilities',
      'Blocking schemes'
    ]
  },
  {
    id: 'film-study-integration',
    nome: 'Film Study Integration',
    esporte: 'Futebol Americano',
    descricao: 'Correção de jogadas baseada em vídeo',
    duracao: '20-30 minutos',
    dificuldade: 'Avançado',
    objetivos: ['Análise tática', 'Correção técnica'],
    equipamentos: ['Video', 'Projetor'],
    instrucoes: [
      'Análise de film de jogos',
      'Identificar erros técnicos',
      'Correção no campo',
      'Application de adjustments'
    ]
  },

  // FUTEBOL DE CAMPO (17 drills)
  {
    id: 'passing-grids',
    nome: 'Passing Grids',
    esporte: 'Futebol de Campo',
    descricao: 'Quadrados de passe 2 toques → 1 toque sob pressão',
    duracao: '15-20 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Precisao de passe', 'Tomada de decisão rápida'],
    equipamentos: ['Cones', 'Bolas'],
    instrucoes: [
      'Formar quadrados de 10x10m',
      'Começar com 2 toques',
      'Progressao para 1 toque',
      'Adicionar pressao defensiva'
    ]
  },
  {
    id: 'shooting-angles',
    nome: 'Shooting Angles',
    esporte: 'Futebol de Campo',
    descricao: 'Finalizacao de 45° → frente do gol → contra-pé',
    duracao: '20 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Finalizacao', 'Precisao em diferentes angulos'],
    equipamentos: ['Bolas', 'Cones', 'Gol'],
    instrucoes: [
      'Finalizacao de 45 graus',
      'Variacao de angulos',
      'Uso do pé mais fraco',
      'Diferentes alturas de bola'
    ]
  },
  {
    id: '1v1-attacking',
    nome: '1v1 Attacking',
    esporte: 'Futebol de Campo',
    descricao: 'Dribles em cone → defensor ativo → finalizacao',
    duracao: '15-20 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Drible', 'Superacao individual'],
    equipamentos: ['Cones', 'Bolas', 'Mini-gols'],
    instrucoes: [
      'Drible ao redor de cones',
      'Enfrentar defensor ativo',
      'Variacao de fintas',
      'Finalizacao após superacao'
    ]
  },
  {
    id: 'crossing-variations',
    nome: 'Crossing Variations',
    esporte: 'Futebol de Campo',
    descricao: 'Cruzamento rasteiro → alto → "bola morta"',
    duracao: '20 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Tecnica de cruzamento', 'Precisao'],
    equipamentos: ['Bolas', 'Cones'],
    instrucoes: [
      'Cruzamentos rasteiros precisos',
      'Bolas altas na área',
      'Bolas morta em set pieces',
      'Timing com atacantes'
    ]
  },
  {
    id: 'positional-rondos',
    nome: 'Positional Rondos',
    esporte: 'Futebol de Campo',
    descricao: '6v2 em espaco delimitado com troca de posicoes',
    duracao: '20-25 minutos',
    dificuldade: 'Avançado',
    objetivos: ['Posse de bola', 'Posicionamento tatico'],
    equipamentos: ['Cones', 'Coletes', 'Bolas'],
    instrucoes: [
      '6 jogadores vs 2 defensores',
      'Espaco de 20x20m',
      'Troca de posicoes',
      'Manter posse sob pressao'
    ]
  },
  {
    id: 'set-pieces',
    nome: 'Set Pieces',
    esporte: 'Futebol de Campo',
    descricao: 'Escanteios curtos/longos + faltas com movimentos ensaiados',
    duracao: '25-30 minutos',
    dificuldade: 'Avançado',
    objetivos: ['Jogadas ensaiadas', 'Coordenação'],
    equipamentos: ['Bolas', 'Cones', 'Barreiras'],
    instrucoes: [
      'Escanteios com variacoes',
      'Faltas diretas e indiretas',
      'Movimentos sincronizados',
      'Marcacao e desmarcacao'
    ]
  },
  {
    id: 'high-press-system',
    nome: 'High Press System',
    esporte: 'Futebol de Campo',
    descricao: 'Pressao coletiva em 3 setores',
    duracao: '25-30 minutos',
    dificuldade: 'Avançado',
    objetivos: ['Pressao coordenada', 'Recuperacao de bola'],
    equipamentos: ['Coletes', 'Cones', 'Bolas'],
    instrucoes: [
      'Pressao imediata após perda',
      'Coordenacao entre linhas',
      'Fechamento de espacos',
      'Transicao rapida'
    ]
  },
  {
    id: 'gk-distribution',
    nome: 'GK Distribution',
    esporte: 'Futebol de Campo',
    descricao: 'Reposicao com as maos → pés → lancamentos longos',
    duracao: '20 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Distribuicao do goleiro', 'Iniciacao de jogadas'],
    equipamentos: ['Bolas', 'Cones'],
    instrucoes: [
      'Reposicao rapida com as maos',
      'Lancamentos com os pés',
      'Passes longos precisos',
      'Variacao de opcoes'
    ]
  },
  {
    id: 'switching-play-drills',
    nome: 'Switching Play Drills',
    esporte: 'Futebol de Campo',
    descricao: 'Troca de lado com passe longo preciso',
    duracao: '15-20 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Mudanca de frente', 'Passes longos'],
    equipamentos: ['Cones', 'Bolas'],
    instrucoes: [
      'Identificar lado sobrecarregado',
      'Passe longo para lado oposto',
      'Precisao nos lancamentos',
      'Velocidade na execucao'
    ]
  },
  {
    id: 'defensive-line-holding',
    nome: 'Defensive Line Holding',
    esporte: 'Futebol de Campo',
    descricao: 'Linha de 4 com treino de impedimento',
    duracao: '20 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Linha defensiva', 'Aplicacao do impedimento'],
    equipamentos: ['Cones', 'Coletes'],
    instrucoes: [
      'Manter linha de 4 alinhada',
      'Aplicar impedimento coordenado',
      'Comunicacao entre defensores',
      'Subir e descer juntos'
    ]
  },
  {
    id: 'counter-attack-speed',
    nome: 'Counter-Attack Speed',
    esporte: 'Futebol de Campo',
    descricao: 'Transicao defesa-ataque em 8 segundos',
    duracao: '15-20 minutos',
    dificuldade: 'Avançado',
    objetivos: ['Contra-ataque rapido', 'Finalizacao'],
    equipamentos: ['Cronometro', 'Bolas', 'Cones'],
    instrucoes: [
      'Recuperacao rapida da bola',
      'Transicao em maxismo 8 segundos',
      'Passes verticais',
      'Finalizacao imediata'
    ]
  },
  {
    id: 'wing-play-overload',
    nome: 'Wing Play Overload',
    esporte: 'Futebol de Campo',
    descricao: 'Laterais + pontas em 2v1',
    duracao: '20 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Jogo pelas laterais', 'Superioridade numerica'],
    equipamentos: ['Cones', 'Bolas', 'Coletes'],
    instrucoes: [
      'Lateral sobe apoiando ponta',
      'Criar 2v1 na lateral',
      'Cruzamentos ou infiltracoes',
      'Alternancia entre os lados'
    ]
  },
  {
    id: 'injury-prevention-futebol',
    nome: 'Injury Prevention Futebol',
    esporte: 'Futebol de Campo',
    descricao: 'Agilidade com escada + fortalecimento de isquiotibiais',
    duracao: '15 minutos',
    dificuldade: 'Iniciante',
    objetivos: ['Prevencao de lesoes', 'Fortalecimento'],
    equipamentos: ['Escada de agilidade', 'Elasticos'],
    instrucoes: [
      'Exercicios na escada de agilidade',
      'Fortalecimento especifico',
      'Alongamentos dinamicos',
      'Propriocepcao'
    ]
  },
  {
    id: 'tactical-periodization',
    nome: 'Tactical Periodization',
    esporte: 'Futebol de Campo',
    descricao: 'Drills especificos por fase do jogo',
    duracao: '30-40 minutos',
    dificuldade: 'Avançado',
    objetivos: ['Periodizacao tatica', 'Especificidade'],
    equipamentos: ['Cones', 'Coletes', 'Bolas'],
    instrucoes: [
      'Exercicios por fases do jogo',
      'Organizacao ofensiva e defensiva',
      'Transicoes especificas',
      'Situacoes reais de jogo'
    ]
  },
  {
    id: 'aerobic-endurance',
    nome: 'Aerobic Endurance',
    esporte: 'Futebol de Campo',
    descricao: 'Posse de bola com 2 toques em campo amplo',
    duracao: '25-30 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Resistencia aerobica', 'Posse de bola'],
    equipamentos: ['Cones', 'Bolas', 'Coletes'],
    instrucoes: [
      'Campo amplo 40x30m',
      'Maximo 2 toques na bola',
      'Intensidade controlada',
      'Manter posse por tempo prolongado'
    ]
  },
  {
    id: 'heading-technique',
    nome: 'Heading Technique',
    esporte: 'Futebol de Campo',
    descricao: 'Cabeceio defensivo (altura) → ofensivo (canto)',
    duracao: '15-20 minutos',
    dificuldade: 'Intermediário',
    objetivos: ['Tecnica de cabeca', 'Jogadas aereas'],
    equipamentos: ['Bolas'],
    instrucoes: [
      'Cabeceios defensivos para longe',
      'Cabeceios ofensivos nos cantos',
      'Tecnica de impulso',
      'Timing e posicionamento'
    ]
  },
  {
    id: 'cool-down-futebol',
    nome: 'Cool-Down Futebol',
    esporte: 'Futebol de Campo',
    descricao: 'Alongamento dinamico em grupo',
    duracao: '15 minutos',
    dificuldade: 'Iniciante',
    objetivos: ['Recuperacao', 'Flexibilidade'],
    equipamentos: [],
    instrucoes: [
      'Corrida leve de desaceleracao',
      'Alongamentos em grupo',
      'Foco em grupos musculares principais',
      'Respiracao profunda'
    ]
  }
];

export const getAllSports = (): string[] => {
  return [...new Set(sportsDatabase.map(drill => drill.esporte))];
};

export const getDrillsBySport = (sport: string): SportDrill[] => {
  return sportsDatabase.filter(drill => drill.esporte === sport);
};

export const getDrillById = (id: string): SportDrill | undefined => {
  return sportsDatabase.find(drill => drill.id === id);
};
