
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Crown, Star, Zap } from 'lucide-react';

const SubscriptionSystem = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const planos = [
    {
      id: 'bronze',
      nome: 'Bronze',
      preco: 49.90,
      periodo: 'mês',
      descricao: 'Ideal para iniciantes',
      cor: 'bg-orange-500',
      icon: Star,
      beneficios: [
        'Acesso ao banco de exercícios básico',
        'Prescrição de dieta automática',
        'Suporte por chat',
        'Acompanhamento mensal'
      ]
    },
    {
      id: 'prata',
      nome: 'Prata',
      preco: 89.90,
      periodo: 'mês',
      descricao: 'Para atletas em desenvolvimento',
      cor: 'bg-gray-500',
      icon: Zap,
      beneficios: [
        'Tudo do plano Bronze',
        'Banco completo de exercícios',
        'Prescrições personalizadas',
        'Acompanhamento semanal',
        'Acesso aos drills esportivos',
        'Suporte prioritário'
      ]
    },
    {
      id: 'ouro',
      nome: 'Ouro',
      preco: 149.90,
      periodo: 'mês',
      descricao: 'Para atletas profissionais',
      cor: 'bg-gorila-yellow',
      icon: Crown,
      popular: true,
      beneficios: [
        'Tudo do plano Prata',
        'Coaching individual',
        'Prescrições em tempo real',
        'Análise de performance',
        'Todos os drills esportivos',
        'Suporte 24/7',
        'Sessões ao vivo mensais'
      ]
    }
  ];

  const handleSubscribe = (planId: string) => {
    setSelectedPlan(planId);
    console.log(`Iniciando assinatura do plano: ${planId}`);
    // Aqui seria integrado com sistema de pagamento
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gorila-primary mb-4">Sistema de Assinatura</h1>
        <p className="text-xl text-gray-600">
          Escolha o plano ideal para sua jornada atlética
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {planos.map((plano) => (
          <Card 
            key={plano.id} 
            className={`relative hover:shadow-lg transition-shadow ${
              plano.popular ? 'ring-2 ring-gorila-yellow scale-105' : ''
            }`}
          >
            {plano.popular && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Badge className="bg-gorila-yellow text-gorila-primary px-4 py-1">
                  Mais Popular
                </Badge>
              </div>
            )}

            <CardHeader className="text-center pb-4">
              <div className={`w-16 h-16 ${plano.cor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <plano.icon className="text-white" size={32} />
              </div>
              
              <CardTitle className="text-2xl text-gorila-primary">{plano.nome}</CardTitle>
              <CardDescription className="text-gray-600">{plano.descricao}</CardDescription>
              
              <div className="mt-4">
                <div className="text-4xl font-bold text-gorila-primary">
                  R$ {plano.preco.toFixed(2)}
                </div>
                <div className="text-gray-600">por {plano.periodo}</div>
              </div>
            </CardHeader>

            <CardContent>
              <ul className="space-y-3 mb-6">
                {plano.beneficios.map((beneficio, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm text-gray-700">{beneficio}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  plano.popular 
                    ? 'bg-gorila-yellow text-gorila-primary hover:bg-yellow-400' 
                    : 'bg-gorila-primary hover:bg-gorila-dark text-white'
                }`}
                onClick={() => handleSubscribe(plano.id)}
                disabled={selectedPlan === plano.id}
              >
                {selectedPlan === plano.id ? 'Processando...' : `Assinar ${plano.nome}`}
              </Button>

              {plano.id === 'ouro' && (
                <div className="mt-3 text-center">
                  <p className="text-xs text-gray-500">
                    Garantia de satisfação de 30 dias
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 bg-gray-50 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-gorila-primary mb-4 text-center">
          Perguntas Frequentes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gorila-primary mb-2">Posso cancelar a qualquer momento?</h4>
            <p className="text-gray-600 text-sm">Sim, você pode cancelar sua assinatura a qualquer momento sem taxas adicionais.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gorila-primary mb-2">Há desconto para pagamento anual?</h4>
            <p className="text-gray-600 text-sm">Sim, oferecemos 20% de desconto para assinaturas anuais em todos os planos.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gorila-primary mb-2">Posso mudar de plano?</h4>
            <p className="text-gray-600 text-sm">Você pode fazer upgrade ou downgrade do seu plano a qualquer momento.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gorila-primary mb-2">Há período de teste gratuito?</h4>
            <p className="text-gray-600 text-sm">Oferecemos 7 dias gratuitos para todos os novos usuários testarem nossos serviços.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSystem;
