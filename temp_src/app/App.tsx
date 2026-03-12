import { Hero } from "./components/Hero";
import { Specs } from "./components/Specs";
import { Design } from "./components/Design";
import { Interior } from "./components/Interior";
import { Gallery } from "./components/Gallery";
import { Heritage } from "./components/Heritage";
import { Configurator } from "./components/Configurator";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Specs />
      <Design />
      <Interior />
      <Gallery />
      <Heritage />
      <Configurator />
      <CTA />
      <Footer />
    </div>
  );
}