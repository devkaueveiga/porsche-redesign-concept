import { useScrollFade } from "../hooks/useScrollFade";

export function Design() {
  const contentFade = useScrollFade({ threshold: 0.2, bidirectional: true });
  const imageFade = useScrollFade({ threshold: 0.2, delay: 300, bidirectional: true });

  return (
    <section id="design" className="py-20 md:py-32 px-4 md:px-8 bg-zinc-950 text-white relative">
      {/* Gradient Fade Top */}
      <div className="absolute top-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-b from-zinc-950 via-zinc-950/50 to-transparent pointer-events-none z-10" />
      
      <div className="max-w-7xl mx-auto relative z-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div 
            ref={contentFade.ref}
            className={`transition-all duration-1000 ${
              contentFade.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl mb-6 font-light tracking-wide">Aerodynamic Perfection</h2>
            <p className="text-gray-300 mb-8 text-base md:text-lg leading-relaxed font-light">
              Form follows function. Every surface optimized in the wind tunnel,
              every detail engineered for maximum downforce and minimal drag.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-white/20">
                  <span className="text-base md:text-lg font-light">01</span>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl mb-2 font-light">Carbon Fiber Body</h3>
                  <p className="text-gray-400 text-sm md:text-base font-light">
                    Lightweight CFRP construction for optimal performance
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-white/20">
                  <span className="text-base md:text-lg font-light">02</span>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl mb-2 font-light">Active Rear Wing</h3>
                  <p className="text-gray-400 text-sm md:text-base font-light">
                    DRS system with multiple positions for speed and stability
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-white/20">
                  <span className="text-base md:text-lg font-light">03</span>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl mb-2 font-light">Race-Bred Chassis</h3>
                  <p className="text-gray-400 text-sm md:text-base font-light">
                    Motorsport-derived platform for ultimate precision
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div 
            ref={imageFade.ref}
            className={`relative h-[400px] md:h-[600px] overflow-hidden transition-all duration-1000 ${
              imageFade.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1768066522737-70626a6e21dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMFBvcnNjaGUlMjA5MTElMjBhZXJvZHluYW1pY3xlbnwxfHx8fDE3NzI3NjU0MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Porsche 911 aerodynamic design"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>

      {/* Gradient Fade Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-t from-black via-zinc-950/50 to-transparent pointer-events-none z-10" />
    </section>
  );
}