"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

export function CTA() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-black text-white relative">
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black via-zinc-950 to-transparent pointer-events-none z-10" />
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center relative z-0"
      >
        <h2 className="text-4xl md:text-6xl mb-6 font-bold tracking-wide uppercase">{t.cta.title}</h2>
        <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          {t.cta.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="glow-red bg-white text-black px-12 py-4 text-sm md:text-base tracking-[0.2em] font-bold uppercase hover:bg-black hover:text-white border border-white hover:border-porscheRed transition-all duration-300">
            {t.cta.configure}
          </button>
          <button className="glow-red border border-white px-12 py-4 text-sm md:text-base tracking-[0.2em] font-bold uppercase hover:bg-white hover:text-black hover:border-white transition-all duration-300">
            {t.cta.testDrive}
          </button>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { value: "518 lb-ft", label: t.cta.torque },
            { value: "9.000 RPM", label: t.cta.redline },
            { value: "409 lb", label: t.cta.downforce }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5, color: "#FF0000" }}
              className="border-t border-gray-800 pt-8 cursor-default transition-colors duration-300 group"
            >
              <div className="text-3xl md:text-4xl mb-3 font-bold group-hover:text-porscheRed transition-colors">{stat.value}</div>
              <div className="text-gray-500 text-sm md:text-base font-medium tracking-[0.2em]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none z-10" />
    </section>
  );
}