
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Gift, ShoppingBag, Calendar, Utensils, CreditCard, Star } from 'lucide-react';

const ClubeVantagens = () => {
  const beneficios = [
    {
      titulo: '25% de Desconto na Loja',
      descricao: 'Desconto especial em todos os produtos da loja oficial',
      icon: ShoppingBag,
      cor: 'bg-green-100 text-green-600'
    },
    {
      titulo: 'Acesso Prioritário a Eventos',
      descricao: 'Seja o primeiro a se inscrever em workshops e competições',
      icon: Calendar,
      cor: 'bg-blue-100 text-blue-600'
    },
    {
      titulo: 'Desconto na Cozinha',
      descricao: '15% de desconto em todos os lanches e refeições',
      icon: Utensils,
      cor: 'bg-orange-100 text-orange-600'
    }
  ];

  const parceiros = {
    'Alimentação': [
      'Restaurante Fit Life',
      'Açaí do Atleta',
      'Suplementos Max',
      'Lanchonete Saudável'
    ],
    'Beleza e Bem-estar': [
      'Spa Relax',
      'Estética Corporal',
      'Massagem Terapêutica',
      'Clínica Dermatológica'
    ],
    'Serviços': [
      'Fisioterapia Esportiva',
      'Nutricionista Especializada',
      'Personal Trainer',
      'Psicólogo do Esporte'
    ],
    'Lazer': [
      'Cinema Multiplex',
      'Parque Aquático',
      'Teatro Municipal',
      'Shopping Center'
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gorila-yellow rounded-full flex items-center justify-center mx-auto mb-6">
            <Gift className="text-gorila-primary" size={40} />
          </div>
          <h1 className="text-4xl font-bold text-gorila-primary mb-4">Clube de Vantagens</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descontos exclusivos e benefícios especiais para nossos atletas do Gorila Rise
          </p>
        </div>

        {/* Benefícios Principais */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gorila-primary mb-8 text-center">
            Benefícios Exclusivos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beneficios.map((beneficio, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${beneficio.cor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <beneficio.icon size={32} />
                  </div>
                  <CardTitle className="text-gorila-primary">{beneficio.titulo}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">{beneficio.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Cartão Virtual */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gorila-primary mb-4">
              Seu Cartão de Associado
            </h2>
            <p className="text-lg text-gray-600">
              Apresente seu cartão virtual e aproveite os descontos
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <Card className="bg-gradient-to-r from-gorila-primary to-gorila-dark text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gorila-yellow rounded-full flex items-center justify-center">
                      <span className="text-gorila-primary font-bold">🦍</span>
                    </div>
                    <span className="font-bold">Gorila Rise</span>
                  </div>
                  <CreditCard size={24} />
                </div>
                <div className="mb-4">
                  <p className="text-sm opacity-80">Nome do Associado</p>
                  <p className="text-lg font-bold">ATLETA GORILA RISE</p>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm opacity-80">Válido até</p>
                    <p className="font-bold">12/2025</p>
                  </div>
                  <Badge className="bg-gorila-yellow text-gorila-primary">
                    ATIVO
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Rede de Parceiros */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gorila-primary mb-4">
              Rede de Parceiros
            </h2>
            <p className="text-lg text-gray-600">
              Descontos especiais em estabelecimentos parceiros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(parceiros).map(([categoria, estabelecimentos]) => (
              <Card key={categoria} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gorila-yellow rounded-full flex items-center justify-center mb-2">
                    <Star className="text-gorila-primary" size={24} />
                  </div>
                  <CardTitle className="text-gorila-primary">{categoria}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {estabelecimentos.map((estabelecimento, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <div className="w-2 h-2 bg-gorila-yellow rounded-full mr-2"></div>
                        {estabelecimento}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 text-center bg-gorila-primary text-white py-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Aproveite os Benefícios!</h2>
          <p className="text-xl mb-8 text-gray-300">
            Faça login para acessar seu cartão virtual e começar a economizar
          </p>
          <Button className="bg-gorila-yellow text-gorila-primary hover:bg-yellow-400 font-bold text-lg px-8 py-3">
            Acessar Minha Conta
          </Button>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ClubeVantagens;
