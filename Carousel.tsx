"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const models = [
    {
      name: "911",
      subtitle: "Ícone dos Carros Esportivos",
      images: [
        "https://images.unsplash.com/photo-1611651338412-8403fa6e3599?q=80&w=1920&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1920&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1920&auto=format&fit=crop"
      ],
    },
    {
      name: "Taycan",
      subtitle: "Performance Elétrica",
      images: [
        "https://images.unsplash.com/photo-1642911041079-13c39400413e?q=80&w=1920&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1570374910698-6db3d787e6fb?q=80&w=1920&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1615125468484-088e3dfcabb6?q=80&w=1920&auto=format&fit=crop"
      ],
    },
    {
      name: "Cayenne",
      subtitle: "SUV de Alta Performance",
      images: [
        "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=1920&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1920&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1699325982456-7d76db545a35?q=80&w=1920&auto=format&fit=crop"
      ],
    },
    {
      name: "Panamera",
      subtitle: "Sedã de Luxo",
      images: [
        "https://images.unsplash.com/photo-1601929861989-1740787182a9?q=80&w=1920&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1611157816773-5491e8b19a15?q=80&w=1920&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1570030693095-42077c4849c6?q=80&w=1920&auto=format&fit=crop"
      ],
    },
  ];

  const handleNext = () => {
    if (slideRef.current) {
      gsap.fromTo(
        slideRef.current,
        { opacity: 1, x: 0 },
        { 
          opacity: 0, 
          x: -50, 
          duration: 0.4, 
          onComplete: () => {
             setCurrentIndex((prev) => (prev + 1) % models.length);
             gsap.fromTo(slideRef.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.5 });
          }
        }
      );
    }
  };

  const handlePrev = () => {
    if (slideRef.current) {
      gsap.fromTo(
        slideRef.current,
        { opacity: 1, x: 0 },
        { 
          opacity: 0, 
          x: 50, 
          duration: 0.4, 
          onComplete: () => {
             setCurrentIndex((prev) => (prev - 1 + models.length) % models.length);
             gsap.fromTo(slideRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.5 });
          }
        }
      );
    }
  };

  const currentModel = models[currentIndex];

  return (
    <section id="gallery" className="py-24 md:py-32 px-6 md:px-12 bg-black text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black via-zinc-950 to-transparent pointer-events-none z-10" />
      
      <div className="max-w-7xl mx-auto relative z-0">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl mb-4 font-bold tracking-wide uppercase">Galeria de Modelos</h2>
          <p className="text-gray-400 text-lg md:text-xl font-light">
            Experiência luxuosa em cada linha
          </p>
        </motion.div>

        <div className="relative">
          <button
            onClick={handlePrev}
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-20 w-14 h-14 border border-white/30 flex items-center justify-center hover:bg-porscheRed hover:border-porscheRed hover:text-white transition-all duration-300 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-7 h-7 transition-transform duration-300 group-hover:-translate-x-1" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-20 w-14 h-14 border border-white/30 flex items-center justify-center hover:bg-porscheRed hover:border-porscheRed hover:text-white transition-all duration-300 group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-7 h-7 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <div ref={slideRef} className="w-full">
            <div className="mb-12 text-center">
              <h3 className="text-4xl md:text-5xl font-bold tracking-wide uppercase mb-3">
                {currentModel.name}
              </h3>
              <p className="text-gray-400 text-base md:text-lg font-light tracking-wider uppercase">
                {currentModel.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentModel.images.map((image, imgIndex) => (
                <div
                  key={imgIndex}
                  className="relative h-[300px] md:h-[400px] overflow-hidden group cursor-pointer border border-transparent hover:border-porscheRed transition-colors duration-500"
                >
                  <img
                    src={image}
                    alt={`${currentModel.name} view ${imgIndex + 1}`}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-porscheRed/0 group-hover:bg-porscheRed/20 transition-colors duration-500 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <button className="glow-red border border-white px-12 py-4 text-sm md:text-base tracking-[0.2em] font-bold uppercase hover:bg-white hover:text-black transition-all duration-300">
            Explorar Todos
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-zinc-950 to-transparent pointer-events-none z-10" />
    </section>
  );
}
