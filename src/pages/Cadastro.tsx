import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { UserPlus, Check } from 'lucide-react';

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    telefone: '',
    nascimento: '',
    endereco: '',
    cidade: '',
    cep: '',
    modalidade: '',
    plano: '',
    senha: '',
    confirmarSenha: ''
  });
  const [termos, setTermos] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const modalidades = [
    'Musculação',
    'Crossfit',
    'Natação',
    'Artes Marciais',
    'Personal Training'
  ];

  const planos = [
    { nome: 'Mensal', valor: 'R$ 220,00' },
    { nome: 'Semestral', valor: 'R$ 200,00' },
    { nome: 'Anual', valor: 'R$ 190,00' },
    { nome: '3x Semana', valor: 'R$ 160,00' }
  ];

  const formatCPF = (value: string) => {
    const digits = value.replace(/\D/g, '');
    return digits.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  };

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, '');
    return digits.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  };

  const formatCEP = (value: string) => {
    const digits = value.replace(/\D/g, '');
    return digits.replace(/(\d{5})(\d{3})/, '$1-$2');
  };

  const handleInputChange = (field: string, value: string) => {
    let formattedValue = value;
    
    if (field === 'cpf') {
      formattedValue = formatCPF(value);
    } else if (field === 'telefone') {
      formattedValue = formatPhone(value);
    } else if (field === 'cep') {
      formattedValue = formatCEP(value);
    }
    
    setFormData(prev => ({ ...prev, [field]: formattedValue }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!termos) {
      setError('Você deve aceitar os termos e condições');
      return;
    }
    
    if (formData.senha !== formData.confirmarSenha) {
      setError('As senhas não coincidem');
      return;
    }
    
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSuccess(true);
      
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (err) {
      setError('Erro ao criar conta. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <Card>
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="text-green-600" size={32} />
                </div>
                <h2 className="text-2xl font-bold text-gorila-primary mb-4">
                  Bem-vindo ao Bando!
                </h2>
                <p className="text-gray-600 mb-6">
                  Sua conta foi criada com sucesso. Você será redirecionado para o login em instantes.
                </p>
                <div className="animate-pulse">
                  <div className="w-full bg-gorila-yellow h-2 rounded-full"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gorila-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <UserPlus className="text-gorila-primary" size={32} />
              </div>
              <CardTitle className="text-2xl text-gorila-primary">Entre para o Bando</CardTitle>
              <CardDescription>
                Preencha seus dados e comece sua jornada no Gorila Rise
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gorila-primary">Dados Pessoais</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nome">Nome Completo</Label>
                      <Input
                        id="nome"
                        value={formData.nome}
                        onChange={(e) => handleInputChange('nome', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="cpf">CPF</Label>
                      <Input
                        id="cpf"
                        value={formData.cpf}
                        onChange={(e) => handleInputChange('cpf', e.target.value)}
                        maxLength={14}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="telefone">Telefone</Label>
                      <Input
                        id="telefone"
                        value={formData.telefone}
                        onChange={(e) => handleInputChange('telefone', e.target.value)}
                        maxLength={15}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="nascimento">Data de Nascimento</Label>
                      <Input
                        id="nascimento"
                        type="date"
                        value={formData.nascimento}
                        onChange={(e) => handleInputChange('nascimento', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gorila-primary">Endereço</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                      <Label htmlFor="endereco">Endereço</Label>
                      <Input
                        id="endereco"
                        value={formData.endereco}
                        onChange={(e) => handleInputChange('endereco', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="cep">CEP</Label>
                      <Input
                        id="cep"
                        value={formData.cep}
                        onChange={(e) => handleInputChange('cep', e.target.value)}
                        maxLength={9}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="cidade">Cidade</Label>
                    <Input
                      id="cidade"
                      value={formData.cidade}
                      onChange={(e) => handleInputChange('cidade', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gorila-primary">Escolha seu Treino</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="modalidade">Modalidade Principal</Label>
                      <Select onValueChange={(value) => handleInputChange('modalidade', value)} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione uma modalidade" />
                        </SelectTrigger>
                        <SelectContent>
                          {modalidades.map((modalidade) => (
                            <SelectItem key={modalidade} value={modalidade}>
                              {modalidade}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="plano">Plano</Label>
                      <Select onValueChange={(value) => handleInputChange('plano', value)} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione um plano" />
                        </SelectTrigger>
                        <SelectContent>
                          {planos.map((plano) => (
                            <SelectItem key={plano.nome} value={plano.nome}>
                              {plano.nome} - {plano.valor}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gorila-primary">Crie sua Senha</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="senha">Senha</Label>
                      <Input
                        id="senha"
                        type="password"
                        value={formData.senha}
                        onChange={(e) => handleInputChange('senha', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="confirmarSenha">Confirmar Senha</Label>
                      <Input
                        id="confirmarSenha"
                        type="password"
                        value={formData.confirmarSenha}
                        onChange={(e) => handleInputChange('confirmarSenha', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="termos"
                    checked={termos}
                    onCheckedChange={(checked) => setTermos(checked === true)}
                  />
                  <Label htmlFor="termos" className="text-sm">
                    Aceito os <Link to="/termos" className="text-gorila-primary hover:underline">termos e condições</Link> e a <Link to="/privacidade" className="text-gorila-primary hover:underline">política de privacidade</Link>
                  </Label>
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
                  {isLoading ? 'Criando conta...' : 'Entrar para o Bando'}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Já tem uma conta?{' '}
                  <Link to="/login" className="text-gorila-primary hover:underline font-semibold">
                    Faça login
                  </Link>
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

export default Cadastro;
