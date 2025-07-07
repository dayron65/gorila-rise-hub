
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star, Shirt, Book } from 'lucide-react';

const Loja = () => {
  const produtos = [
    {
      id: 1,
      nome: 'Camiseta Gorila Rise',
      preco: 49.90,
      precoSocio: 37.43,
      categoria: 'Roupas',
      icon: Shirt,
      descricao: 'Camiseta 100% algodão com logo bordado'
    },
    {
      id: 3,
      nome: 'Workshop Nutrição',
      preco: 99.90,
      precoSocio: 74.93,
      categoria: 'Workshops',
      icon: Book,
      descricao: 'Workshop completo sobre nutrição esportiva'
    }
  ];

  const planosSocio = [
    {
      nome: 'Mensal',
      preco: 220.00,
      beneficios: ['Desconto de 5% na loja', 'Acesso a conteúdos exclusivos'],
      cor: 'bg-orange-400'
    },
    {
      nome: 'Semestral',
      preco: 200.00,
      beneficios: ['Desconto de 15% na loja', 'Prioridade no agendamento', 'Workshop mensal gratuito'],
      cor: 'bg-gray-400'
    },
    {
      nome: 'Anual',
      preco: 190.00,
      beneficios: ['Desconto de 25% na loja', 'Assessoria nutricional', 'Todos os workshops gratuitos', 'Personal trainer 1x/mês'],
      cor: 'bg-gorila-yellow'
    },
    {
      nome: '3x Semana',
      preco: 160.00,
      beneficios: ['6x por mês', 'Acesso limitado aos equipamentos', 'Plano flexível'],
      cor: 'bg-blue-400'
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

        {/* Produtos */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gorila-primary mb-8">Produtos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {produtos.map((produto) => (
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
                    <p className="text-lg text-green-600">
                      Sócio: R$ {produto.precoSocio.toFixed(2)}
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

        {/* Planos Sócio Torcedor */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gorila-primary mb-4">Planos de Assinatura</h2>
            <p className="text-lg text-gray-600">
              Escolha seu plano e aproveite benefícios exclusivos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {planosSocio.map((plano, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${index === 2 ? 'ring-2 ring-gorila-yellow' : ''}`}>
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${plano.cor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Star className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-gorila-primary">{plano.nome}</CardTitle>
                  {index === 2 && (
                    <Badge className="bg-gorila-yellow text-gorila-primary">Mais Popular</Badge>
                  )}
                  <div className="text-3xl font-bold text-gorila-primary">
                    R$ {plano.preco.toFixed(2)}
                    <span className="text-sm font-normal text-gray-600">/mês</span>
                  </div>
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
                  <Button className={`w-full ${index === 2 ? 'bg-gorila-yellow text-gorila-primary hover:bg-yellow-400' : 'bg-gorila-primary hover:bg-gorila-dark'}`}>
                    Assinar {plano.nome}
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
