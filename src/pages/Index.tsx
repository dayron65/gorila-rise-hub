
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Users, Dumbbell, Star, ShoppingBag, Gift, Building } from 'lucide-react';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header isLoggedIn={isLoggedIn} onLogout={() => setIsLoggedIn(false)} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gorila-primary to-gorila-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <div className="mb-6">
              <div className="w-24 h-24 bg-gorila-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gorila-primary font-bold text-4xl">🦍</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                Gorila Rise
              </h1>
              <p className="text-2xl md:text-3xl text-gorila-yellow font-semibold mb-8">
                Mantenha-se forte
              </p>
            </div>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Transforme seu corpo, fortaleça sua mente e junte-se ao nosso bando. 
              Aqui você encontra tudo para alcançar seus objetivos esportivos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/cadastro">
                <Button className="bg-gorila-yellow text-gorila-primary hover:bg-yellow-400 font-bold text-lg px-8 py-3">
                  Entre para o Bando
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gorila-primary font-bold text-lg px-8 py-3">
                  Já sou membro
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gorila-primary mb-8">Nossa História</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              O Esporte Clube Gorila Rise nasceu da paixão pelo esporte e da vontade de criar uma 
              comunidade forte e unida. Desde nossa fundação, temos o compromisso de oferecer não 
              apenas um espaço para treinar, mas um ambiente onde cada atleta pode crescer, evoluir 
              e alcançar sua melhor versão.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gorila-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="text-gorila-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gorila-primary mb-2">Excelência</h3>
                <p className="text-gray-600">Equipamentos de última geração e profissionais qualificados</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gorila-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-gorila-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gorila-primary mb-2">Comunidade</h3>
                <p className="text-gray-600">Um bando unido em busca dos mesmos objetivos</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gorila-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <Dumbbell className="text-gorila-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gorila-primary mb-2">Resultados</h3>
                <p className="text-gray-600">Métodos comprovados para alcançar seus objetivos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gorila-primary mb-12">
            Explore o Gorila Rise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gorila-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="text-gorila-primary" size={32} />
                </div>
                <CardTitle className="text-gorila-primary">Loja</CardTitle>
                <CardDescription>
                  Produtos oficiais, suplementos e equipamentos esportivos
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Link to="/loja">
                  <Button className="bg-gorila-primary hover:bg-gorila-dark text-white">
                    Visitar Loja
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gorila-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="text-gorila-primary" size={32} />
                </div>
                <CardTitle className="text-gorila-primary">Clube de Vantagens</CardTitle>
                <CardDescription>
                  Descontos exclusivos e benefícios especiais para nossos atletas
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Link to="/clube-vantagens">
                  <Button className="bg-gorila-primary hover:bg-gorila-dark text-white">
                    Conhecer Benefícios
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gorila-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="text-gorila-primary" size={32} />
                </div>
                <CardTitle className="text-gorila-primary">Institucional</CardTitle>
                <CardDescription>
                  Conheça nossa estrutura, esportes e projetos sociais
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Link to="/institucional">
                  <Button className="bg-gorila-primary hover:bg-gorila-dark text-white">
                    Saiba Mais
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gorila-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Pronto para se juntar ao bando?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Comece sua jornada de transformação hoje mesmo
          </p>
          <Link to="/cadastro">
            <Button className="bg-gorila-yellow text-gorila-primary hover:bg-yellow-400 font-bold text-lg px-8 py-3">
              Cadastre-se Agora
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
