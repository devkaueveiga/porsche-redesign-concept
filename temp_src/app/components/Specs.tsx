import { useScrollFade } from "../hooks/useScrollFade";

export function Specs() {
  const titleFade = useScrollFade({ threshold: 0.2, bidirectional: true });
  const specsFade = useScrollFade({ threshold: 0.1, delay: 200, bidirectional: true });
  const cardsFade = useScrollFade({ threshold: 0.1, delay: 400, bidirectional: true });

  const specs = [
    {
      label: "Acceleration",
      value: "0-60 mph",
      detail: "2.7 seconds",
    },
    {
      label: "Top Speed",
      value: "211 mph",
      detail: "340 km/h",
    },
    {
      label: "Power",
      value: "520 HP",
      detail: "386 kW",
    },
    {
      label: "Weight",
      value: "3,164 lbs",
      detail: "1,435 kg",
    },
  ];

  return (
    <section id="specs" className="py-20 md:py-32 px-4 md:px-8 bg-black text-white relative">
      {/* Gradient Fade Top */}
      <div className="absolute top-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-b from-black via-black/50 to-transparent pointer-events-none z-10" />
      
      <div className="max-w-7xl mx-auto relative z-0">
        <div 
          ref={titleFade.ref}
          className={`text-center mb-16 md:mb-20 transition-all duration-1000 ${
            titleFade.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl mb-4 font-light tracking-wide">Technical Excellence</h2>
          <p className="text-gray-400 text-base md:text-lg font-light">
            Engineered for the racetrack. Refined for the road.
          </p>
        </div>

        <div 
          ref={specsFade.ref}
          className={`grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 transition-all duration-1000 ${
            specsFade.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {specs.map((spec, index) => (
            <div key={index} className="text-center border-l border-gray-800 pl-4 md:pl-0 md:border-l-0">
              <div className="mb-3 md:mb-4 text-gray-500 uppercase tracking-[0.2em] text-xs md:text-sm font-light">
                {spec.label}
              </div>
              <div className="text-3xl md:text-4xl mb-2 font-light">{spec.value}</div>
              <div className="text-gray-500 text-sm md:text-base">{spec.detail}</div>
            </div>
          ))}
        </div>

        <div 
          ref={cardsFade.ref}
          className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          <div 
            className={`border border-gray-800 p-6 md:p-8 hover:border-gray-700 transition-all duration-1000 ${
              cardsFade.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: cardsFade.isVisible ? '0ms' : '0ms' }}
          >
            <h3 className="text-xl md:text-2xl mb-4 font-light">Engine</h3>
            <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
              4.0L naturally aspirated flat-six engine with motorsport-derived technology.
            </p>
          </div>
          <div 
            className={`border border-gray-800 p-6 md:p-8 hover:border-gray-700 transition-all duration-1000 ${
              cardsFade.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: cardsFade.isVisible ? '200ms' : '0ms' }}
          >
            <h3 className="text-xl md:text-2xl mb-4 font-light">Transmission</h3>
            <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
              7-speed PDK dual-clutch with lightning-fast shift times.
            </p>
          </div>
          <div 
            className={`border border-gray-800 p-6 md:p-8 hover:border-gray-700 transition-all duration-1000 ${
              cardsFade.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: cardsFade.isVisible ? '400ms' : '0ms' }}
          >
            <h3 className="text-xl md:text-2xl mb-4 font-light">Aerodynamics</h3>
            <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
              Active rear wing and optimized downforce for maximum grip.
            </p>
          </div>
        </div>
      </div>

      {/* Gradient Fade Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-t from-zinc-950 via-black/50 to-transparent pointer-events-none z-10" />
    </section>
  );
}