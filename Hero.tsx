import { useEffect, useState } from "react";
import heroImage from "figma:asset/9fd5ecb454334374f27c3c681d5aa15594c55d54.png";
import { useScrollFade } from "../hooks/useScrollFade";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const contentFade = useScrollFade({ threshold: 0.3, bidirectional: true });

  useEffect(() => {
    // Trigger fade in animation on mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - GT3 RS White with doors open */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Porsche GT3 RS"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-4 md:px-8 py-6 flex items-center justify-between">
        <div className="text-xl md:text-2xl text-white font-light tracking-[0.3em]">
          PORSCHE
        </div>
        <div className="hidden md:flex gap-8 text-white text-sm tracking-wider">
          <a href="#hero" className="hover:text-gray-300 transition-colors">
            HOME
          </a>
          <a href="#specs" className="hover:text-gray-300 transition-colors">
            SPECS
          </a>
          <a href="#design" className="hover:text-gray-300 transition-colors">
            DESIGN
          </a>
          <a href="#interior" className="hover:text-gray-300 transition-colors">
            INTERIOR
          </a>
          <a href="#gallery" className="hover:text-gray-300 transition-colors">
            GALLERY
          </a>
        </div>
      </nav>

      {/* Hero Content with Bidirectional Fade Animation */}
      <div 
        ref={contentFade.ref}
        className={`relative z-10 text-center text-white px-4 transition-all duration-1000 ease-out ${ 
          isVisible && contentFade.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 font-light tracking-tight">
          GT3 RS
        </h1>
        <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-2xl mx-auto font-light tracking-wide">
          Pure performance. Uncompromising precision.
        </p>
        <button className="group relative bg-white text-black px-8 md:px-12 py-3 md:py-4 text-sm md:text-base tracking-wider font-medium overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
          <span className="relative z-10">EXPLORE NOW</span>
          <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white">
        <span className="text-xs uppercase tracking-[0.2em] font-light">Scroll</span>
        <div className="w-px h-12 bg-white/50 animate-pulse" />
      </div>
    </section>
  );
}