
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { FileText, Check } from 'lucide-react';

const FichaInscricao = () => {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    dataNascimento: '',
    cpf: '',
    rg: '',
    orgaoExpedidor: '',
    enderecoCompleto: '',
    cidade: '',
    estado: '',
    cep: '',
    telefoneCelular: '',
    telefoneResidencial: '',
    email: '',
    profissao: '',
    nomeEmergencia: '',
    parentesco: '',
    telefoneEmergencia: '',
    condicaoMedica: '',
    condicaoMedicaEspecificar: '',
    medicamento: '',
    medicamentoEspecificar: '',
    restricaoAlimentar: '',
    restricaoAlimentarEspecificar: '',
    exercicioFisico: '',
    exercicioFisicoEspecificar: '',
    modalidades: ['', '', ''],
    experienciaPrevia: '',
    nivelExperiencia: '',
    declaracaoVerdadeira: false,
    concordoRegras: false,
    autorizoImagem: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleModalidadeChange = (index: number, value: string) => {
    const newModalidades = [...formData.modalidades];
    newModalidades[index] = value;
    setFormData(prev => ({ ...prev, modalidades: newModalidades }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados da ficha:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
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
                  Ficha Enviada com Sucesso!
                </h2>
                <p className="text-gray-600 mb-6">
                  Sua ficha de inscrição foi recebida. Entraremos em contato em breve.
                </p>
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
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gorila-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="text-gorila-primary" size={32} />
              </div>
              <CardTitle className="text-2xl text-gorila-primary">Ficha de Inscrição</CardTitle>
              <CardDescription>
                Por favor, preencha todos os campos.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Dados Pessoais */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gorila-primary border-b pb-2">Dados Pessoais</h3>
                  
                  <div>
                    <Label htmlFor="nomeCompleto">Nome Completo</Label>
                    <Input
                      id="nomeCompleto"
                      value={formData.nomeCompleto}
                      onChange={(e) => handleInputChange('nomeCompleto', e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="dataNascimento">Data de Nascimento</Label>
                      <Input
                        id="dataNascimento"
                        type="date"
                        value={formData.dataNascimento}
                        onChange={(e) => handleInputChange('dataNascimento', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="cpf">CPF</Label>
                      <Input
                        id="cpf"
                        value={formData.cpf}
                        onChange={(e) => handleInputChange('cpf', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="rg">RG</Label>
                      <Input
                        id="rg"
                        value={formData.rg}
                        onChange={(e) => handleInputChange('rg', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="orgaoExpedidor">Órgão Expedidor</Label>
                    <Input
                      id="orgaoExpedidor"
                      value={formData.orgaoExpedidor}
                      onChange={(e) => handleInputChange('orgaoExpedidor', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="enderecoCompleto">Endereço Completo</Label>
                    <Input
                      id="enderecoCompleto"
                      value={formData.enderecoCompleto}
                      onChange={(e) => handleInputChange('enderecoCompleto', e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="cidade">Cidade</Label>
                      <Input
                        id="cidade"
                        value={formData.cidade}
                        onChange={(e) => handleInputChange('cidade', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="estado">Estado</Label>
                      <Input
                        id="estado"
                        value={formData.estado}
                        onChange={(e) => handleInputChange('estado', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="cep">CEP</Label>
                      <Input
                        id="cep"
                        value={formData.cep}
                        onChange={(e) => handleInputChange('cep', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="telefoneCelular">Telefone (celular)</Label>
                      <Input
                        id="telefoneCelular"
                        value={formData.telefoneCelular}
                        onChange={(e) => handleInputChange('telefoneCelular', e.target.value)}
                        placeholder="(XX) XXXXX-XXXX"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="telefoneResidencial">Telefone (residencial)</Label>
                      <Input
                        id="telefoneResidencial"
                        value={formData.telefoneResidencial}
                        onChange={(e) => handleInputChange('telefoneResidencial', e.target.value)}
                        placeholder="(XX) XXXX-XXXX"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    <div>
                      <Label htmlFor="profissao">Profissão</Label>
                      <Input
                        id="profissao"
                        value={formData.profissao}
                        onChange={(e) => handleInputChange('profissao', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Contato de Emergência */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gorila-primary border-b pb-2">Contato de Emergência</h3>
                  
                  <div>
                    <Label htmlFor="nomeEmergencia">Nome</Label>
                    <Input
                      id="nomeEmergencia"
                      value={formData.nomeEmergencia}
                      onChange={(e) => handleInputChange('nomeEmergencia', e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="parentesco">Parentesco</Label>
                      <Input
                        id="parentesco"
                        value={formData.parentesco}
                        onChange={(e) => handleInputChange('parentesco', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="telefoneEmergencia">Telefone</Label>
                      <Input
                        id="telefoneEmergencia"
                        value={formData.telefoneEmergencia}
                        onChange={(e) => handleInputChange('telefoneEmergencia', e.target.value)}
                        placeholder="(XX) XXXXX-XXXX"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Informações de Saúde */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gorila-primary border-b pb-2">Informações de Saúde (Opcional, mas Recomendado)</h3>
                  
                  <div>
                    <Label className="text-base font-medium">Você possui alguma condição médica que o Clube Gorila Rise deva ter conhecimento (ex: alergias, diabetes, problemas cardíacos, asma)?</Label>
                    <RadioGroup value={formData.condicaoMedica} onValueChange={(value) => handleInputChange('condicaoMedica', value)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sim" id="condicao-sim" />
                        <Label htmlFor="condicao-sim">Sim</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="nao" id="condicao-nao" />
                        <Label htmlFor="condicao-nao">Não</Label>
                      </div>
                    </RadioGroup>
                    {formData.condicaoMedica === 'sim' && (
                      <div className="mt-2">
                        <Label htmlFor="condicaoMedicaEspecificar">Se sim, por favor, especifique:</Label>
                        <Textarea
                          id="condicaoMedicaEspecificar"
                          value={formData.condicaoMedicaEspecificar}
                          onChange={(e) => handleInputChange('condicaoMedicaEspecificar', e.target.value)}
                          rows={3}
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <Label className="text-base font-medium">Você toma algum medicamento regularmente?</Label>
                    <RadioGroup value={formData.medicamento} onValueChange={(value) => handleInputChange('medicamento', value)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sim" id="medicamento-sim" />
                        <Label htmlFor="medicamento-sim">Sim</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="nao" id="medicamento-nao" />
                        <Label htmlFor="medicamento-nao">Não</Label>
                      </div>
                    </RadioGroup>
                    {formData.medicamento === 'sim' && (
                      <div className="mt-2">
                        <Label htmlFor="medicamentoEspecificar">Se sim, por favor, especifique:</Label>
                        <Input
                          id="medicamentoEspecificar"
                          value={formData.medicamentoEspecificar}
                          onChange={(e) => handleInputChange('medicamentoEspecificar', e.target.value)}
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <Label className="text-base font-medium">Possui alguma restrição alimentar?</Label>
                    <RadioGroup value={formData.restricaoAlimentar} onValueChange={(value) => handleInputChange('restricaoAlimentar', value)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sim" id="restricao-sim" />
                        <Label htmlFor="restricao-sim">Sim</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="nao" id="restricao-nao" />
                        <Label htmlFor="restricao-nao">Não</Label>
                      </div>
                    </RadioGroup>
                    {formData.restricaoAlimentar === 'sim' && (
                      <div className="mt-2">
                        <Label htmlFor="restricaoAlimentarEspecificar">Se sim, por favor, especifique:</Label>
                        <Input
                          id="restricaoAlimentarEspecificar"
                          value={formData.restricaoAlimentarEspecificar}
                          onChange={(e) => handleInputChange('restricaoAlimentarEspecificar', e.target.value)}
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <Label className="text-base font-medium">Você pratica exercícios físicos regularmente?</Label>
                    <RadioGroup value={formData.exercicioFisico} onValueChange={(value) => handleInputChange('exercicioFisico', value)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sim" id="exercicio-sim" />
                        <Label htmlFor="exercicio-sim">Sim</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="nao" id="exercicio-nao" />
                        <Label htmlFor="exercicio-nao">Não</Label>
                      </div>
                    </RadioGroup>
                    {formData.exercicioFisico === 'sim' && (
                      <div className="mt-2">
                        <Label htmlFor="exercicioFisicoEspecificar">Se sim, qual(is)?</Label>
                        <Input
                          id="exercicioFisicoEspecificar"
                          value={formData.exercicioFisicoEspecificar}
                          onChange={(e) => handleInputChange('exercicioFisicoEspecificar', e.target.value)}
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Modalidade de Treino */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gorila-primary border-b pb-2">Modalidade de Treino (se aplicável)</h3>
                  
                  <div>
                    <Label className="text-base font-medium mb-3 block">Qual(is) modalidade(s) você tem interesse em treinar? (Ex: Natação, Futebol, Vôlei, Academia, etc.)</Label>
                    {formData.modalidades.map((modalidade, index) => (
                      <div key={index} className="mb-2">
                        <Input
                          value={modalidade}
                          onChange={(e) => handleModalidadeChange(index, e.target.value)}
                          placeholder={`Modalidade ${index + 1}`}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <Label className="text-base font-medium">Você já possui experiência prévia nesta(s) modalidade(s)?</Label>
                    <RadioGroup value={formData.experienciaPrevia} onValueChange={(value) => handleInputChange('experienciaPrevia', value)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sim" id="experiencia-sim" />
                        <Label htmlFor="experiencia-sim">Sim</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="nao" id="experiencia-nao" />
                        <Label htmlFor="experiencia-nao">Não</Label>
                      </div>
                    </RadioGroup>
                    {formData.experienciaPrevia === 'sim' && (
                      <div className="mt-2">
                        <Label htmlFor="nivelExperiencia">Se sim, qual o nível (iniciante, intermediário, avançado)?</Label>
                        <Input
                          id="nivelExperiencia"
                          value={formData.nivelExperiencia}
                          onChange={(e) => handleInputChange('nivelExperiencia', e.target.value)}
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Termos e Condições */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gorila-primary border-b pb-2">Termos e Condições</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="declaracao"
                        checked={formData.declaracaoVerdadeira}
                        onCheckedChange={(checked) => handleInputChange('declaracaoVerdadeira', checked === true)}
                      />
                      <Label htmlFor="declaracao" className="text-sm leading-5">
                        Declaro que as informações acima são verdadeiras e completas.
                      </Label>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="concordo"
                        checked={formData.concordoRegras}
                        onCheckedChange={(checked) => handleInputChange('concordoRegras', checked === true)}
                      />
                      <Label htmlFor="concordo" className="text-sm leading-5">
                        Estou ciente e concordo com as regras e regulamentos do Clube Gorila Rise, disponíveis para consulta na secretaria.
                      </Label>
                    </div>

                    <div>
                      <Label className="text-sm font-medium">Autorizo o Clube Gorila Rise a utilizar minha imagem em materiais de divulgação (fotos/vídeos) relacionados às atividades do clube. (Opcional)</Label>
                      <RadioGroup value={formData.autorizoImagem} onValueChange={(value) => handleInputChange('autorizoImagem', value)}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="sim" id="imagem-sim" />
                          <Label htmlFor="imagem-sim">Sim</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="nao" id="imagem-nao" />
                          <Label htmlFor="imagem-nao">Não</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gorila-primary hover:bg-gorila-dark text-white font-bold py-3"
                  disabled={!formData.declaracaoVerdadeira || !formData.concordoRegras}
                >
                  Enviar Ficha de Inscrição
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FichaInscricao;
