
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
  {
    id: 'saltito',
    nome: 'Saltito',
    categoria: 'Saltos',
    descricao: 'Pequenos saltos rápidos no lugar',
    equipamentos: [],
    dificuldade: 'Iniciante',
    musculos: ['Panturrilhas', 'Tibial Anterior'],
    instrucoes: [
      'Mantenha-se na ponta dos pés',
      'Execute saltos pequenos e rápidos',
      'Mantenha joelhos levemente flexionados',
      'Focalize na velocidade dos movimentos'
    ]
  },
  {
    id: 'agachamento-com-salto',
    nome: 'Agachamento com Salto',
    categoria: 'Saltos',
    descricao: 'Combinação de agachamento com salto explosivo',
    equipamentos: [],
    dificuldade: 'Intermediário',
    musculos: ['Quadríceps', 'Glúteos', 'Panturrilhas'],
    instrucoes: [
      'Desça em agachamento completo',
      'Salte explosivamente para cima',
      'Aterrisse suavemente em agachamento',
      'Repita o movimento fluidamente'
    ]
  },
  {
    id: 'afundo-com-salto',
    nome: 'Afundo com Salto',
    categoria: 'Saltos',
    descricao: 'Afundo alternando pernas com salto',
    equipamentos: [],
    dificuldade: 'Intermediário',
    musculos: ['Quadríceps', 'Glúteos', 'Panturrilhas'],
    instrucoes: [
      'Inicie em posição de afundo',
      'Salte trocando as pernas no ar',
      'Aterrisse em afundo com perna oposta',
      'Mantenha o tronco ereto'
    ]
  },
  {
    id: 'salto-ajoelhado',
    nome: 'Salto Ajoelhado',
    categoria: 'Saltos',
    descricao: 'Salto partindo da posição ajoelhada',
    equipamentos: ['Colchonete'],
    dificuldade: 'Avançado',
    musculos: ['Quadríceps', 'Glúteos', 'Core'],
    instrucoes: [
      'Inicie ajoelhado com ambos os joelhos',
      'Balance os braços para trás',
      'Salte explosivamente para ficar em pé',
      'Aterrisse em posição de agachamento'
    ]
  },
  {
    id: 'salto-sobre-caixa',
    nome: 'Salto Sobre a Caixa',
    categoria: 'Saltos',
    descricao: 'Salto por cima de uma caixa',
    equipamentos: ['Box/Caixa'],
    dificuldade: 'Intermediário',
    musculos: ['Quadríceps', 'Glúteos', 'Panturrilhas'],
    instrucoes: [
      'Posicione-se de frente para a caixa',  
      'Salte por cima da caixa',
      'Aterrisse do outro lado',
      'Vire-se e repita o movimento'
    ]
  },
  {
    id: 'salto-na-caixa',
    nome: 'Salto na Caixa',
    categoria: 'Saltos',
    descricao: 'Salto para cima de uma caixa',
    equipamentos: ['Box/Caixa'],
    dificuldade: 'Intermediário',
    musculos: ['Quadríceps', 'Glúteos', 'Panturrilhas'],
    instrucoes: [
      'Posicione-se de frente para a caixa',
      'Salte em cima da caixa',
      'Aterrisse com ambos os pés',
      'Desça controladamente'
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
    id: 'agachamento-frontal',
    nome: 'Agachamento Frontal',
    categoria: 'Agachamento',
    descricao: 'Agachamento com barra na frente do corpo',
    equipamentos: ['Barra'],
    dificuldade: 'Avançado',
    musculos: ['Quadríceps', 'Core', 'Deltoides Anterior'],
    instrucoes: [
      'Posicione a barra na frente dos ombros',
      'Mantenha cotovelos elevados',
      'Desça mantendo tronco ereto',
      'Suba controladamente'
    ]
  },
  {
    id: 'agachamento-sobre-pressao',
    nome: 'Agachamento Sobre Pressão',
    categoria: 'Agachamento',
    descricao: 'Agachamento com barra acima da cabeça',
    equipamentos: ['Barra'],
    dificuldade: 'Avançado',
    musculos: ['Quadríceps', 'Glúteos', 'Core', 'Ombros'],
    instrucoes: [
      'Mantenha a barra acima da cabeça',
      'Braços completamente estendidos',
      'Desça em agachamento',
      'Suba mantendo barra elevada'
    ]
  },
  {
    id: 'goblet-squat',
    nome: 'Goblet Squat',
    categoria: 'Agachamento',
    descricao: 'Agachamento segurando peso próximo ao peito',
    equipamentos: ['Kettlebell', 'Halter'],
    dificuldade: 'Iniciante',
    musculos: ['Quadríceps', 'Glúteos', 'Core'],
    instrucoes: [
      'Segure o peso próximo ao peito',
      'Pés afastados na largura dos ombros',
      'Desça em agachamento',
      'Mantenha o tronco ereto'
    ]
  },
  {
    id: 'thrusters',
    nome: 'Thrusters',
    categoria: 'Agachamento',
    descricao: 'Agachamento frontal combinado com desenvolvimento',
    equipamentos: ['Barra', 'Halteres'],
    dificuldade: 'Intermediário',
    musculos: ['Quadríceps', 'Glúteos', 'Ombros', 'Core'],
    instrucoes: [
      'Inicie com barra na posição frontal',
      'Desça em agachamento',
      'Suba e empurre a barra acima da cabeça',
      'Retorne à posição inicial'
    ]
  },
  {
    id: 'clusters',
    nome: 'Clusters',
    categoria: 'Agachamento',
    descricao: 'Clean seguido de thruster',
    equipamentos: ['Barra'],
    dificuldade: 'Avançado',
    musculos: ['Corpo inteiro'],
    instrucoes: [
      'Execute um clean trazendo barra aos ombros',
      'Realize um thruster',
      'Retorne a barra ao solo',
      'Repita o movimento'
    ]
  },
  {
    id: 'wall-ball',
    nome: 'Wall Ball',
    categoria: 'Agachamento',
    descricao: 'Agachamento com arremesso de medicine ball na parede',
    equipamentos: ['Medicine Ball', 'Parede'],
    dificuldade: 'Intermediário',
    musculos: ['Quadríceps', 'Glúteos', 'Ombros', 'Core'],
    instrucoes: [
      'Segure a medicine ball no peito',
      'Desça em agachamento',
      'Suba e arremesse a bola na parede',
      'Pegue a bola e repita'
    ]
  },
  {
    id: 'agachamento-sumo',
    nome: 'Agachamento Sumo',
    categoria: 'Agachamento',
    descricao: 'Agachamento com pés bem afastados',
    equipamentos: [],
    dificuldade: 'Iniciante',
    musculos: ['Quadríceps', 'Glúteos', 'Adutores'],
    instrucoes: [
      'Pés bem afastados, pontas voltadas para fora',
      'Desça flexionando quadris e joelhos',
      'Mantenha joelhos alinhados com os pés',
      'Suba contraindo glúteos'
    ]
  },
  {
    id: 'pistol',
    nome: 'Pistol',
    categoria: 'Agachamento',
    descricao: 'Agachamento unilateral completo',
    equipamentos: [],
    dificuldade: 'Avançado',
    musculos: ['Quadríceps', 'Glúteos', 'Core', 'Estabilizadores'],
    instrucoes: [
      'Apoie-se em uma perna',
      'Estenda a outra perna à frente',
      'Desça até sentar no calcanhar',
      'Suba mantendo perna estendida'
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
    id: 'rdl-unilateral',
    nome: 'RDL Unilateral',
    categoria: 'Levantamento Terra',
    descricao: 'RDL executado com uma perna',
    equipamentos: ['Halter', 'Kettlebell'],
    dificuldade: 'Avançado',
    musculos: ['Isquiotibiais', 'Glúteos', 'Core', 'Estabilizadores'],
    instrucoes: [
      'Apoie-se em uma perna',
      'Incline o tronco para frente',
      'Eleve a perna livre para trás',
      'Retorne à posição inicial'
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
  {
    id: 'levantamento-terra-ktb',
    nome: 'Levantamento Terra com Kettlebell',
    categoria: 'Levantamento Terra',
    descricao: 'Levantamento terra usando kettlebell',
    equipamentos: ['Kettlebell'],
    dificuldade: 'Iniciante',
    musculos: ['Quadríceps', 'Glúteos', 'Isquiotibiais', 'Core'],
    instrucoes: [
      'Posicione kettlebell entre os pés',
      'Agache e segure a alça',
      'Mantenha costas retas',
      'Levante estendendo quadris'
    ]
  },
  {
    id: 'levantamento-terra-sumo',
    nome: 'Levantamento Terra Sumo',
    categoria: 'Levantamento Terra',
    descricao: 'Levantamento terra com pés afastados',
    equipamentos: ['Barra'],
    dificuldade: 'Intermediário',
    musculos: ['Quadríceps', 'Glúteos', 'Adutores', 'Trapézio'],
    instrucoes: [
      'Pés bem afastados ao lado da barra',
      'Segure a barra com pegada estreita',
      'Mantenha tronco mais ereto',
      'Levante estendendo quadris e joelhos'
    ]
  },
  {
    id: 'agachamento-bugaro',
    nome: 'Agachamento Búlgaro',
    categoria: 'Levantamento Terra',
    descricao: 'Agachamento unilateral com pé elevado atrás',
    equipamentos: ['Banco'],
    dificuldade: 'Intermediário',
    musculos: ['Quadríceps', 'Glúteos', 'Estabilizadores'],
    instrucoes: [
      'Coloque um pé no banco atrás',
      'Desça flexionando a perna da frente',
      'Mantenha tronco ereto',
      'Suba usando a perna da frente'
    ]
  },
  {
    id: 'leg-press-45',
    nome: 'Leg Press 45°',
    categoria: 'Levantamento Terra',
    descricao: 'Exercício no aparelho leg press inclinado',
    equipamentos: ['Leg Press 45°'],
    dificuldade: 'Iniciante',
    musculos: ['Quadríceps', 'Glúteos'],
    instrucoes: [
      'Sente no aparelho com costas apoiadas',
      'Posicione pés na plataforma',
      'Desça controladamente',
      'Empurre a plataforma para cima'
    ]
  },
  {
    id: 'leg-press-90',
    nome: 'Leg Press 90°',
    categoria: 'Levantamento Terra',
    descricao: 'Exercício no aparelho leg press vertical',
    equipamentos: ['Leg Press 90°'],
    dificuldade: 'Iniciante',
    musculos: ['Quadríceps', 'Glúteos'],
    instrucoes: [
      'Deite no aparelho',
      'Posicione pés na plataforma',
      'Desça até 90 graus',
      'Empurre a plataforma para cima'
    ]
  },
  {
    id: 'elevacao-quadril',
    nome: 'Elevação do Quadril',
    categoria: 'Levantamento Terra',
    descricao: 'Exercício focado nos glúteos',
    equipamentos: ['Banco'],
    dificuldade: 'Iniciante',
    musculos: ['Glúteos', 'Isquiotibiais', 'Core'],
    instrucoes: [
      'Deite com ombros no banco',
      'Pés firmes no chão',
      'Eleve o quadril contraindo glúteos',
      'Desça controladamente'
    ]
  },
  {
    id: 'elevacao-quadril-unilateral',
    nome: 'Elevação Quadril Unilateral',
    categoria: 'Levantamento Terra',
    descricao: 'Elevação do quadril com uma perna',
    equipamentos: ['Banco'],
    dificuldade: 'Intermediário',
    musculos: ['Glúteos', 'Isquiotibiais', 'Core', 'Estabilizadores'],
    instrucoes: [
      'Deite com ombros no banco',
      'Apoie em um pé, eleve o outro',
      'Eleve o quadril com uma perna',
      'Desça controladamente'
    ]
  },
  {
    id: 'mesa-flexora',
    nome: 'Mesa Flexora',
    categoria: 'Levantamento Terra',
    descricao: 'Exercício para isquiotibiais no aparelho',
    equipamentos: ['Mesa Flexora'],
    dificuldade: 'Iniciante',
    musculos: ['Isquiotibiais'],
    instrucoes: [
      'Deite na mesa flexora',
      'Posicione tornozelos sob as almofadas',
      'Flexione joelhos trazendo calcanhares aos glúteos',
      'Retorne controladamente'
    ]
  },
  {
    id: 'cadeira-extensora',
    nome: 'Cadeira Extensora',
    categoria: 'Levantamento Terra',
    descricao: 'Exercício para quadríceps no aparelho',
    equipamentos: ['Cadeira Extensora'],
    dificuldade: 'Iniciante',
    musculos: ['Quadríceps'],
    instrucoes: [
      'Sente na cadeira extensora',
      'Posicione canelas sob as almofadas',
      'Estenda joelhos completamente',
      'Desça controladamente'
    ]
  },
  {
    id: 'adutora-abdutora',
    nome: 'Adutora/Abdutora',
    categoria: 'Levantamento Terra',
    descricao: 'Exercício para músculos internos e externos da coxa',
    equipamentos: ['Máquina Adutora/Abdutora'],
    dificuldade: 'Iniciante',
    musculos: ['Adutores', 'Abdutores'],
    instrucoes: [
      'Sente na máquina',
      'Para adutora: feche as pernas contra resistência',
      'Para abdutora: abra as pernas contra resistência',
      'Execute movimentos controlados'
    ]
  },
  {
    id: 'step-up',
    nome: 'Step Up',
    categoria: 'Levantamento Terra',
    descricao: 'Subida no banco ou caixa',
    equipamentos: ['Banco', 'Caixa'],
    dificuldade: 'Iniciante',
    musculos: ['Quadríceps', 'Glúteos', 'Panturrilhas'],
    instrucoes: [
      'Posicione-se de frente para o banco',
      'Suba colocando um pé completamente',
      'Eleve o corpo usando a perna de cima',
      'Desça controladamente'
    ]
  },
  {
    id: 'panturrilha-bloco',
    nome: 'Panturrilha no Bloco',
    categoria: 'Levantamento Terra',
    descricao: 'Exercício para panturrilhas em superfície elevada',
    equipamentos: ['Bloco', 'Step'],
    dificuldade: 'Iniciante',
    musculos: ['Panturrilhas'],
    instrucoes: [
      'Posicione-se no bloco apenas com as pontas dos pés',
      'Desça alongando as panturrilhas',
      'Suba na ponta dos pés contraindo',
      'Execute movimento completo'
    ]
  },
  {
    id: 'panturrilha-barra',
    nome: 'Panturrilha com Barra',
    categoria: 'Levantamento Terra',
    descricao: 'Exercício para panturrilhas com barra nas costas',
    equipamentos: ['Barra'],
    dificuldade: 'Intermediário',
    musculos: ['Panturrilhas'],
    instrucoes: [
      'Posicione barra nas costas',
      'Fique na ponta dos pés',
      'Desça controladamente',
      'Suba contraindo panturrilhas'
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
    id: 'supino-inclinado',
    nome: 'Supino Inclinado',
    categoria: 'Peito',
    descricao: 'Supino em banco inclinado para peitoral superior',
    equipamentos: ['Banco Inclinado', 'Barra'],
    dificuldade: 'Intermediário',
    musculos: ['Peitoral Superior', 'Tríceps', 'Deltoides Anterior'],
    instrucoes: [
      'Ajuste banco em 30-45 graus',
      'Segure a barra com pegada média',
      'Desça até o peito superior',
      'Empurre para cima controladamente'
    ]
  },
  {
    id: 'supino-declinado',
    nome: 'Supino Declinado',
    categoria: 'Peito',
    descricao: 'Supino em banco declinado para peitoral inferior',
    equipamentos: ['Banco Declinado', 'Barra'],
    dificuldade: 'Intermediário',
    musculos: ['Peitoral Inferior', 'Tríceps'],
    instrucoes: [
      'Deite no banco declinado',
      'Prenda os pés',
      'Desça a barra até o peito inferior',
      'Empurre para cima'
    ]
  },
  {
    id: 'supino-halter',
    nome: 'Supino com Halter',
    categoria: 'Peito',
    descricao: 'Supino usando halteres',
    equipamentos: ['Banco', 'Halteres'],
    dificuldade: 'Intermediário',
    musculos: ['Peitoral Maior', 'Tríceps', 'Deltoides Anterior'],
    instrucoes: [
      'Deite no banco com halter em cada mão',
      'Desça os halteres até o peito',
      'Empurre para cima juntando no alto',
      'Controle a descida'
    ]
  },
  {
    id: 'ring-dip',
    nome: 'Ring Dip',
    categoria: 'Peito',
    descricao: 'Mergulho nas argolas',
    equipamentos: ['Argolas'],
    dificuldade: 'Avançado',
    musculos: ['Peitoral', 'Tríceps', 'Core'],
    instrucoes: [
      'Segure as argolas com braços estendidos',
      'Desça flexionando os braços',
      'Mantenha corpo estável',
      'Suba até extensão completa'
    ]
  },
  {
    id: 'pushup-ring',
    nome: 'Pushup Ring',
    categoria: 'Peito',
    descricao: 'Flexão de braço nas argolas',
    equipamentos: ['Argolas'],
    dificuldade: 'Avançado',
    musculos: ['Peitoral', 'Tríceps', 'Core', 'Estabilizadores'],
    instrucoes: [
      'Posicione-se em prancha com mãos nas argolas',
      'Desça flexionando os braços',
      'Mantenha argolas estáveis',
      'Suba até extensão completa'
    ]
  },
  {
    id: 'fly',
    nome: 'Fly',
    categoria: 'Peito',
    descricao: 'Abertura para peitoral',
    equipamentos: ['Halteres', 'Banco'],
    dificuldade: 'Intermediário',
    musculos: ['Peitoral Maior'],
    instrucoes: [
      'Deite no banco com halteres',
      'Abra os braços em arco',
      'Desça até sentir alongamento',
      'Volte juntando no alto'
    ]
  },
  {
    id: 'crucifixo-halter',
    nome: 'Crucifixo Halter/Crossover',
    categoria: 'Peito',
    descricao: 'Exercício de isolamento para peitoral',
    equipamentos: ['Halteres', 'Cabos'],
    dificuldade: 'Intermediário',
    musculos: ['Peitoral Maior'],
    instrucoes: [
      'Execute movimento de abraço',
      'Mantenha ligeira flexão nos cotovelos',
      'Controle o alongamento',
      'Contraia peitoral na subida'
    ]
  },
  {
    id: 'paralela',
    nome: 'Paralela',
    categoria: 'Peito',
    descricao: 'Mergulho nas barras paralelas',
    equipamentos: ['Barras Paralelas'],
    dificuldade: 'Intermediário',
    musculos: ['Peitoral Inferior', 'Tríceps'],
    instrucoes: [
      'Segure as barras com braços estendidos',
      'Desça inclinando corpo para frente',
      'Vá até sentir alongamento no peito',
      'Suba controladamente'
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
  {
    id: 'pull-over',
    nome: 'Pull Over',
    categoria: 'Peito',
    descricao: 'Exercício para peitoral e serrátil',
    equipamentos: ['Halter', 'Banco'],
    dificuldade: 'Intermediário',
    musculos: ['Peitoral', 'Serrátil', 'Latíssimo'],
    instrucoes: [
      'Deite transversalmente no banco',
      'Segure halter com ambas as mãos',
      'Desça o peso atrás da cabeça',
      'Volte sobre o peito'
    ]
  },

  // COSTAS
  {
    id: 'ring-row',
    nome: 'Ring Row',
    categoria: 'Costas',
    descricao: 'Remada nas argolas',
    equipamentos: ['Argolas'],
    dificuldade: 'Intermediário',
    musculos: ['Latíssimo do Dorso', 'Romboides', 'Bíceps'],
    instrucoes: [
      'Segure as argolas inclinado para trás',
      'Puxe o corpo em direção às argolas',
      'Contraia as escápulas',
      'Desça controladamente'
    ]
  },
  {
    id: 'bar-row',
    nome: 'Bar Row',
    categoria: 'Costas',
    descricao: 'Remada na barra baixa',
    equipamentos: ['Barra', 'Rack'],
    dificuldade: 'Intermediário',
    musculos: ['Latíssimo do Dorso', 'Romboides', 'Bíceps'],
    instrucoes: [
      'Posicione barra baixa no rack',
      'Deite embaixo da barra',
      'Puxe o peito em direção à barra',
      'Desça controladamente'
    ]
  },
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
  },
  {
    id: 'remada-alta',
    nome: 'Remada Alta',
    categoria: 'Costas',
    descricao: 'Puxada vertical para trapézio',
    equipamentos: ['Barra', 'Cabos'],
    dificuldade: 'Intermediário',
    musculos: ['Trapézio', 'Deltoides Posterior'],
    instrucoes: [
      'Segure a barra com pegada estreita',
      'Puxe até a altura do peito',
      'Cotovelos altos',
      'Desça controladamente'
    ]
  },
  {
    id: 'remada-unilateral',
    nome: 'Remada Unilateral',
    categoria: 'Costas',
    descricao: 'Remada com um braço',
    equipamentos: ['Halter', 'Banco'],
    dificuldade: 'Iniciante',
    musculos: ['Latíssimo do Dorso', 'Romboides'],
    instrucoes: [
      'Apoie joelho e mão no banco',
      'Segure halter com a outra mão',
      'Puxe o halter até a cintura',
      'Contraia a escápula'
    ]
  },
  {
    id: 'puxada-alta',
    nome: 'Puxada Alta',
    categoria: 'Costas',
    descricao: 'Exercício na polia alta',
    equipamentos: ['Polia Alta'],
    dificuldade: 'Iniciante',
    musculos: ['Latíssimo do Dorso', 'Romboides'],
    instrucoes: [
      'Sente no aparelho',
      'Segure a barra com pegada larga',
      'Puxe até o peito',
      'Contraia as escápulas'
    ]
  },
  {
    id: 'remada-baixa',
    nome: 'Remada Baixa',
    categoria: 'Costas',
    descricao: 'Exercício na polia baixa',
    equipamentos: ['Polia Baixa'],
    dificuldade: 'Iniciante',
    musculos: ['Latíssimo do Dorso', 'Romboides', 'Trapézio Médio'],
    instrucoes: [
      'Sente com pernas estendidas',
      'Segure o cabo',
      'Puxe até o abdômen',
      'Mantenha tronco ereto'
    ]
  },
  {
    id: 'pulldown',
    nome: 'Pulldown',
    categoria: 'Costas',
    descricao: 'Variação da puxada alta',
    equipamentos: ['Polia Alta'],
    dificuldade: 'Iniciante',
    musculos: ['Latíssimo do Dorso'],
    instrucoes: [
      'Use diferentes pegadas',
      'Puxe com amplitude completa',
      'Foque na contração dos lats',
      'Controle a subida'
    ]
  },
  {
    id: 'rope-climb',
    nome: 'Rope Climb',
    categoria: 'Costas',
    descricao: 'Subida na corda',
    equipamentos: ['Corda'],
    dificuldade: 'Avançado',
    musculos: ['Latíssimo do Dorso', 'Bíceps', 'Core', 'Antebraços'],
    instrucoes: [
      'Segure a corda com ambas as mãos',
      'Use as pernas para ajudar',
      'Suba alternando as mãos',
      'Desça controladamente'
    ]
  },
  {
    id: 'legless',
    nome: 'Legless',
    categoria: 'Costas',
    descricao: 'Subida na corda sem usar as pernas',
    equipamentos: ['Corda'],
    dificuldade: 'Avançado',
    musculos: ['Latíssimo do Dorso', 'Bíceps', 'Core'],
    instrucoes: [
      'Segure a corda apenas com as mãos',  
      'Mantenha pernas estendidas',
      'Suba usando apenas força dos braços',
      'Desça controladamente'
    ]
  },

  // ABDÔMEN
  {
    id: 'vup',
    nome: 'V-Up',
    categoria: 'Abdômen',
    descricao: 'Flexão abdominal em formato de V',
    equipamentos: [],
    dificuldade: 'Intermediário',
    musculos: ['Reto Abdominal', 'Hip Flexors'],
    instrucoes: [
      'Deite com braços estendidos acima da cabeça',
      'Eleve simultaneamente tronco e pernas',
      'Toque os pés com as mãos',
      'Desça controladamente'
    ]
  },
  {
    id: 'situp',
    nome: 'Sit-Up',
    categoria: 'Abdômen',
    descricao: 'Flexão abdominal completa',
    equipamentos: [],
    dificuldade: 'Iniciante',
    musculos: ['Reto Abdominal', 'Hip Flexors'],
    instrucoes: [
      'Deite com joelhos flexionados',
      'Mãos atrás da cabeça ou cruzadas no peito',
      'Levante o tronco até sentar',
      'Desça controladamente'
    ]
  },
  {
    id: 'strict-t2b',
    nome: 'Strict Toes to Bar',
    categoria: 'Abdômen',
    descricao: 'Elevação estrita dos pés à barra',
    equipamentos: ['Barra Fixa'],
    dificuldade: 'Avançado',
    musculos: ['Reto Abdominal', 'Hip Flexors', 'Latíssimo'],
    instrucoes: [
      'Pendure na barra com braços estendidos',
      'Eleve as pernas estendidas até tocar a barra',
      'Movimento controlado sem balanço',
      'Desça controladamente'
    ]
  },
  {
    id: 't2b',
    nome: 'Toes to Bar',
    categoria: 'Abdômen',
    descricao: 'Elevação dos pés à barra com kipping',
    equipamentos: ['Barra Fixa'],
    dificuldade: 'Intermediário',
    musculos: ['Reto Abdominal', 'Hip Flexors'],
    instrucoes: [
      'Pendure na barra',
      'Use o kipping para gerar impulso',
      'Eleve os pés até tocar a barra',
      'Use o balanço para repetir'
    ]
  },
  {
    id: 'vup-alternado',
    nome: 'V-Up Alternado',
    categoria: 'Abdômen',
    descricao: 'V-Up tocando pés alternadamente',
    equipamentos: [],
    dificuldade: 'Intermediário',
    musculos: ['Reto Abdominal', 'Oblíquos'],
    instrucoes: [
      'Deite com braços estendidos',
      'Eleve tronco e uma perna',
      'Toque o pé com a mão oposta',
      'Alterne os lados'
    ]
  },

  // TRÍCEPS
  {
    id: 'triceps-polia',
    nome: 'Tríceps Polia',
    categoria: 'Tríceps',
    descricao: 'Extensão de tríceps na polia',
    equipamentos: ['Polia Alta'],
    dificuldade: 'Iniciante',
    musculos: ['Tríceps'],
    instrucoes: [
      'Segure a barra com pegada pronada',
      'Cotovelos fixos ao lado do corpo',
      'Estenda os braços para baixo',
      'Suba controladamente'
    ]
  },
  {
    id: 'triceps-testa',
    nome: 'Tríceps Testa',
    categoria: 'Tríceps',
    descricao: 'Extensão de tríceps deitado',
    equipamentos: ['Barra', 'Banco'],
    dificuldade: 'Intermediário',
    musculos: ['Tríceps'],
    instrucoes: [
      'Deite no banco segurando a barra',
      'Braços perpendiculares ao corpo',
      'Flexione cotovelos descendo a barra',
      'Estenda retornando à posição inicial'
    ]
  },
  {
    id: 'triceps-nuca',
    nome: 'Tríceps Nuca',
    categoria: 'Tríceps',
    descricao: 'Extensão de tríceps atrás da cabeça',
    equipamentos: ['Halter'],
    dificuldade: 'Intermediário',
    musculos: ['Tríceps'],
    instrucoes: [
      'Segure halter com ambas as mãos',
      'Braços estendidos acima da cabeça',
      'Flexione cotovelos descendo peso atrás da nuca',
      'Estenda retornando ao alto'
    ]
  },
  {
    id: 'triceps-banco',
    nome: 'Tríceps Banco',
    categoria: 'Tríceps',
    descricao: 'Mergulho no banco',
    equipamentos: ['Banco'],
    dificuldade: 'Iniciante',
    musculos: ['Tríceps'],
    instrucoes: [
      'Sente na borda do banco com mãos apoiadas',
      'Deslize o corpo para frente',
      'Desça flexionando os braços',
      'Suba estendendo os cotovelos'
    ]
  },
  {
    id: 'triceps-corda',
    nome: 'Tríceps na Corda',
    categoria: 'Tríceps',
    descricao: 'Extensão de tríceps com corda',
    equipamentos: ['Polia', 'Corda'],
    dificuldade: 'Iniciante',
    musculos: ['Tríceps'],
    instrucoes: [
      'Segure as pontas da corda',
      'Cotovelos fixos ao lado do corpo',
      'Estenda os braços abrindo a corda',
      'Suba controladamente'
    ]
  },
  {
    id: 'triceps-kick-back',
    nome: 'Tríceps Kick Back',
    categoria: 'Tríceps',
    descricao: 'Extensão de tríceps unilateral',
    equipamentos: ['Halter', 'Banco'],
    dificuldade: 'Iniciante',
    musculos: ['Tríceps'],
    instrucoes: [
      'Apoie joelho e mão no banco',
      'Cotovelo da outra mão junto ao corpo',
      'Estenda o braço para trás',
      'Volte controladamente'
    ]
  },

  // BÍCEPS
  {
    id: 'rosca-alternada',
    nome: 'Rosca Alternada',
    categoria: 'Bíceps',
    descricao: 'Flexão alternada de bíceps',
    equipamentos: ['Halteres'],
    dificuldade: 'Iniciante',
    musculos: ['Bíceps'],
    instrucoes: [
      'Segure halteres ao lado do corpo',
      'Flexione um braço de cada vez',
      'Contraia o bíceps no alto',
      'Desça controladamente'
    ]
  },
  {
    id: 'rosca-direta',
    nome: 'Rosca Direta',
    categoria: 'Bíceps',
    descricao: 'Flexão simultânea de bíceps',
    equipamentos: ['Barra', 'Halteres'],
    dificuldade: 'Iniciante',
    musculos: ['Bíceps'], 
    instrucoes: [
      'Segure a barra com pegada supinada',
      'Flexione ambos os braços simultaneamente',
      'Contraia bíceps no alto',
      'Desça controladamente'
    ]
  },
  {
    id: 'biceps-scott',
    nome: 'Bíceps Scott',
    categoria: 'Bíceps',
    descricao: 'Flexão de bíceps no banco scott',
    equipamentos: ['Banco Scott', 'Barra'],
    dificuldade: 'Intermediário',
    musculos: ['Bíceps'],
    instrucoes: [
      'Sente no banco scott',
      'Apoie braços na almofada',
      'Flexione os braços',
      'Desça sem estender completamente'
    ]
  },
  {
    id: 'biceps-w',
    nome: 'Bíceps W',
    categoria: 'Bíceps',
    descricao: 'Flexão com barra W',
    equipamentos: ['Barra W'],
    dificuldade: 'Iniciante',
    musculos: ['Bíceps'],
    instrucoes: [
      'Segure a barra W',
      'Flexione os braços',
      'A barra W reduz stress nos punhos',
      'Execute movimento completo'
    ]
  },
  {
    id: 'biceps-polia',
    nome: 'Bíceps Polia',
    categoria: 'Bíceps',
    descricao: 'Flexão de bíceps na polia',
    equipamentos: ['Polia Baixa'],
    dificuldade: 'Iniciante',
    musculos: ['Bíceps'],
    instrucoes: [
      'Segure a barra da polia baixa',
      'Flexione os braços',
      'Mantenha tensão constante',
      'Controle a descida'
    ]
  },
  {
    id: 'biceps-martelo',
    nome: 'Bíceps Martelo',
    categoria: 'Bíceps',
    descricao: 'Flexão com pegada neutra',
    equipamentos: ['Halteres'],
    dificuldade: 'Iniciante',
    musculos: ['Bíceps', 'Braquial'],
    instrucoes: [
      'Segure halteres com pegada neutra',
      'Flexione mantendo punhos em posição neutra',
      'Trabalha braquial e bíceps',
      'Execute alternado ou simultâneo'
    ]
  },
  {
    id: 'biceps-21',
    nome: 'Bíceps 21',
    categoria: 'Bíceps',
    descricao: 'Método 21 para bíceps',
    equipamentos: ['Barra'],
    dificuldade: 'Intermediário',
    musculos: ['Bíceps'],
    instrucoes: [
      '7 repetições da metade inferior',
      '7 repetições da metade superior',
      '7 repetições completas',
      'Sem descanso entre as séries'
    ]
  },
  {
    id: 'biceps-ktb',
    nome: 'Bíceps Kettlebell',
    categoria: 'Bíceps',
    descricao: 'Flexão de bíceps com kettlebell',
    equipamentos: ['Kettlebell'],
    dificuldade: 'Iniciante',
    musculos: ['Bíceps', 'Antebraços'],
    instrucoes: [
      'Segure kettlebell pela alça',
      'Flexione o braço',
      'O peso instável trabalha estabilizadores',
      'Execute unilateral ou bilateral'
    ]
  },

  // OUTROS EXERCÍCIOS
  {
    id: 'burpees',
    nome: 'Burpees',
    categoria: 'Funcionais',
    descricao: 'Exercício completo combinando agachamento, prancha e salto',
    equipamentos: [],
    dificuldade: 'Intermediário',
    musculos: ['Corpo inteiro'],
    instrucoes: [
      'Agache e apoie as mãos no chão',
      'Salte as pernas para trás em prancha',
      'Faça uma flexão (opcional)',
      'Salte as pernas de volta e pule para cima'
    ]
  },
  {
    id: 'burpees-over-bar',
    nome: 'Burpees Over the Bar',
    categoria: 'Funcionais',
    descricao: 'Burpees com salto lateral sobre a barra',
    equipamentos: ['Barra'],
    dificuldade: 'Intermediário',
    musculos: ['Corpo inteiro'],
    instrucoes: [
      'Execute burpee ao lado da barra',
      'Ao final, salte lateralmente sobre a barra',
      'Aterrisse do outro lado',
      'Repita o movimento'
    ]
  },
  {
    id: 'burpees-box-jump-over',
    nome: 'Burpees Box Jump Over',
    categoria: 'Funcionais',
    descricao: 'Burpees com salto sobre caixa',
    equipamentos: ['Box/Caixa'],
    dificuldade: 'Avançado',
    musculos: ['Corpo inteiro'],
    instrucoes: [
      'Execute burpee de frente para caixa',
      'Ao final, salte sobre a caixa',
      'Aterrisse do outro lado',
      'Vire-se e repita'
    ]
  },
  {
    id: 'mountain-climber',
    nome: 'Mountain Climber',
    categoria: 'Funcionais',
    descricao: 'Corrida na posição de prancha',
    equipamentos: [],
    dificuldade: 'Iniciante',
    musculos: ['Core', 'Ombros', 'Quadríceps'],
    instrucoes: [
      'Inicie em posição de prancha',
      'Alterne trazendo joelhos ao peito',
      'Mantenha quadris baixos',
      'Execute em ritmo rápido'
    ]
  },
  {
    id: 'salto-corda-simples',
    nome: 'Salto de Corda Simples',
    categoria: 'Cardio',
    descricao: 'Pulo básico de corda',
    equipamentos: ['Corda'],
    dificuldade: 'Iniciante',
    musculos: ['Panturrilhas', 'Cardio'],
    instrucoes: [
      'Segure a corda com punhos relaxados',
      'Salte com ambos os pés',
      'Mantenha saltos baixos',
      'Gire a corda com os punhos'
    ]
  },
  {
    id: 'salto-corda-duplo',
    nome: 'Salto de Corda Duplo',
    categoria: 'Cardio',
    descricao: 'Dois giros da corda por salto',
    equipamentos: ['Corda'],
    dificuldade: 'Avançado',
    musculos: ['Panturrilhas', 'Cardio'],
    instrucoes: [
      'Salte mais alto que o normal',
      'Gire a corda duas vezes por salto',
      'Mantenha giro rápido dos punhos',
      'Aterrisse suavemente'
    ]
  },
  {
    id: 'salto-corda-triplo',
    nome: 'Salto de Corda Triplo',
    categoria: 'Cardio',
    descricao: 'Três giros da corda por salto',
    equipamentos: ['Corda'],
    dificuldade: 'Avançado',
    musculos: ['Panturrilhas', 'Cardio'],
    instrucoes: [
      'Salte bem alto',
      'Gire a corda três vezes rapidamente',
      'Requer coordenação avançada',
      'Pratique progressivamente'
    ]
  },
  {
    id: 'tgu',
    nome: 'TGU (Turkish Get Up)',
    categoria: 'Funcionais',
    descricao: 'Movimento completo do chão para em pé',
    equipamentos: ['Kettlebell'],
    dificuldade: 'Avançado',
    musculos: ['Corpo inteiro', 'Core', 'Estabilizadores'],
    instrucoes: [
      'Deite segurando kettlebell estendido',
      'Levante-se em sequência específica',
      'Mantenha peso sempre estendido',
      'Reverse o movimento para deitar'
    ]
  },
  {
    id: 'kettlebell-swing',
    nome: 'Kettlebell Swing',
    categoria: 'Funcionais',
    descricao: 'Balanço explosivo com kettlebell',
    equipamentos: ['Kettlebell'],
    dificuldade: 'Intermediário',
    musculos: ['Glúteos', 'Isquiotibiais', 'Core'],
    instrucoes: [
      'Segure kettlebell com ambas as mãos',
      'Balance entre as pernas',
      'Impulsione com quadris para frente',
      'Kettlebell sobe até altura dos ombros'
    ]
  },
  {
    id: 'kettlebell-swing-unilateral',
    nome: 'Kettlebell Swing Unilateral',
    categoria: 'Funcionais',
    descricao: 'Swing com uma mão',
    equipamentos: ['Kettlebell'],
    dificuldade: 'Avançado',
    musculos: ['Glúteos', 'Core', 'Estabilizadores'],
    instrucoes: [
      'Segure kettlebell com uma mão',
      'Execute swing mantendo equilíbrio',
      'Alterne as mãos',
      'Trabalha assimetria'
    ]
  },
  {
    id: 'kettlebell-snatch',
    nome: 'Kettlebell Snatch',
    categoria: 'Funcionais',
    descricao: 'Arremesso do solo acima da cabeça',
    equipamentos: ['Kettlebell'],
    dificuldade: 'Avançado',
    musculos: ['Corpo inteiro'],
    instrucoes: [
      'Inicie com kettlebell no chão',
      'Puxe explosivamente acima da cabeça',
      'Movimento contínuo e fluido',
      'Punch through no final'
    ]
  },
  {
    id: 'kettlebell-clean',
    nome: 'Kettlebell Clean',
    categoria: 'Funcionais',
    descricao: 'Trazendo kettlebell aos ombros',
    equipamentos: ['Kettlebell'],
    dificuldade: 'Intermediário',
    musculos: ['Corpo inteiro'],
    instrucoes: [
      'Puxe kettlebell do chão aos ombros',
      'Cotovelo próximo ao corpo',
      'Movimento explosivo',
      'Receba em posição de front squat'
    ]
  },
  {
    id: 'kettlebell-jerk',
    nome: 'Kettlebell Jerk',
    categoria: 'Funcionais',
    descricao: 'Empurrão acima da cabeça',
    equipamentos: ['Kettlebell'],
    dificuldade: 'Avançado',
    musculos: ['Ombros', 'Core', 'Pernas'],
    instrucoes: [
      'Inicie com kettlebell nos ombros',
      'Use pernas para impulsionar',
      'Empurre acima da cabeça',
      'Lock out completo'
    ]
  },
  {
    id: 'pegboard',
    nome: 'Pegboard',
    categoria: 'Funcionais',
    descricao: 'Subida alternando pinos',
    equipamentos: ['Pegboard', 'Pinos'],
    dificuldade: 'Avançado',
    musculos: ['Latíssimo', 'Bíceps', 'Antebraços', 'Core'],
    instrucoes: [
      'Segure pinos nas mãos',
      'Suba alternando os pinos',
      'Use pernas para ajudar',
      'Desça controladamente'
    ]
  },
  {
    id: 'ring-muscle-up',
    nome: 'Ring Muscle Up',
    categoria: 'Funcionais',
    descricao: 'Transição de pull-up para dip nas argolas',
    equipamentos: ['Argolas'],
    dificuldade: 'Avançado',
    musculos: ['Latíssimo', 'Peitoral', 'Tríceps', 'Core'],
    instrucoes: [
      'Inicie pendurado nas argolas',
      'Puxe alto e faça transição',
      'Finalize em dip position',
      'Desça controladamente'
    ]
  },
  {
    id: 'muscle-bar',
    nome: 'Muscle Up Bar',
    categoria: 'Funcionais',
    descricao: 'Muscle up na barra fixa',
    equipamentos: ['Barra Fixa'],
    dificuldade: 'Avançado',
    musculos: ['Latíssimo', 'Peitoral', 'Tríceps'],
    instrucoes: [
      'Puxe-se explosivamente',
      'Transicione sobre a barra',
      'Finalize com braços estendidos',
      'Use kipping se necessário'
    ]
  },
  {
    id: 'butterfly',
    nome: 'Butterfly',
    categoria: 'Funcionais',
    descricao: 'Pull-up com técnica butterfly',
    equipamentos: ['Barra Fixa'],
    dificuldade: 'Avançado',
    musculos: ['Latíssimo', 'Core'],
    instrucoes: [
      'Use movimento pendular',
      'Puxe no momento certo do balanço',
      'Técnica eficiente para volume',
      'Requer boa mobilidade'
    ]
  },
  {
    id: 'walking-handstand',
    nome: 'Walking Handstand',
    categoria: 'Funcionais',
    descricao: 'Caminhada de mãos',
    equipamentos: [],
    dificuldade: 'Avançado',
    musculos: ['Ombros', 'Core', 'Antebraços'],
    instrucoes: [
      'Inicie em handstand na parede',
      'Caminhe com as mãos',
      'Mantenha core ativado',
      'Pratique equilíbrio progressivamente'
    ]
  },
  {
    id: 'handstand-pushup',
    nome: 'Handstand Pushup',
    categoria: 'Funcionais',
    descricao: 'Flexão de braço invertida',
    equipamentos: [],
    dificuldade: 'Avançado',
    musculos: ['Ombros', 'Tríceps', 'Core'],
    instrucoes: [
      'Inicie em handstand',
      'Desça cabeça até o chão',
      'Empurre de volta para cima',
      'Use parede para apoio inicial'
    ]
  },
  {
    id: 'farm-walking',
    nome: 'Farm Walking',
    categoria: 'Funcionais',
    descricao: 'Caminhada carregando peso',
    equipamentos: ['Halteres', 'Kettlebells'],
    dificuldade: 'Iniciante',
    musculos: ['Trapézio', 'Antebraços', 'Core', 'Pernas'],
    instrucoes: [
      'Segure pesos pesados ao lado',
      'Caminhe mantendo postura ereta',
      'Passos controlados',
      'Aperto firme nos pesos'
    ]
  },

  // MOBILIDADE
  {
    id: 'rock',
    nome: 'Rock',
    categoria: 'Mobilidade',
    descricao: 'Movimento de balanço para mobilidade de quadril',
    equipamentos: [],
    dificuldade: 'Iniciante',
    musculos: ['Quadris', 'Core'],
    instrucoes: [
      'Sente com pernas afastadas',
      'Balance para frente e para trás',
      'Mantenha costas retas',
      'Movimento fluido e controlado'
    ]
  },
  {
    id: 'rock-abducao',
    nome: 'Rock Abdução',
    categoria: 'Mobilidade',
    descricao: 'Rock focando abdução de quadril',
    equipamentos: [],
    dificuldade: 'Iniciante',
    musculos: ['Abdutores', 'Quadris'],
    instrucoes: [
      'Posição de rock com foco na abertura',
      'Enfatize movimento lateral',
      'Alongue adutores',
      'Respire profundamente'
    ]
  },
  {
    id: 'movimento-onda',
    nome: 'Movimento da Onda',
    categoria: 'Mobilidade',
    descricao: 'Movimento fluido ondular da coluna',
    equipamentos: [],
    dificuldade: 'Iniciante',
    musculos: ['Coluna', 'Core'],
    instrucoes: [
      'Inicie em pé',
      'Flexione vértebra por vértebra',
      'Retorne rolando para cima',
      'Movimento suave como onda'
    ]
  },
  {
    id: 'escorpiao',
    nome: 'Escorpião',
    categoria: 'Mobilidade',
    descricao: 'Alongamento rotacional em prancha',
    equipamentos: [],
    dificuldade: 'Intermediário',
    musculos: ['Quadris', 'Coluna', 'Ombros'],
    instrucoes: [  
      'Inicie em prancha',
      'Leve um pé sobre o corpo',
      'Toque o chão do lado oposto',
      'Alterne os lados'
    ]
  },
  {
    id: 'escorpiao-inverso',
    nome: 'Escorpião Inverso',
    categoria: 'Mobilidade',
    descricao: 'Escorpião iniciando de costas',
    equipamentos: [],
    dificuldade: 'Intermediário',
    musculos: ['Quadris', 'Coluna'],
    instrucoes: [
      'Deite de costas',
      'Leve perna sobre o corpo',
      'Toque chão do lado oposto',
      'Mantenha ombros no chão'
    ]
  },
  {
    id: 'toracica-solo',
    nome: 'Torácica Solo',
    categoria: 'Mobilidade',
    descricao: 'Mobilização da coluna torácica no solo',
    equipamentos: [],
    dificuldade: 'Iniciante',
    musculos: ['Coluna Torácica'],
    instrucoes: [
      'Deite de lado com joelhos flexionados',
      'Gire tronco para cima',
      'Abra o braço em arco',
      'Mantenha quadris estáveis'
    ]
  },
  {
    id: 'shimbox',
    nome: 'Shimbox',
    categoria: 'Mobilidade',
    descricao: 'Transição de mobilidade de quadril',
    equipamentos: [],
    dificuldade: 'Intermediário',
    musculos: ['Quadris', 'Glúteos'],
    instrucoes: [
      'Sente com pernas em 90 graus',
      'Transicione para o outro lado',
      'Mantenha tronco ereto',
      'Movimento fluido de rotação'
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
