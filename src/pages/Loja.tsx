
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star, Shirt, Book } from 'lucide-react';

const Loja = () => {
  const acessorios = [
    {
      id: 1,
      nome: 'Munhequeira de Pano',
      preco: 60.00,
      categoria: 'Acessórios',
      icon: ShoppingCart,
      descricao: 'Munhequeira de pano para proteção e suporte durante os treinos'
    }
  ];

  const roupas = [
    {
      id: 2,
      nome: 'Camiseta Gorila Rise',
      preco: 49.90,
      categoria: 'Camisas',
      icon: Shirt,
      descricao: 'Camiseta 100% algodão com logo bordado'
    }
  ];

  const workshops = [
    {
      id: 3,
      nome: 'Introdução ao Esporte',
      preco: 89.90,
      duracao: '2 horas',
      categoria: 'Workshops',
      icon: Book,
      descricao: 'Workshop introdutório para iniciantes no esporte'
    },
    {
      id: 4,
      nome: 'LPO - Módulo 1: Fundamentos',
      preco: 149.90,
      duracao: '4 horas',
      categoria: 'Workshops',
      icon: Book,
      descricao: 'Levantamento de Peso Olímpico - Desenvolver mobilidade, estabilidade e padrões básicos de movimento'
    },
    {
      id: 5,
      nome: 'Introdução à Biomecânica do LPO',
      preco: 129.90,
      duracao: '3 horas',
      categoria: 'Workshops',
      icon: Book,
      descricao: 'Princípios biomecânicos e prática do Levantamento de Peso Olímpico'
    },
    {
      id: 6,
      nome: 'Introdução à Biomecânica do Kettlebell',
      preco: 129.90,
      duracao: '3 horas',
      categoria: 'Workshops',
      icon: Book,
      descricao: 'Princípios biomecânicos e prática com Kettlebell'
    },
    {
      id: 7,
      nome: 'Nutrição Esportiva',
      preco: 99.90,
      duracao: '2 horas',
      categoria: 'Workshops',
      icon: Book,
      descricao: 'Workshop completo sobre nutrição esportiva'
    }
  ];

  const planosSocio = [
    {
      nome: 'Ouro',
      nivel: 'Cartão de sócio ouro',
      beneficios: [
        '20% desconto loja oficial',
        '1 camisa oficial por temporada',
        'Desconto em bebidas na Gorilla Kitchen'
      ],
      cor: 'bg-yellow-500'
    },
    {
      nome: 'Prata',
      nivel: 'Cartão de sócio prata',
      beneficios: [
        '15% desconto na loja oficial',
        '50% em camisa oficial da temporada',
        'Desconto em bebidas na Gorilla Kitchen'
      ],
      cor: 'bg-gray-400'
    },
    {
      nome: 'Bronze',
      nivel: 'Cartão de sócio bronze',
      beneficios: [
        '5% desconto na loja oficial',
        '20% em camisa oficial da temporada',
        'Desconto em bebidas na Gorilla Kitchen'
      ],
      cor: 'bg-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gorila-primary mb-4">Loja Gorila Rise</h1>
          <p className="text-xl text-gray-600">
            Produtos oficiais e equipamentos para sua jornada esportiva
          </p>
        </div>

        {/* Acessórios */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gorila-primary mb-8">Acessórios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {acessorios.map((produto) => (
              <Card key={produto.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gorila-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                    <produto.icon className="text-gorila-primary" size={32} />
                  </div>
                  <CardTitle className="text-gorila-primary">{produto.nome}</CardTitle>
                  <CardDescription>{produto.descricao}</CardDescription>
                  <Badge className="w-fit mx-auto">{produto.categoria}</Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <p className="text-2xl font-bold text-gorila-primary">
                      R$ {produto.preco.toFixed(2)}
                    </p>
                  </div>
                  <Button className="w-full bg-gorila-primary hover:bg-gorila-dark">
                    <ShoppingCart className="mr-2" size={18} />
                    Comprar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Roupas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gorila-primary mb-8">Roupas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roupas.map((produto) => (
              <Card key={produto.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gorila-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                    <produto.icon className="text-gorila-primary" size={32} />
                  </div>
                  <CardTitle className="text-gorila-primary">{produto.nome}</CardTitle>
                  <CardDescription>{produto.descricao}</CardDescription>
                  <Badge className="w-fit mx-auto">{produto.categoria}</Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <p className="text-2xl font-bold text-gorila-primary">
                      R$ {produto.preco.toFixed(2)}
                    </p>
                  </div>
                  <Button className="w-full bg-gorila-primary hover:bg-gorila-dark">
                    <ShoppingCart className="mr-2" size={18} />
                    Comprar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Workshops */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gorila-primary mb-8">Workshops</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops.map((workshop) => (
              <Card key={workshop.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gorila-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                    <workshop.icon className="text-gorila-primary" size={32} />
                  </div>
                  <CardTitle className="text-gorila-primary">{workshop.nome}</CardTitle>
                  <CardDescription>{workshop.descricao}</CardDescription>
                  <Badge className="w-fit mx-auto">{workshop.categoria}</Badge>
                  <Badge variant="outline" className="w-fit mx-auto mt-2">{workshop.duracao}</Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <p className="text-2xl font-bold text-gorila-primary">
                      R$ {workshop.preco.toFixed(2)}
                    </p>
                  </div>
                  <Button className="w-full bg-gorila-primary hover:bg-gorila-dark">
                    <ShoppingCart className="mr-2" size={18} />
                    Inscrever-se
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Sócio Torcedor */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gorila-primary mb-4">Sócio Torcedor</h2>
            <p className="text-lg text-gray-600">
              Seja um Sócio Torcedor e tenha benefícios exclusivos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {planosSocio.map((plano, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${index === 0 ? 'ring-2 ring-yellow-500' : ''}`}>
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${plano.cor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Star className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-gorila-primary">{plano.nome}</CardTitle>
                  <CardDescription className="text-sm text-gray-600">{plano.nivel}</CardDescription>
                  {index === 0 && (
                    <Badge className="bg-yellow-500 text-white">Recomendado</Badge>
                  )}
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {plano.beneficios.map((beneficio, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-gorila-yellow rounded-full mr-3"></div>
                        {beneficio}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${index === 0 ? 'bg-yellow-500 text-white hover:bg-yellow-600' : 'bg-gorila-primary hover:bg-gorila-dark'}`}>
                    Tornar-se Sócio {plano.nome}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Loja;
