
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Gift, ShoppingBag, Calendar, Utensils, CreditCard, Star, GraduationCap, Heart, Shirt, Home, Gamepad2, Plane, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    'Educação e Artigos Escolares': {
      icon: GraduationCap,
      estabelecimentos: [
        'Papelaria Escolar Central',
        'Livraria Educacional',
        'Material Didático Plus'
      ]
    },
    'Saúde e Beleza': {
      icon: Heart,
      estabelecimentos: [
        'Nutricionista',
        'Psicólogo',
        'Fisioterapeuta',
        'Endocrinologista',
        'Studio de Beleza Simone Oliveira'
      ]
    },
    'Alimentação e Gastronomia': {
      icon: Utensils,
      estabelecimentos: [
        'Restaurante Fit Life',
        'Açaí do Atleta',
        'Suplementos Max',
        'Lanchonete Saudável'
      ]
    },
    'Moda e Acessórios': {
      icon: Shirt,
      estabelecimentos: [
        'Dom Felipe - Artigos Masculinos',
        'Gibi Store - Loja Streetwear (15% de desconto)',
        'Boutique Fashion',
        'Acessórios Premium'
      ]
    },
    'Artigos para Casa': {
      icon: Home,
      estabelecimentos: [
        'Casa & Decoração',
        'Móveis Comfort',
        'Utilidades Domésticas',
        'Design de Interiores'
      ]
    },
    'Entretenimento': {
      icon: Gamepad2,
      estabelecimentos: [
        'Bem Te Vi - 15% nas aulas de teatro (promoção não se acumula com outras promoções vigentes)',
        'Cinema Multiplex',
        'Games & Diversão',
        'Teatro Municipal'
      ]
    },
    'Viagens e Turismo': {
      icon: Plane,
      estabelecimentos: [
        'Agência Mundo Viagens',
        'Hotel Pousada do Sol',
        'Turismo Aventura',
        'Pacotes Exclusivos'
      ]
    }
  };

  const getIconColor = (categoria: string) => {
    const colors: { [key: string]: string } = {
      'Educação e Artigos Escolares': 'text-blue-600',
      'Saúde e Beleza': 'text-pink-600',
      'Alimentação e Gastronomia': 'text-orange-600',
      'Moda e Acessórios': 'text-purple-600',
      'Artigos para Casa': 'text-green-600',
      'Entretenimento': 'text-red-600',
      'Viagens e Turismo': 'text-cyan-600'
    };
    return colors[categoria] || 'text-gorila-primary';
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            O Clube de Vantagens Esporte Clube Gorila Rise é uma rede de ofertas exclusivas aos associados com benefícios em diversos segmentos e campos de atuação.
          </p>
        </div>

        {/* Como Funciona */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gorila-primary mb-6 text-center">
              Como Funciona
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6 text-center">
                Estabelecimentos parceiros comprometem-se a garantir descontos e benefícios aos associados ECP.
              </p>
              
              <div className="bg-white rounded-lg p-6 border-l-4 border-gorila-yellow">
                <h3 className="text-xl font-semibold text-gorila-primary mb-3">Utilização</h3>
                <p className="text-gray-700">
                  Para obter as vantagens oferecidas pelos parceiros do Clube de Vantagens Esporte Clube Gorila Rise, 
                  os associados deverão apresentar, no ato da compra, o cartão do associado, o que deverá ser exigido 
                  pelos estabelecimentos comerciais.
                </p>
              </div>
            </div>
          </div>
        </section>

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Object.entries(parceiros).map(([categoria, dados]) => (
              <Card key={categoria} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-12 h-12 bg-gorila-yellow rounded-full flex items-center justify-center mb-2`}>
                    <dados.icon className={getIconColor(categoria)} size={24} />
                  </div>
                  <CardTitle className="text-gorila-primary text-lg">{categoria}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {dados.estabelecimentos.map((estabelecimento, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start">
                        <div className="w-2 h-2 bg-gorila-yellow rounded-full mr-2 flex-shrink-0 mt-2"></div>
                        <span>{estabelecimento}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA - Ficha de Inscrição */}
        <section className="mt-16 text-center bg-gorila-primary text-white py-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Faça Parte do Clube!</h2>
          <p className="text-xl mb-8 text-gray-300">
            Preencha sua ficha de inscrição e comece a aproveitar todos os benefícios
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/ficha-inscricao">
              <Button className="bg-gorila-yellow text-gorila-primary hover:bg-yellow-400 font-bold text-lg px-8 py-3 flex items-center space-x-2">
                <FileText size={20} />
                <span>Preencher Ficha de Inscrição</span>
              </Button>
            </Link>
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gorila-primary font-bold text-lg px-8 py-3">
              Acessar Minha Conta
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ClubeVantagens;
