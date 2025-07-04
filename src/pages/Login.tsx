
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const formatCPF = (value: string) => {
    const digits = value.replace(/\D/g, '');
    return digits.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  };

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCPF(e.target.value);
    setCpf(formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate authentication
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo purposes, accept any CPF with password "123456"
      if (password === '123456') {
        // Store user data in localStorage for demo
        localStorage.setItem('user', JSON.stringify({
          name: 'Thiago Alexandre',
          cpf: cpf,
          isLoggedIn: true
        }));
        navigate('/painel');
      } else {
        setError('CPF ou senha incorretos');
      }
    } catch (err) {
      setError('Erro ao fazer login. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gorila-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gorila-primary font-bold text-2xl">🦍</span>
              </div>
              <CardTitle className="text-2xl text-gorila-primary">Login</CardTitle>
              <CardDescription>
                Acesse sua conta do Gorila Rise
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="cpf">CPF</Label>
                  <Input
                    id="cpf"
                    type="text"
                    placeholder="000.000.000-00"
                    value={cpf}
                    onChange={handleCpfChange}
                    maxLength={14}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="password">Senha</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Digite sua senha"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <Button
                  type="submit"
                  className="w-full bg-gorila-primary hover:bg-gorila-dark"
                  disabled={isLoading}
                >
                  {isLoading ? 'Entrando...' : 'Entrar'}
                </Button>
              </form>

              <div className="mt-6 text-center space-y-4">
                <Link
                  to="/recuperar-senha"
                  className="text-gorila-primary hover:text-gorila-yellow transition-colors"
                >
                  Esqueci minha senha
                </Link>
                
                <div className="border-t pt-4">
                  <p className="text-gray-600 mb-2">Ainda não é membro?</p>
                  <Link to="/cadastro">
                    <Button variant="outline" className="w-full border-gorila-primary text-gorila-primary hover:bg-gorila-primary hover:text-white">
                      Cadastre-se
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gorila-yellow bg-opacity-20 rounded-lg">
                <p className="text-sm text-center text-gorila-primary">
                  <strong>Demo:</strong> Use qualquer CPF e senha "123456"
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Login;
