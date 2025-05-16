
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Team from "./pages/Team";
import CaseStudies from "./pages/CaseStudies";
import AIAgents from "./pages/Services/AIAgents";
import AIStrategy from "./pages/Services/AIStrategy";
import SoftwareDevelopment from "./pages/Services/SoftwareDevelopment";
import NotFound from "./pages/NotFound";
import AxonoCaseStudy from "./pages/CaseStudy/Axono";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/team" element={<Team />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/axono" element={<AxonoCaseStudy />} />
          <Route path="/services/ai-agents" element={<AIAgents />} />
          <Route path="/services/ai-strategy" element={<AIStrategy />} />
          <Route path="/services/software-development" element={<SoftwareDevelopment />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
