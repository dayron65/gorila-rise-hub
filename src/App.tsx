
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import PainelAtleta from "./pages/PainelAtleta";
import Loja from "./pages/Loja";
import ClubeVantagens from "./pages/ClubeVantagens";
import Institucional from "./pages/Institucional";
import NotFound from "./pages/NotFound";
import DietPrescription from "./components/DietPrescription";
import SubscriptionSystem from "./components/SubscriptionSystem";
import ExerciseList from "./components/ExerciseList";
import ListaExercicios from "./components/ListaExercicios";
import SportsDrills from "./components/SportsDrills";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/painel" element={<PainelAtleta />} />
          <Route path="/loja" element={<Loja />} />
          <Route path="/clube-vantagens" element={<ClubeVantagens />} />
          <Route path="/institucional" element={<Institucional />} />
          <Route path="/prescricao-dieta" element={<DietPrescription />} />
          <Route path="/assinatura" element={<SubscriptionSystem />} />
          <Route path="/exercicios" element={<ExerciseList />} />
          <Route path="/lista-exercicios" element={<ListaExercicios />} />
          <Route path="/drills" element={<SportsDrills />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
