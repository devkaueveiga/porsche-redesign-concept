import { Hero } from "./components/Hero";
import { Specs } from "./components/Specs";
import { Design } from "./components/Design";
import { Interior } from "./components/Interior";
import { Carousel } from "./components/Carousel";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    // Renderização da landing page principal, excluindo seções temporárias sob instrução
    <main className="min-h-screen bg-black overflow-x-hidden w-full">
      {/* Seção Hero com Parallax e imagem final */}
      <Hero />
      {/* Especificações Técnicas (Technical Excellence) */}
      <Specs />
      {/* Detalhes de Design (Aero Perfection e lateral garage) */}
      <Design />
      {/* Detalhes de Interior (Driver Cockpit Dashboard) */}
      <Interior />
      {/* Galeria de Modelos com GSAP Slide Carousel */}
      <Carousel />
      {/* Call To Action (Experience Excellence) */}
      <CTA />
      {/* Rodapé Padrão */}
      <Footer />
    </main>
  );
}
