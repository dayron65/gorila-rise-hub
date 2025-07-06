
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Trophy, Clock, Target, Zap, Dumbbell, ExternalLink } from 'lucide-react';

const TestModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gorila-secondary text-white hover:bg-gorila-dark font-bold text-lg px-8 py-3">
          O teste
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gorila-primary text-center">
            TORNE-SE UM ATLETA GORILA RISE!
          </DialogTitle>
          <p className="text-center text-lg text-gray-600 mt-2">
            Sua jornada rumo ao alto rendimento começa aqui.
          </p>
        </DialogHeader>
        
        <div className="space-y-6 mt-6">
          {/* Chamada de Talentos */}
          <div className="bg-gorila-yellow/10 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gorila-primary mb-4 flex items-center gap-2">
              📣 CHAMADA DE NOVOS TALENTOS 2025
            </h3>
            <p className="text-gray-700 mb-4">
              Uma vez por ano, abrimos nossas portas para atletas que desejam integrar nossas equipes competitivas em 7 modalidades:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gorila-primary font-semibold">
              <div>• LPO (Levantamento de Peso Olímpico)</div>
              <div>• Atletismo</div>
              <div>• Basquete</div>
              <div>• Flag Football</div>
              <div>• Futebol</div>
              <div>• Cheerleading</div>
              <div>• Boxe</div>
            </div>
          </div>

          {/* Como Funciona */}
          <div>
            <h3 className="text-xl font-bold text-gorila-primary mb-4">
              COMO FUNCIONA NOSSA SELEÇÃO?
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h4 className="font-bold text-gorila-primary mb-2">✅ ETAPA 1: TESTE FÍSICO INTEGRADO</h4>
              <p className="text-gray-700">
                Avaliamos 3 pilares fundamentais com protocolos reconhecidos mundialmente:
              </p>
            </div>
          </div>

          {/* Tabela de Testes */}
          <div className="space-y-4">
            {/* Velocidade & Agilidade */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="text-gorila-yellow" size={20} />
                <h4 className="font-bold text-gorila-primary">VELOCIDADE & AGILIDADE</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">Testes-Chave:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 40 Yards Dash (36.5m)</li>
                    <li>• 3 Cones Drill</li>
                    <li>• Shuttle 5-10-5</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">O Que Avaliamos:</h5>
                  <p className="text-sm text-gray-600">
                    Tempo de reação, explosão e mudanças de direção
                  </p>
                </div>
              </div>
            </div>

            {/* Força & Potência */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Dumbbell className="text-gorila-yellow" size={20} />
                <h4 className="font-bold text-gorila-primary">FORÇA & POTÊNCIA</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">Testes-Chave:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Salto Vertical</li>
                    <li>• Salto Horizontal</li>
                    <li>• Resistência Muscular</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">O Que Avaliamos:</h5>
                  <p className="text-sm text-gray-600">
                    Força explosiva, equilíbrio e resistência
                  </p>
                </div>
              </div>
            </div>

            {/* Resistência & Mobilidade */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Target className="text-gorila-yellow" size={20} />
                <h4 className="font-bold text-gorila-primary">RESISTÊNCIA & MOBILIDADE</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">Testes-Chave:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Sit-Ups</li>
                    <li>• Ponte Isométrica</li>
                    <li>• Teste Vai e Vem 20m</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">O Que Avaliamos:</h5>
                  <p className="text-sm text-gray-600">
                    Capacidade aeróbica, estabilidade e flexibilidade
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Inscrição */}
          <div className="bg-gorila-yellow/10 p-6 rounded-lg text-center">
            <h4 className="text-xl font-bold text-gorila-primary mb-4">
              📝 FAÇA SUA INSCRIÇÃO
            </h4>
            <p className="text-gray-700 mb-4">
              Inscreva-se agora para participar do processo seletivo 2025
            </p>
            <a 
              href="https://forms.gle/inscricao-teste" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gorila-primary text-white px-6 py-3 rounded-lg hover:bg-gorila-dark transition-colors font-semibold"
            >
              Inscrever-se no Teste
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Edital */}
          <div className="bg-gorila-primary text-white p-6 rounded-lg text-center">
            <h4 className="text-xl font-bold mb-2 flex items-center justify-center gap-2">
              <Trophy size={24} />
              EDITAL DE RECRUTADOS
            </h4>
            <p className="text-gorila-yellow">
              Em breve, mais informações sobre datas e inscrições!
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TestModal;
