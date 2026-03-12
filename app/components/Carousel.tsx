"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const models = [
    {
      name: "911",
      subtitle: t.carousel["911subtitle"],
      images: [
        {
          src: "/images/911/911_carrera_1@2x.webp",
          srcset: "/images/911/911_carrera_1@2x.webp 2x"
        },
        {
          src: "/images/911/911_carrera_2@2x.webp",
          srcset: "/images/911/911_carrera_2@2x.webp 2x"
        },
        {
          src: "/images/911/911_carrera_3@2x.webp",
          srcset: "/images/911/911_carrera_3@2x.webp 2x"
        }
      ],
    },
    {
      name: "Taycan",
      subtitle: t.carousel.taycanSubtitle,
      images: [
        { src: "/images/taycan/1-2026-porsche-taycan-4s-front-view.jpg" },
        { src: "/images/taycan/filters_format(webp).jpg" },
        { src: "/images/taycan/taycan-turbo-gt.jpg" }
      ],
    },
    {
      name: "Cayenne",
      subtitle: t.carousel.cayenneSubtitle,
      images: [
        { src: "/images/cayenne/Porsche-Cayenne-Electric-2025-05-770x433.jpg" },
        { src: "/images/cayenne/Porsche-Cayenne-Electric-2026.jpg" },
        { src: "/images/cayenne/Novo-Cayenne-Eletrico-2026-32.jpg" }
      ],
    },
    {
      name: "Panamera",
      subtitle: t.carousel.panameraSubtitle,
      images: [
        { src: "/images/panamera/Porsche-Panamera-2017-4s (1).jpg" },
        { src: "/images/panamera/2024-porsche-panamera-gts-106-670fd5081f04a (1).jpg" },
        { src: "/images/panamera/porsche-panamera-4-2024-001-20240308182339-1280x925.jpg" }
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
          <h2 className="text-4xl md:text-5xl mb-4 font-bold tracking-wide uppercase">{t.carousel.title}</h2>
          <p className="text-gray-400 text-lg md:text-xl font-light">
            {t.carousel.subtitle}
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
              {currentModel.images.map((image: any, imgIndex) => (
                <div
                  key={imgIndex}
                  className="relative h-[300px] md:h-[400px] overflow-hidden group cursor-pointer border border-transparent hover:border-porscheRed transition-colors duration-500"
                >
                  <picture>
                    {image.srcset && <source srcSet={image.srcset} type="image/webp" />}
                    <img
                      src={image.src}
                      alt={`${currentModel.name} view ${imgIndex + 1}`}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                  </picture>
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
            {t.carousel.exploreAll}
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-zinc-950 to-transparent pointer-events-none z-10" />
    </section>
  );
}
