"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Parallax background (60fps optimized hardware acceleration)
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 30, // Subtle parallax
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden w-full bg-porscheDark">
      {/* Background Image with Parallax */}
      <div 
        ref={bgRef} 
        className="absolute inset-0 -top-[20%] h-[140%] w-full will-change-transform"
      >
        <img
          src="/images/gt3rs_hero.jpg"
          alt="Porsche GT3 RS Exterior"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Navegação */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-6 md:px-12 py-8 flex items-center justify-between pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-2xl md:text-3xl text-white font-light tracking-[0.4em] pointer-events-auto cursor-pointer"
        >
          PORSCHE
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="hidden md:flex gap-10 text-white text-sm tracking-widest font-medium pointer-events-auto"
        >
          <a href="#hero" className="hover:text-porscheRed transition-colors duration-300">HOME</a>
          <a href="#specs" className="hover:text-porscheRed transition-colors duration-300">SPECS</a>
          <a href="#design" className="hover:text-porscheRed transition-colors duration-300">DESIGN</a>
          <a href="#interior" className="hover:text-porscheRed transition-colors duration-300">INTERIOR</a>
          <a href="#gallery" className="hover:text-porscheRed transition-colors duration-300">GALLERY</a>
        </motion.div>
      </nav>

      {/* Conteúdo Hero com Animação Bidirecional Fade-in/out e Scroll */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }} // Animação ativada ao scrollar em ambas as direções
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} 
        className="relative z-10 text-center text-white px-4 w-full flex flex-col items-center"
      >
        <h1 className="text-6xl md:text-8xl lg:text-9xl mb-4 font-bold tracking-tight text-glow-red select-none">
          GT3 RS
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-2xl mx-auto font-light tracking-wide">
          A aerodinâmica perfeita. O foco absoluto no piloto.
        </p>
        
        <button className="glow-red group relative bg-white border border-white text-black px-12 py-4 text-sm md:text-base tracking-[0.2em] font-bold overflow-hidden transition-all duration-300 hover:text-white uppercase">
          <span className="relative z-10">Explore Agora</span>
          <div className="absolute inset-0 bg-porscheRed transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
        </button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 text-white pointer-events-none"
      >
        <span className="text-xs uppercase tracking-[0.3em] font-light text-gray-400">Scroll</span>
        <div className="w-[1px] h-16 bg-white/30 overflow-hidden relative">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}