import { useScrollFade } from "../hooks/useScrollFade";

export function CTA() {
  const contentFade = useScrollFade({ threshold: 0.2, bidirectional: true });

  return (
    <section id="contact" className="py-20 md:py-32 px-4 md:px-8 bg-black text-white relative">
      {/* Gradient Fade Top */}
      <div className="absolute top-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-b from-black via-black/50 to-transparent pointer-events-none z-10" />
      
      <div 
        ref={contentFade.ref}
        className={`max-w-4xl mx-auto text-center relative z-0 transition-all duration-1000 ${
          contentFade.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-4xl md:text-5xl mb-6 font-light tracking-wide">Experience Excellence</h2>
        <p className="text-gray-300 text-base md:text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Schedule a test drive or visit our Porsche Center to discover what makes
          the GT3 RS truly exceptional.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-black px-8 md:px-12 py-3 md:py-4 text-sm md:text-base tracking-wider font-medium hover:bg-gray-100 transition-colors">
            CONFIGURE NOW
          </button>
          <button className="border border-white px-8 md:px-12 py-3 md:py-4 text-sm md:text-base tracking-wider font-light hover:bg-white hover:text-black transition-colors">
            BOOK TEST DRIVE
          </button>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="border-t border-gray-800 pt-6">
            <div className="text-2xl md:text-3xl mb-3 font-light">518 lb-ft</div>
            <div className="text-gray-400 text-sm md:text-base font-light tracking-wide">MAX TORQUE</div>
          </div>
          <div className="border-t border-gray-800 pt-6">
            <div className="text-2xl md:text-3xl mb-3 font-light">9,000 RPM</div>
            <div className="text-gray-400 text-sm md:text-base font-light tracking-wide">REDLINE</div>
          </div>
          <div className="border-t border-gray-800 pt-6">
            <div className="text-2xl md:text-3xl mb-3 font-light">409 lb</div>
            <div className="text-gray-400 text-sm md:text-base font-light tracking-wide">DOWNFORCE</div>
          </div>
        </div>
      </div>

      {/* Gradient Fade Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 md:h-32 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none z-10" />
    </section>
  );
}