
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { User, Calculator, Target } from 'lucide-react';

interface DietPrescriptionProps {
  userName?: string;
}

const DietPrescription = ({ userName }: DietPrescriptionProps) => {
  const [formData, setFormData] = useState({
    peso: '',
    altura: '',
    idade: '',
    sexo: '',
    nivelAtividade: '',
    objetivo: '',
    restricoes: '',
    preferencias: ''
  });

  const [prescription, setPrescription] = useState<any>(null);

  const calculateDiet = () => {
    const peso = parseFloat(formData.peso);
    const altura = parseFloat(formData.altura);
    const idade = parseInt(formData.idade);

    // Cálculo básico do TMB
    let tmb = 0;
    if (formData.sexo === 'masculino') {
      tmb = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * idade);
    } else {
      tmb = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * idade);
    }

    // Fator de atividade
    const fatores = {
      sedentario: 1.2,
      leve: 1.375,
      moderado: 1.55,
      intenso: 1.725,
      muitoIntenso: 1.9
    };

    const fatorAtividade = fatores[formData.nivelAtividade as keyof typeof fatores] || 1.2;
    const caloriasDiarias = Math.round(tmb * fatorAtividade);

    // Ajuste por objetivo
    let caloriasObjetivo = caloriasDiarias;
    if (formData.objetivo === 'perda') {
      caloriasObjetivo = Math.round(caloriasDiarias * 0.8);
    } else if (formData.objetivo === 'ganho') {
      caloriasObjetivo = Math.round(caloriasDiarias * 1.2);
    }

    // Distribuição de macronutrientes
    const proteinas = Math.round((caloriasObjetivo * 0.25) / 4); // 25% das calorias, 4 cal/g
    const carboidratos = Math.round((caloriasObjetivo * 0.45) / 4); // 45% das calorias, 4 cal/g
    const gorduras = Math.round((caloriasObjetivo * 0.30) / 9); // 30% das calorias, 9 cal/g

    setPrescription({
      calorias: caloriasObjetivo,
      proteinas,
      carboidratos,
      gorduras,
      agua: Math.round(peso * 35) // 35ml por kg
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <User className="text-gorila-primary" size={24} />
            <CardTitle className="text-gorila-primary">Sistema de Prescrição de Dieta</CardTitle>
          </div>
          <CardDescription>
            {userName ? `Prescrição personalizada para ${userName}` : 'Crie sua prescrição nutricional personalizada'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gorila-primary">Dados Pessoais</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="peso">Peso (kg)</Label>
                  <Input
                    id="peso"
                    type="number"
                    value={formData.peso}
                    onChange={(e) => setFormData({...formData, peso: e.target.value})}
                    placeholder="70"
                  />
                </div>
                <div>
                  <Label htmlFor="altura">Altura (cm)</Label>
                  <Input
                    id="altura"
                    type="number"
                    value={formData.altura}
                    onChange={(e) => setFormData({...formData, altura: e.target.value})}
                    placeholder="175"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="idade">Idade</Label>
                  <Input
                    id="idade"
                    type="number"
                    value={formData.idade}
                    onChange={(e) => setFormData({...formData, idade: e.target.value})}
                    placeholder="25"
                  />
                </div>
                <div>
                  <Label htmlFor="sexo">Sexo</Label>
                  <Select value={formData.sexo} onValueChange={(value) => setFormData({...formData, sexo: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="masculino">Masculino</SelectItem>
                      <SelectItem value="feminino">Feminino</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="atividade">Nível de Atividade</Label>
                <Select value={formData.nivelAtividade} onValueChange={(value) => setFormData({...formData, nivelAtividade: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione seu nível" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedentario">Sedentário</SelectItem>
                    <SelectItem value="leve">Atividade Leve</SelectItem>
                    <SelectItem value="moderado">Atividade Moderada</SelectItem>
                    <SelectItem value="intenso">Atividade Intensa</SelectItem>
                    <SelectItem value="muitoIntenso">Muito Intenso</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="objetivo">Objetivo</Label>
                <Select value={formData.objetivo} onValueChange={(value) => setFormData({...formData, objetivo: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seu objetivo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="manutencao">Manutenção</SelectItem>
                    <SelectItem value="perda">Perda de Peso</SelectItem>
                    <SelectItem value="ganho">Ganho de Massa</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="restricoes">Restrições Alimentares</Label>
                <Textarea
                  id="restricoes"
                  value={formData.restricoes}
                  onChange={(e) => setFormData({...formData, restricoes: e.target.value})}
                  placeholder="Ex: Intolerância à lactose, vegetariano..."
                />
              </div>
            </div>

            <div className="space-y-4">
              {prescription ? (
                <div className="bg-gorila-primary/5 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gorila-primary mb-4 flex items-center">
                    <Target className="mr-2" size={20} />
                    Sua Prescrição Nutricional
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white rounded border">
                      <span className="font-medium">Calorias Diárias:</span>
                      <span className="text-gorila-primary font-bold">{prescription.calorias} kcal</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-white rounded border">
                      <span className="font-medium">Proteínas:</span>
                      <span className="text-gorila-primary font-bold">{prescription.proteinas}g</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-white rounded border">
                      <span className="font-medium">Carboidratos:</span>
                      <span className="text-gorila-primary font-bold">{prescription.carboidratos}g</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-white rounded border">
                      <span className="font-medium">Gorduras:</span>
                      <span className="text-gorila-primary font-bold">{prescription.gorduras}g</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-white rounded border">
                      <span className="font-medium">Água:</span>
                      <span className="text-gorila-primary font-bold">{prescription.agua}ml</span>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-gorila-yellow/20 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>Observação:</strong> Esta é uma prescrição básica. Consulte um nutricionista para um plano detalhado.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center p-8">
                  <Calculator className="mx-auto text-gray-400 mb-4" size={48} />
                  <p className="text-gray-600">Preencha os dados para gerar sua prescrição</p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 text-center">
            <Button 
              onClick={calculateDiet}
              className="bg-gorila-primary hover:bg-gorila-dark text-white px-8"
              disabled={!formData.peso || !formData.altura || !formData.idade || !formData.sexo}
            >
              Gerar Prescrição
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DietPrescription;
