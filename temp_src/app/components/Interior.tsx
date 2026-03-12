import interiorImage from "figma:asset/dd5d5a1e7d85f1adce549bc7bd328f30cc6a8cd6.png";
import { useScrollFade } from "../hooks/useScrollFade";

export function Interior() {
  const imageFade = useScrollFade({ threshold: 0.2, bidirectional: true });
  const contentFade = useScrollFade({ threshold: 0.2, delay: 300, bidirectional: true });

  return (
    <section id="interior" className="py-20 md:py-32 px-4 md:px-8 bg-black text-white relative">
      {/* Gradient Fade Top */}
      <div className="absolute top-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-b from-black via-black/50 to-transparent pointer-events-none z-10" />
      
      <div className="max-w-7xl mx-auto relative z-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div 
            ref={imageFade.ref}
            className={`relative h-[400px] md:h-[600px] overflow-hidden order-2 lg:order-1 transition-all duration-1000 ${
              imageFade.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <img
              src={interiorImage}
              alt="Porsche steering wheel and interior"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div 
            ref={contentFade.ref}
            className={`order-1 lg:order-2 transition-all duration-1000 ${
              contentFade.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl mb-6 font-light tracking-wide">Driver-Focused Cockpit</h2>
            <p className="text-gray-300 mb-8 text-base md:text-lg leading-relaxed font-light">
              Every control, every surface designed around the driver. Race-inspired
              ergonomics meet premium craftsmanship for the ultimate driving experience.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-zinc-900 p-5 md:p-6 border border-gray-800 hover:border-gray-700 transition-colors">
                <h3 className="text-lg md:text-xl mb-3 font-light">Sport Steering Wheel</h3>
                <p className="text-gray-400 text-sm md:text-base font-light">
                  Alcantara-wrapped with integrated controls
                </p>
              </div>
              <div className="bg-zinc-900 p-5 md:p-6 border border-gray-800 hover:border-gray-700 transition-colors">
                <h3 className="text-lg md:text-xl mb-3 font-light">Sport Chrono</h3>
                <p className="text-gray-400 text-sm md:text-base font-light">
                  Performance timer and lap tracking system
                </p>
              </div>
              <div className="bg-zinc-900 p-5 md:p-6 border border-gray-800 hover:border-gray-700 transition-colors">
                <h3 className="text-lg md:text-xl mb-3 font-light">Carbon Package</h3>
                <p className="text-gray-400 text-sm md:text-base font-light">
                  Lightweight carbon fiber interior trim
                </p>
              </div>
              <div className="bg-zinc-900 p-5 md:p-6 border border-gray-800 hover:border-gray-700 transition-colors">
                <h3 className="text-lg md:text-xl mb-3 font-light">Sport Seats Plus</h3>
                <p className="text-gray-400 text-sm md:text-base font-light">
                  Full bucket seats with perfect lateral support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Fade Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-10" />
    </section>
  );
}