
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, User, LogOut, ChevronDown } from 'lucide-react';
import GorilaRiseLogo from '@/components/GorilaRiseLogo';
import TestModal from '@/components/TestModal';

interface HeaderProps {
  isLoggedIn?: boolean;
  userName?: string;
  onLogout?: () => void;
}

const Header = ({ isLoggedIn = false, userName, onLogout }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSystemsOpen, setIsSystemsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    navigate('/');
  };

  return (
    <header className="bg-gorila-primary text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <GorilaRiseLogo size="sm" className="text-white" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/loja" className="hover:text-gorila-yellow transition-colors">
              Loja
            </Link>
            <Link to="/clube-vantagens" className="hover:text-gorila-yellow transition-colors">
              Clube de Vantagens
            </Link>
            <div className="relative">
              <button
                className="flex items-center hover:text-gorila-yellow transition-colors"
                onMouseEnter={() => setIsSystemsOpen(true)}
                onMouseLeave={() => setIsSystemsOpen(false)}
              >
                Sistemas (Adm, Professores, Alunos)
                <ChevronDown size={16} className="ml-1" />
              </button>
              {isSystemsOpen && (
                <div
                  className="absolute top-full left-0 bg-white text-gorila-primary shadow-lg rounded-lg py-2 w-56 z-50"
                  onMouseEnter={() => setIsSystemsOpen(true)}
                  onMouseLeave={() => setIsSystemsOpen(false)}
                >
                  <Link to="/prescricao-dieta" className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                    Prescrição de Dieta
                  </Link>
                  <Link to="/assinatura" className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                    Assinatura Online
                  </Link>
                  <Link to="/exercicios" className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                    Banco de Dados dos Movimentos
                  </Link>
                  <Link to="/lista-exercicios" className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                    Lista de Exercícios
                  </Link>
                  <Link to="/drills" className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                    Drills Esportivos
                  </Link>
                </div>
              )}
            </div>
            <Link to="/institucional" className="hover:text-gorila-yellow transition-colors">
              Institucional
            </Link>
            <TestModal />
            <Link to="/cadastro" className="hover:text-gorila-yellow transition-colors">
              Entre para o Bando
            </Link>
          </nav>

          {/* Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-3">
                <Link to="/painel" className="flex items-center space-x-2 hover:text-gorila-yellow transition-colors">
                  <User size={18} />
                  <span>{userName || 'Atleta'}</span>
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="text-white hover:text-gorila-yellow hover:bg-transparent"
                >
                  <LogOut size={18} />
                </Button>
              </div>
            ) : (
              <Button
                onClick={handleLogin}
                className="bg-gorila-yellow text-gorila-primary hover:bg-yellow-400 font-semibold"
              >
                Login
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-3">
              <Link
                to="/loja"
                className="hover:text-gorila-yellow transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Loja
              </Link>
              <Link
                to="/clube-vantagens"
                className="hover:text-gorila-yellow transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Clube de Vantagens
              </Link>
              <div className="pl-4 space-y-2 border-l-2 border-gorila-yellow">
                <div className="text-gorila-yellow font-semibold mb-2">Sistemas</div>
                <Link
                  to="/prescricao-dieta"
                  className="block hover:text-gorila-yellow transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Prescrição de Dieta
                </Link>
                <Link
                  to="/assinatura"
                  className="block hover:text-gorila-yellow transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Assinatura Online
                </Link>
                <Link
                  to="/exercicios"
                  className="block hover:text-gorila-yellow transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Banco de Dados dos Movimentos
                </Link>
                <Link
                  to="/lista-exercicios"
                  className="block hover:text-gorila-yellow transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Lista de Exercícios
                </Link>
                <Link
                  to="/drills"
                  className="block hover:text-gorila-yellow transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Drills Esportivos
                </Link>
              </div>
              <Link
                to="/institucional"
                className="hover:text-gorila-yellow transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Institucional
              </Link>
              <div className="py-2">
                <TestModal />
              </div>
              <Link
                to="/cadastro"
                className="hover:text-gorila-yellow transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Entre para o Bando
              </Link>
              <div className="pt-3 border-t border-gray-700">
                {isLoggedIn ? (
                  <div className="flex flex-col space-y-2">
                    <Link
                      to="/painel"
                      className="flex items-center space-x-2 hover:text-gorila-yellow transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <User size={18} />
                      <span>{userName || 'Painel do Atleta'}</span>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 hover:text-gorila-yellow transition-colors text-left"
                    >
                      <LogOut size={18} />
                      <span>Sair</span>
                    </button>
                  </div>
                ) : (
                  <Button
                    onClick={handleLogin}
                    className="w-full bg-gorila-yellow text-gorila-primary hover:bg-yellow-400 font-semibold"
                  >
                    Login
                  </Button>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
